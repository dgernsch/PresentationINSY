document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    // Aufgaben beim Drücken der Enter-Taste hinzufügen
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Bitte gib eine Aufgabe ein.");
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">X</button>
        `;
        
        // Event Listener für das Markieren als erledigt (Klick auf den Text)
        listItem.querySelector('span').addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // Event Listener für das Löschen
        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = ''; // Eingabefeld leeren
    }
});
