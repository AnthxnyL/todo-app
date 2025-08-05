import { useState } from "react";
import "../styles.css";

function TaskFilters({ onFilterChange }) {
    const [statusFilter, setStatusFilter] = useState("tous");
    const [dateFilter, setDateFilter] = useState("");
    const [dateFilterType, setDateFilterType] = useState("exact");

    const handleStatusChange = (status) => {
        setStatusFilter(status);
        onFilterChange({
            status,
            date: dateFilter,
            dateType: dateFilterType
        });
    };

    const handleDateChange = (date) => {
        setDateFilter(date);
        onFilterChange({
            status: statusFilter,
            date,
            dateType: dateFilterType
        });
    };

    const handleDateTypeChange = (type) => {
        setDateFilterType(type);
        onFilterChange({
            status: statusFilter,
            date: dateFilter,
            dateType: type
        });
    };

    const clearFilters = () => {
        setStatusFilter("tous");
        setDateFilter("");
        setDateFilterType("exact");
        onFilterChange({
            status: "tous",
            date: "",
            dateType: "exact"
        });
    };

    return (
        <div className="task-filters">
            <h3>Filtres</h3>
            
            {/* Filtre par statut */}
            <div className="filter-group">
                <label>Statut :</label>
                <div className="status-buttons">
                    <button 
                        className={statusFilter === "tous" ? "active" : ""}
                        onClick={() => handleStatusChange("tous")}
                    >
                        Tous
                    </button>
                    <button 
                        className={statusFilter === "à faire" ? "active" : ""}
                        onClick={() => handleStatusChange("à faire")}
                    >
                        À faire
                    </button>
                    <button 
                        className={statusFilter === "en cours" ? "active" : ""}
                        onClick={() => handleStatusChange("en cours")}
                    >
                        En cours
                    </button>
                    <button 
                        className={statusFilter === "terminé" ? "active" : ""}
                        onClick={() => handleStatusChange("terminé")}
                    >
                        Terminé
                    </button>
                </div>
            </div>

            {/* Filtre par date */}
            <div className="filter-group">
                <label>Date :</label>
                <div className="date-filter">
                    <select 
                        value={dateFilterType} 
                        onChange={(e) => handleDateTypeChange(e.target.value)}
                        className="date-type-select"
                    >
                        <option value="exact">Date exacte</option>
                        <option value="before">Avant le</option>
                        <option value="after">Après le</option>
                    </select>
                    <input
                        type="date"
                        value={dateFilter}
                        onChange={(e) => handleDateChange(e.target.value)}
                        className="date-input"
                    />
                </div>
            </div>

            {/* Bouton pour effacer les filtres */}
            <button onClick={clearFilters} className="clear-filters">
                Effacer les filtres
            </button>
        </div>
    );
}

export default TaskFilters;
