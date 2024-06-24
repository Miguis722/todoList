// Importamos de petitions...
import { getAllTasks, addTask, updateTask, getTaskById  } from "./components/petitions.js";

const works = [];

// Referencias a los elementos del DOM
const container = document.querySelector('.container');
const containerLoading = document.getElementById('onload');

// Hacemos la función de DOM...
const buttongotthis = document.querySelector(".Gotthis");
const to_do_placeholder_bar = document.querySelector("#to_do_placeholder");


// Función para mostrar el contenedor de carga y ocultar el contenido principal
const showLoadingScreen = () => {
    containerLoading.style.display = 'flex'; // Mostrar contenedor de carga
    container.style.display = 'none'; // Ocultar contenido principal
};

// Función para ocultar el contenedor de carga y mostrar el contenido principal
const hideLoadingScreen = () => {
    containerLoading.style.display = 'none'; // Ocultar contenedor de carga
    container.style.display = 'block'; // Mostrar contenido principal
};

// Simular una carga durante 2 segundos (ajustable según necesites)
setTimeout(() => {
    hideLoadingScreen(); // Llamar a esta función después de 2 segundos
}, 1000); // 2000 milisegundos = 2 segundos

// Función para obtener tareas y actualizar la lista
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
        getAllTasks(); // Obtener las tareas al cargar la página
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
document.addEventListener('DOMContentLoaded', () => {
    showLoadingScreen(); // Mostrar el contenedor de carga al principio
    setTimeout(() => {
        hideLoadingScreen(); // Ocultar el contenedor de carga después de 2 segundos
    }, 2000);
    getAllTasks(); // Obtener las tareas al cargar la página
});

// Función para añadir event listeners a los botones después de renderizar la lista
const addEventListeners = () => {
    document.querySelectorAll('.check_button').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            works[index].completado = !works[index].completado;
            getAllTasks(); // Obtener las tareas al cargar la página
        });
    });

    document.querySelectorAll('.trash_button').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            works.splice(index, 1);
            getAllTasks(); // Obtener las tareas al cargar la página
        });
    });
};
