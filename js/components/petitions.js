// CODIGO PASADO POR GPT PARA EVITAR ERRORES O PROBLEMAS.
import { headers } from "./nav.js";

export const getAllData = async () => {
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
        method: 'POST',
        headers,
        body: JSON.stringify(arg)
    };
    let res = await fetch (url, config);
    let data = await res.json();
    return data;
}