import "../styles.css";

function TaskCounter({ totalTasks, filteredTasks }) {
    const isFiltered = totalTasks !== filteredTasks;
    
    return (
        <div className="task-counter">
            {isFiltered ? (
                <span>
                    Affichage de <strong>{filteredTasks}</strong> sur <strong>{totalTasks}</strong> tâches
                </span>
            ) : (
                <span>
                    <strong>{totalTasks}</strong> tâche{totalTasks > 1 ? 's' : ''} au total
                </span>
            )}
        </div>
    );
}

export default TaskCounter;
