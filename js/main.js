const works = [];

// { texto: 'text_info1', completado: false },
// { texto: 'text_info2', completado: false }
// Más tareas aquí...

export const getTarea = () => {
    const resultList = document.getElementById('task_list');
    resultList.innerHTML = works.map((work, index) => `
        <li>
            <p class="${work.completado ? 'completed' : ''}">${work.texto}</p>
            <button class="check_button" data-index="${index}">✔</button>
            <button class="trash_button" data-index="${index}">🗑️</button>
        </li>
    `).join('');
    addEventListeners();
};

// Añadir nueva tarea
const addTask = () => {
    const input = document.getElementById('to_do_placeholder');
    const newTask = input.value.trim();
    if (newTask) {
        works.push({ texto: newTask, completado: false });
        getTarea();
        input.value = '';
    }
};

// Añadir event listener al botón
document.querySelector('.Gotthis').addEventListener('click', addTask);

// Añadir event listener para la tecla Enter en el campo de entrada
document.getElementById('to_do_placeholder').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Inicializar lista de tareas
document.addEventListener('DOMContentLoaded', getTarea);

// Función para añadir event listeners a los botones después de renderizar la lista
const addEventListeners = () => {
    document.querySelectorAll('.check_button').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            works[index].completado = !works[index].completado;
            getTarea();
        });
    });

    document.querySelectorAll('.trash_button').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            works.splice(index, 1);
            getTarea();
        });
    });
};
