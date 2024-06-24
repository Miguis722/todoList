// CODIGO PASADO POR GPT PARA EVITAR ERRORES O PROBLEMAS.
import { headers } from "./nav.js";

export const getAllTasks = async () => {
    console.log("Trayendo todas las tareas...");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/todoList`; // Link del API de donde sacamos la info
    const config = {
        method: 'GET' // Conseguimos toda la información de algún API, o de algun sitio.
    };

    try {
        let res = await fetch(url, config);

        if (!res.ok) {
            //  Aqui estamos haciendo que en cuyo caso llegue a haber un error. Se lanzara un mesanje
            let errorMessage = `Algo ha fallado :c . Vuelva a intentarlo!`;
            throw new Error(errorMessage);
        }

        let data = await res.json();// Si no hubo ningún error al traer la data, entonces procesara la data
        return data; // Y mostrara la info que estamos trayendo.
    } catch (error) {
        console.error('Error con la data: ', error.message);
        throw error; // Si no hubo ningun error, y paso el primer filtro
        // Pero dentro de algún proceso pasó algo, mostrara otro error.
    }
};

export const addTask = async (arg) => {
    console.log("Creando nueva tarea ...");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/todoList`; // Link del API de donde sacamos la info
    const config = {
        method: 'POST', // Usamos el método POST para crear una nueva tarea
        headers, // Los headers que necesitamos para la petición
        body: JSON.stringify(arg) // Convertimos el objeto 'arg' en un string JSON para enviarlo en el body de la petición
    };

    try {
        let res = await fetch(url, config); // Hacemos la petición fetch con la URL y la configuración establecida

        if (!res.ok) {
            // En caso de que haya un error en la respuesta, lanzamos un error con un mensaje adecuado
            throw new Error('Error al crear la tarea.');
        }

        let data = await res.json(); // Si la petición es exitosa, procesamos la respuesta como JSON
        return data; // Devolvemos la data recibida
    } catch (error) {
        console.error('Error al crear la tarea: ', error.message); // Mostramos un mensaje de error en la consola
        throw error; // Lanzamos el error para ser manejado por quien llame a esta función
    }
}

export const updateTask = async (arg) => {
    console.log("Actualizando ...");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/todoList`; // Link del API de donde sacamos la info
    const config = {
        method: 'PUT', // Usamos el método PUT para actualizar una tarea existente
        headers, // Los headers que necesitamos para la petición
        body: JSON.stringify(arg) // Convertimos el objeto 'arg' en un string JSON para enviarlo en el body de la petición
    };

    try {
        let res = await fetch(url, config); // Hacemos la petición fetch con la URL y la configuración establecida

        if (!res.ok) {
            // En caso de que haya un error en la respuesta, lanzamos un error con un mensaje adecuado
            let errorMessage = `Error al actualizar la tarea.`;
            throw new Error(errorMessage);
        }

        let data = await res.json(); // Si la petición es exitosa, procesamos la respuesta como JSON
        return data; // Devolvemos la data recibida
    } catch (error) {
        console.error('Error al actualizar la tarea: ', error.message); // Mostramos un mensaje de error en la consola
        throw error; // Lanzamos el error para ser manejado por quien llame a esta función
    }
};

export const getTaskById = async (id) => {
    console.log("Buscando la tarea ...");
    const url = `https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`; // Link del API de donde sacamos la info
    const config = {
        method: 'GET', // Usamos el método GET para obtener la información de una tarea específica
    };

    try {
        let res = await fetch(url, config); // Hacemos la petición fetch con la URL y la configuración establecida

        if (!res.ok) {
            // En caso de que haya un error en la respuesta, lanzamos un error con un mensaje adecuado
            let errorMessage = `Error al buscar la tarea.`;
            throw new Error(errorMessage);
        }

        let data = await res.json(); // Si la petición es exitosa, procesamos la respuesta como JSON
        return data; // Devolvemos la data recibida
    } catch (error) {
        console.error('Error al buscar la tarea: ', error.message); // Mostramos un mensaje de error en la consola
        throw error; // Lanzamos el error para ser manejado por quien llame a esta función
    }   
};
