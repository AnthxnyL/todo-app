function TaskCard({ task, onDelete, onEdit }) {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Date limite: {task.date ? new Date(task.date).toLocaleDateString() : 'Pas de date limite'}</p>
            <button onClick={() => onEdit(task.id)}>Modifier</button>
            <button onClick={() => onDelete(task.id)}>Supprimer</button>
        </div>
    );
}

export default TaskCard;
