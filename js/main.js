//Suponiendo que 'users' es una variable que contiene la lista de usuarios
const works = [
    {texto: 'text_info1', botón1: "✔", botón2: "🗑️"},
    {texto: 'text_info2', botón1: "✔", botón2: "🗑️"}
    // Más usuarios aquí...
];

export const getTarea = () => {
    resultList.innerHTML = works.map(work
    /*HTML*/`<li>
                <p>${work.info}</p>
                <button class="check_button">✔</button>
                <button class="trash_button">🗑️</button>
            </li>
`).join('');
};

// Llamada de la función getTarea
getTarea();

// Añadir nueva tarea
document.querySelector('.Gotthis').addEventListener('click', () => {
    const input = document.getElementById('to_do_placeholder');
    const newTask = input.value.trim();
    if (newTask) {
        works.push({ texto: newTask });
        getTarea();
        input.value = '';
    }
});

// Inicializar lista de tareas
document.addEventListener('DOMContentLoaded', getTarea);