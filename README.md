# 📋 Mini-Application de Gestion de Tâches

## 🧱 Stack Technique

### 🔹 Frontend
- [React](https://react.dev/) (Vite)
- `fetch` natif pour les appels API (pas de librairie externe)
- JSX fonctionnel, composants simples

**Choix justifié** : React est imposé. J’ai utilisé `fetch` plutôt que Axios pour rester simple et éviter une dépendance supplémentaire.

### 🔹 Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- CORS activé
- Stockage en mémoire (`let tasks = []`)

**Choix justifié** : Express est rapide à mettre en place pour une API REST. Le stockage en mémoire a été préféré à une base de données pour rester concentré sur les fonctionnalités principales dans le temps imparti.


## Lancement du projet

### Backend
    cd back
    npm install
    npm run dev

### Frontend
    cd front
    npm install
    npm run dev

### Accès à l'application
Ouvrez votre navigateur et allez à : `http://localhost:3000`
