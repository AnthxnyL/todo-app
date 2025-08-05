import { useState } from "react";

function TaskForm({ onCreate }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("à faire");
    const [date, setDate] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
    
        const newTask = { 
            title, 
            description: description || "", 
            status, 
            date: date || "" 
        };
        onCreate(newTask);
        setTitle("");
        setDescription("");
        setStatus("à faire");
        setDate("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="à faire">À faire</option>
            <option value="en cours">En cours</option>
            <option value="terminé">Terminé</option>
        </select>
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Ajouter une tâche</button>
        </form>
    );
}

export default TaskForm;
