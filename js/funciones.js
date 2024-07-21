export function renderizarHTML(arregloProductos, contenedorBebidasCalientes, contenedorBebidasFrias, contenedorComidaDulce, contenedorComidaSalada) {
    let htmlCalientes = ''; // HTML para bebidas calientes
    let htmlFrias = ''; // HTML para bebidas frías
    let htmlDulces = ''; // HTML para comida dulce
    let htmlSaladas = ''; // HTML para comida salada

    // Recorre el arreglo de productos
    arregloProductos.forEach((producto) => {
        // Crea el HTML para cada producto
        const productoHTML = `
            <li class="items">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="box">
                    <h4 class="title">${producto.nombre}</h4>
                    <p class="descripcion">${producto.descripcion}</p>
                </div>
                <div class="price">${producto.precio}</div>
            </li>
        `;

        // Agrega el producto al HTML correspondiente según su tipo
        if (producto.tipo === 'caliente') {
            htmlCalientes += productoHTML;
        } else if (producto.tipo === 'fria') {
            htmlFrias += productoHTML;
        } else if (producto.tipo === 'dulce') {
            htmlDulces += productoHTML;
        } else if (producto.tipo === 'salada') {
            htmlSaladas += productoHTML;
        }
    });

    // Inserta el HTML en los contenedores correspondientes
    contenedorBebidasCalientes.innerHTML = htmlCalientes;
    contenedorBebidasFrias.innerHTML = htmlFrias;
    contenedorComidaDulce.innerHTML = htmlDulces;
    contenedorComidaSalada.innerHTML = htmlSaladas;
}

export function normalizarTexto(texto) {
    // Convierte el texto a minúsculas, normaliza para eliminar acentos y caracteres especiales
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}