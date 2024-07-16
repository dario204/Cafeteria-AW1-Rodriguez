const cafeteria = {
    nombre: "El rincón del café",
    productos:[
        {
            id: 1,
            nombre: "espresso",
            precio: 2000,
            imagen: "./imagenes/1602012253938.webp",
            descripcion: "Shot de Café",
            tipo: "caliente"
        },
        {
            id: 2,
            nombre: "latte",
            precio: 2000,
            imagen: "./imagenes/Latte.webp",
            descripcion: "Shot de Espresso, leche, capa de espuma",
            tipo: "caliente"
        },
        {
            id: 3,
            nombre: "capuccino",
            precio: 2100,
            imagen: "./imagenes/Capuccino.webp",
            descripcion: "Crema, espresso, chocolate, espuma de leche",
            tipo: "caliente"
        },
        {
            id: 4,
            nombre: "Flat White",
            precio: 2000,
            imagen: "./imagenes/Flat.webp",
            descripcion: "Doble shot de espresso y leche, capa fina de espuma",
            tipo: "caliente"
        },
        {
            id: 5,
            nombre: "Moka",
            precio: 2000,
            imagen: "./imagenes/Mocaccino.webp",
            descripcion: "chocolate, shot de espresso, leche, chocolate rallado",
            tipo: "caliente"
        },
        {
            id: 6,
            nombre: "Te",
            precio: 2000,
            imagen: "./imagenes/TE.webp",
            descripcion: "Consultar opciones",
            tipo: "caliente"
        },
        {
            id: 7,
            nombre: "Ice Latte",
            precio: 2000,
            imagen: "./imagenes/Iced-Latte.webp",
            descripcion: "Hielo, short de espresso, leche",
            tipo: "fria"
        },
        {
            id: 8,
            nombre: "Frapuccino de Caramelo",
            precio: 2000,
            imagen: "./imagenes/Frapuccino.webp",
            descripcion: "Caramelo, café, leche, hielo",
            tipo: "fria"
        },
        {
            id: 9,
            nombre: "Te Frio",
            precio: 2000,
            imagen: "./imagenes/te-frio.jpg",
            descripcion: "",
            tipo: "fria"
        },
        {
            id: 10,
            nombre: "Chocolatada",
            precio: 2000,
            imagen: "./imagenes/chocolatada.jpg",
            descripcion: "",
            tipo: "fria"
        },
        {
            id: 11,
            nombre: "Croissant",
            precio: 2000,
            imagen: "./imagenes/croissant.jpg",
            descripcion: "",
            tipo: "dulce"
        },
        {
            id: 12,
            nombre: "Alfajor de Maicena",
            precio: 2000,
            imagen: "./imagenes/alfajor.jpg",
            descripcion: "",
            tipo: "dulce"
        },
        {
            id: 13,
            nombre: "Torta del dia",
            precio: 2000,
            imagen: "./imagenes/torta.webp",
            descripcion: "Porción de torta del día",
            tipo: "dulce"
        },
        {
            id: 14,
            nombre: "Brownie",
            precio: 2000,
            imagen: "./imagenes/brownie.webp",
            descripcion: "",
            tipo: "dulce"
        },
        {
            id: 15,
            nombre: "Avocado Toast",
            precio: 2000,
            imagen: "./imagenes/avocado.jpg",
            descripcion: "Pasta de queso crema con sésamo tostado, huevo y palta",
            tipo: "salada"
        },
        {
            id: 16,
            nombre: "Tostado de jamon y queso",
            precio: 2000,
            imagen: "./imagenes/tostado.jpg",
            descripcion: "",
             tipo: "salada"
        },
        {
            id: 17,
            nombre: "Scon salado",
            precio: 2000,
            imagen: "./imagenes/scon.jpg",
            descripcion: "",
             tipo: "salada"
        },
    ]
}

console.log(cafeteria);

// Referenciamos contenedores
const contenedorBebidasCalientes = document.getElementById('id-productos-calientes');
const contenedorBebidasFrias = document.getElementById('id-productos-frias');
const contenedorComidaDulce = document.getElementById('id-productos-dulces');
const contenedorComidaSalada = document.getElementById('id-productos-saladas');

// FUNCIONES ------------------------------
function renderizarHTML(arregloProductos) {
    let htmlCalientes = '';
    let htmlFrias = '';
    let htmlDulces = '';
    let htmlSaladas = '';

    arregloProductos.forEach((producto) => {
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

    // Insertamos el HTML en los contenedores correspondientes
    contenedorBebidasCalientes.innerHTML = htmlCalientes;
    contenedorBebidasFrias.innerHTML = htmlFrias;
    contenedorComidaDulce.innerHTML = htmlDulces;
    contenedorComidaSalada.innerHTML = htmlSaladas;
}

renderizarHTML(cafeteria.productos);

// ESCUCHADORES DE EVENTOS ----------------
const selectorCategoria = document.getElementById('selector-categoria');
const buscador = document.getElementById('buscador');

selectorCategoria.addEventListener('change', (evento) => {
    // Obtenemos el valor seleccionado del elemento select
    const categoria = evento.target.value;
    // Filtramos el array de productos y creamos un nuevo array
    const productosFiltrados = cafeteria.productos.filter((producto) => {
        return producto.tipo === categoria;
    });
    // Si el array contiene productos, los renderizamos
    if (productosFiltrados.length > 0) {
        renderizarHTML(productosFiltrados);
    } else {
        // si no contiene elementos, imprimimos todos
        renderizarHTML(cafeteria.productos);
    }
});

buscador.addEventListener('input', (evento) => {
    // Obtenemos el valor seleccionado del elemento select
    const buscar = evento.target.value;
    // Filtramos el array de productos y creamos un nuevo array
    const productosFiltrados = cafeteria.productos.filter((producto) => {
        // la condicion es: si el nombre del producto contiene lo que el usuario escribe
        // para mejorar las coincidencias, podemos pasar todo a minúsculas:
        const productoNombreMinusculas = producto.nombre.toLowerCase();
        const buscarMinusculas = buscar.toLowerCase();
        // Ahora todo está en minúsculas:
        return productoNombreMinusculas.includes(buscarMinusculas);
    });

    renderizarHTML(productosFiltrados);
});

function normalizarTexto(texto) {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}