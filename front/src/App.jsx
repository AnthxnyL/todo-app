import { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api/tasks.js';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';
import EditTaskModal from './components/EditTaskModal.jsx';
import TaskFilters from './components/TaskFilters.jsx';
import TaskCounter from './components/TaskCounter.jsx';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "tous",
    date: "",
    dateType: "exact"
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
      setFilteredTasks(data);
    };
    fetchTasks();
  }, []);

  const filterTasks = (tasksToFilter, currentFilters) => {
    let filtered = [...tasksToFilter];

    if (currentFilters.status !== "tous") {
      filtered = filtered.filter(task => task.status === currentFilters.status);
    }

    if (currentFilters.date) {
      const filterDate = new Date(currentFilters.date);
      filtered = filtered.filter(task => {
        if (!task.date) return false;
        const taskDate = new Date(task.date);
        
        switch (currentFilters.dateType) {
          case "exact":
            return taskDate.toDateString() === filterDate.toDateString();
          case "before":
            return taskDate <= filterDate;
          case "after":
            return taskDate >= filterDate;
          default:
            return true;
        }
      });
    }

    return filtered;
  };

  
  useEffect(() => {
    const filtered = filterTasks(tasks, filters);
    setFilteredTasks(filtered);
  }, [tasks, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCreateTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = async (id, updatedTask) => {
    const task = await updateTask(id, updatedTask);
    setTasks(tasks.map(t => (t.id === id ? task : t)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleEditTask = (id) => {
    const task = tasks.find(t => t.id === id);
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onCreate={handleCreateTask} />
      <TaskFilters onFilterChange={handleFilterChange} />
      <TaskCounter totalTasks={tasks.length} filteredTasks={filteredTasks.length} />
      <TaskList 
        tasks={filteredTasks} 
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
      <EditTaskModal
        task={editingTask}
        onUpdate={handleUpdateTask}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
    </div>
  );
}

export default App;
