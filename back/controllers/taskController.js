import { tasks } from '../data/tasks.js';

export const getTasks = (req, res) => {
   try {
        res.status(200).json(tasks);
   } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des tâches' });
   }
}

export const createTask = (req, res) => {
    const { title, description, status, date } = req.body;

    try {

        if(!title) {
            return res.status(400).json({ message: 'Le titre de la tâche est requis' });
        }

        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            status,
            date
        };

        tasks.push(newTask);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de la tâche' });
    }
}

export const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status, date } = req.body;
    const task = tasks.find(task => task.id === parseInt(id));

    try {

        if (!task) {
            return res.status(404).json({ message: 'Tâche non trouvée' });
        }
        if (title) task.title = title;
        if (description) task.description = description;
        if (status) task.status = status;
        if (date) task.date = date;

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la tâche' });
    }
}

export const deleteTask = (req, res) => {
    const { id } = req.params;

    try {
        const index = tasks.findIndex(task => task.id === parseInt(id));
        if (index !== -1) {
            tasks.splice(index, 1);
            res.status(200).send('Tâche supprimée avec succès');
        } else {
            res.status(404).json({ message: 'Tâche non trouvée' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la tâche' });
    }
}

