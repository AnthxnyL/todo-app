const API_URL = 'http://localhost:3000/tasks';

export const getTasks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erreur lors de la récupération des tâches');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const createTask = async (task) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) throw new Error('Erreur lors de la création de la tâche');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const updateTask = async (id, task) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) throw new Error('Erreur lors de la mise à jour de la tâche');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Erreur lors de la suppression de la tâche');
        return await response.text();
    } catch (error) {
        console.error(error);
    }
};
