const dbProductos = [
    {
        id: 1,
        nombre: 'Johnnie Walker Blue Label',
        tipo: 'whisky',
        tamano: 750,
        precio: 91079
    },

    {
        id: 2,
        nombre: 'The Macallan 18 Double Cask Single Maltl',
        tipo: 'whisky',
        tamano: 700,
        precio: 429900
    },
    {
        id: 3,
        nombre: 'APUNTES - Malbec Orgánico',
        tipo: 'vino',
        tamano: 750,
        precio: 12500
    },
    {
        id: 4,
        nombre: 'APUNTES - Semillón Fumé',
        tipo: 'vino',
        tamano: 750,
        precio: 12500
    },
    {
        id: 5,
        nombre: 'Copa de cristal para vino',
        tipo: 'cristaleria',
        tamano: 390,
        precio: 7590
    },
    {
        id: 6,
        nombre: 'Vaso de cristal para whisky',
        tipo: 'cristaleria',
        tamano: 200,
        precio: 3350
    },
];

let edad = prompt("ingrese su edad:");
let listaProductos = [];
let carrito = [];
let trueOrFalse = true;

class Producto {
    constructor(id, nombre, tipo, tamano, precio) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.tamano = tamano;
        this.precio = precio;
    }
    iva() {
        return this.precio * 0.21;
    }
}

function pushProductos() {
    for (const producto of dbProductos) {
        listaProductos.push(new Producto(producto.id, producto.nombre, producto.tipo, producto.tamano, producto.precio))
    }
}

pushProductos();

while (edad < 18) {
    edad = prompt("ingrese nuevamente su edad:")
}

alert("bienvenido a la pagina de distribuidora masi");

function initProgram() {
    while (trueOrFalse) {
        let selectSeccion = prompt("¡BIENVENIDO A LA TIENDA ONLINE DE DISTRIBUIDORA MASI! \n ¿Qué quieres hacer? \n 1. Ver productos disponibles \n 2. Ver whiskis disponibles  \n 3. Ver vinos disponibles \n 4. Ver productos de cristaleria disponibles \n 5.Ordenar los productos por precio(Ascendente)\n 6. Ordenar los productos por precio(descendente) \n 7. Buscar productos \n 8. Comprar un producto \n 9. Salir")
        switch (selectSeccion) {
            case "1":

                break
            case "2":

                break
            case "3":

                break
            case "4":

                break
            case "5":

                break
            case "6":

                break
            case "7":

                break
            case "8":

                break
            case "9":

                break
            default:
                alert("No es una opción válida")
                selectSeccion = prompt("¡BIENVENIDO A LA TIENDA ONLINE DE DISTRIBUIDORA MASI! \n ¿Qué quieres hacer? \n 1. Ver todos los productos disponibles \n 2. Ver whiskis disponibles  \n 3. Ver vinos disponibles \n 4. Ver productos de cristaleria disponibles \n 5.Ordenar los productos por precio(Ascendente)\n 6. Ordenar los productos por precio(descendente) \n 7. Buscar productos \n 8. Comprar un producto \n 9. Salir")
                break
        }
    }
}

initProgram();

//mostrar productos
function