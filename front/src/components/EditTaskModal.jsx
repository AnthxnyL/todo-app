import { useState, useEffect } from "react";

function EditTaskModal({ task, onUpdate, onClose, isOpen }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("à faire");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (task) {
            setTitle(task.title || "");
            setDescription(task.description || "");
            setStatus(task.status || "à faire");
            setDate(task.date || "");
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        const updatedTask = { title, description, status, date };
        onUpdate(task.id, updatedTask);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Modifier la tâche</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleSubmit} className="edit-form">
                    <div className="form-group">
                        <label>Titre *</label>
                        <input
                            type="text"
                            placeholder="Titre de la tâche"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            placeholder="Description de la tâche"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                        />
                    </div>
                    <div className="form-group">
                        <label>Statut</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="à faire">À faire</option>
                            <option value="en cours">En cours</option>
                            <option value="terminé">Terminé</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date limite</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="button" onClick={onClose} className="cancel-button">
                            Annuler
                        </button>
                        <button type="submit" className="save-button">
                            Sauvegarder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTaskModal;
