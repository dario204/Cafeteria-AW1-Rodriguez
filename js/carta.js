import { renderizarHTML, normalizarTexto } from './funciones.js';

// Selección de elementos del DOM
const contenedorBebidasCalientes = document.getElementById('id-productos-calientes');
const contenedorBebidasFrias = document.getElementById('id-productos-frias');
const contenedorComidaDulce = document.getElementById('id-productos-dulces');
const contenedorComidaSalada = document.getElementById('id-productos-saladas');
const selectorCategoria = document.getElementById('selector-categoria');
const buscador = document.getElementById('buscador');

let productos = []; // Declaración de la variable 'productos'

// Función para renderizar productos
function mostrarProductos(productos) {
    renderizarHTML(productos, contenedorBebidasCalientes, contenedorBebidasFrias, contenedorComidaDulce, contenedorComidaSalada);
}

// Función para cargar productos desde JSON
async function cargarProductos() {
    try {
        const respuesta = await fetch('./productos.json'); // Realiza una petición fetch al archivo JSON
        const datos = await respuesta.json(); // Convierte la respuesta a formato JSON
        productos = datos.productos; // Asigna los datos de los productos a la variable 'productos'
        mostrarProductos(productos); // Llama a la función para mostrar los productos
    } catch (error) {
        console.error('Error al cargar los productos:', error); // Muestra un mensaje de error en la consola si la carga falla
    }
}

// Evento de cambio en el selector de categoría
selectorCategoria.addEventListener('change', (evento) => {
    const categoria = evento.target.value; // Obtiene el valor de la categoría seleccionada
    const productosFiltrados = productos.filter((producto) => producto.tipo === categoria); // Filtra los productos por categoría
    mostrarProductos(productosFiltrados.length > 0 ? productosFiltrados : productos); // Muestra los productos filtrados o todos si no hay filtrados
});

// Evento de entrada en el buscador
buscador.addEventListener('input', (evento) => {
    const buscar = evento.target.value; // Obtiene el texto ingresado en el buscador
    const productosFiltrados = productos.filter((producto) => {
        const productoNombreMinusculas = producto.nombre.toLowerCase(); // Convierte el nombre del producto a minúsculas
        const buscarMinusculas = buscar.toLowerCase(); // Convierte el texto de búsqueda a minúsculas
        return productoNombreMinusculas.includes(buscarMinusculas); // Filtra los productos que incluyen el texto de búsqueda
    });
    mostrarProductos(productosFiltrados); // Muestra los productos filtrados
});

cargarProductos(); // Llama a la función para cargar los productos al inicio

