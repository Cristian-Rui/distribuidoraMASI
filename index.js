// lista de productos
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

// //declaracion de variables
// let listaProductos = [];
// let carrito = [];
// let trueOrFalse = true;
// let nombreCliente = prompt("Ingrese su nombre:");
// let apellidoCliente = prompt("Ingrrese su apellido:");
// let edadCliente = Number(prompt("ingrese su edad:"));

// //contructor de la clase persona para que el cliente cree una especie de cuenta
// class Persona {
//     constructor(obj) {
//         this.nombreCliente = obj.nombreCliente;
//         this.apellidoCliente = obj.apellidoCliente;
//         this.edadCliente = obj.edadCliente;
//     }
//     dataCliente() {
//         return `Nombre: ${this.nombre} ${this.apellido}\nEdad: ${this.edad}`
//     }

// }
// const cliente = new Persona(
//     {
//         nombreCliente: nombreCliente,
//         apellidoCliente: apellidoCliente,
//         edadCliente: edadCliente
//     }
// )
// //constructor de la clase de los productos
// class Producto {
//     constructor(id, nombre, tipo, tamano, precio) {
//         this.id = id;
//         this.nombre = nombre;
//         this.tipo = tipo;
//         this.tamano = tamano;
//         this.precio = precio;
//     }
//     iva() {
//         return this.precio * 0.21;
//     }
// }

// //pasamos por la clase constructora de productos la lista del principio
// function pushProductos() {
//     for (const producto of dbProductos) {
//         listaProductos.push(new Producto(producto.id, producto.nombre, producto.tipo, producto.tamano, producto.precio))
//     }
// }

// pushProductos();

// //validamos que el cliente sea mayor de edad
// while (trueOrFalse) {
//     if (nombreCliente == "" || isNaN(edadCliente) || apellidoCliente == "") {
//         alert("Lo sentimos, hay datos incompletos.\nCompleta todos los campos para poder ingresar al menu principal.");
//         nombreCliente = prompt("Ingrese su nombre:");
//         apellidoCliente = prompt("Ingrrese su apellido:");
//         edadCliente = Number(prompt("ingrese su edad:"));
//     }
//     if (edadCliente < 18) {
//         alert("Tenés que tener 18 años o más para beber alcohol..\nTranquilo, ¡el tiempo pasa rápido!");
//         edadCliente = Number(prompt("ingrese su edad:"));
//     } else {
//         initProgram();
//     }
// }

// alert("bienvenido a la pagina de distribuidora masi");

// initProgram();

// //menu de simulacion de ecommerce
// function initProgram() {
//     while (trueOrFalse) {
//         let selectSeccion = prompt("¡BIENVENIDO A LA TIENDA ONLINE DE DISTRIBUIDORA MASI! \n ¿Qué quieres hacer? \n 1. Ver productos disponibles \n 2. Buscar productos por nombre \n 3. Administrar mi carrito \n 4. Salir")
//         switch (selectSeccion) {
//             case "1":
//                 mostrarProductos();
//                 break
//             case "2":
//                 buscarPorNombre();
//                 break
//             case "3":
//                 administrarCarrito();
//                 break
//             case "4":
//                 trueOrFalse = false;
//                 break
//             default:
//                 alert("No es una opción válida")
//                 selectSeccion = prompt("¡BIENVENIDO A LA TIENDA ONLINE DE DISTRIBUIDORA MASI! \n ¿Qué quieres hacer? \n 1. Ver productos disponibles \n 2. Buscar productos por nombre \n 3. Comprar un producto \n 4. Salir")
//                 break
//         }
//     }
// }



// //mostrar productos
// function mostrarProductos() {
//     let seccionAVer = prompt("que productos desea ver?:\n 1.Mostrar todos\n 2.Ver solamente whiskis\n 3.Ver solamente vinos\n 4.Ver solamente productos de cristaleria\n 5.Volver al menu principal")
//     switch (seccionAVer) {
//         case "1":
//             mostrarTodos();
//             break
//         case "2":
//             filtrarProductos('whisky')
//             break
//         case "3":
//             filtrarProductos('vino')
//             break
//         case "4":
//             filtrarProductos('cristaleria')
//             break
//         case "5":
//             initProgram();
//             break
//         default:
//             alert("No es una opción válida")
//             mostrarProductos();
//             break
//     }
// }

// function mostrarTodos() {
//     listaProductos.forEach(producto => {
//         alert(`${producto.tipo} ${producto.nombre}, ${producto.tamano}ml: $${producto.precio}`)
//     });
// }

// function filtrarProductos(filtro) {
//     const listaFiltrada = listaProductos.filter((producto) => producto.tipo.includes(filtro));
//     listaFiltrada.forEach(producto => {
//         alert(`${producto.tipo} ${producto.nombre}, ${producto.tamano}ml: $${producto.precio}`)
//     });
// }

// //buscar productos
// function buscarPorNombre() {
//     let productoABuscar = prompt("ingresa el nombre del producto que es");
//     const productoEncontrado = listaProductos.map((producto) => producto.nombre).indexOf(productoABuscar);
//     if (productoEncontrado === -1) {
//         alert("No se obtuvieron resultados de la busqueda");
//         initProgram()
//     } else {
//         alert(`${listaProductos[productoEncontrado].tipo} ${listaProductos[productoEncontrado].nombre}, ${listaProductos[productoEncontrado].tamano}ml: $${listaProductos[productoEncontrado].precio}`);
//         initProgram()
//     }
// }

// //administrar el carrito
// function administrarCarrito() {
//     let seleccion = prompt("Administrar mi carrito:\n 1.Comprar un producto\n 2.Ver el total del carrito\n 3.Eliminar un producto del carrito\n 4.Finalizar compra\n 5.Volver al menu principal")
//     switch (seleccion) {
//         case "1":
//             comprarProducto();
//             break
//         case "2":
//             totalCarrito();
//             administrarCarrito();
//             break
//         case "3":
//             eliminarProductoCarrito();
//             break
//         case "4":

//             break
//         case "5":
//             initProgram();
//             break
//         default:
//             alert("No es una opción válida")
//             administrarCarrito();
//             break
//     }
// }

// //comprar un producto
// function comprarProducto() {
//     let seleccionProducto = prompt(`¿Que producto desea comprar?\n 1.${listaProductos[0].nombre}\n 2.${listaProductos[1].nombre}\n 3.${listaProductos[2].nombre}\n 4.${listaProductos[3].nombre}\n 5.${listaProductos[4].nombre}\n 6.${listaProductos[5].nombre}\n 7.Volver al menu anterior`)
//     switch (seleccionProducto) {
//         case "1":
//             addToCart(listaProductos[0]);
//             break
//         case "2":
//             addToCart(listaProductos[1]);
//             break
//         case "3":
//             addToCart(listaProductos[2]);
//             break
//         case "4":
//             addToCart(listaProductos[3]);
//             break
//         case "5":
//             addToCart(listaProductos[4]);
//             break
//         case "6":
//             addToCart(listaProductos[5]);
//             break
//         case "7":
//             administrarCarrito();
//             break
//         default:
//             alert("No es una opción válida");
//             comprarProducto();
//             break
//     }
// }

// //agregar al carrito
// function addToCart(producto) {
//     alert(`El producto seleccionado es: ${producto.tipo} ${producto.nombre}, ${producto.tamano}ml.\nEl valor del producto es de $${producto.precio}.`)
//     let confirmacion = prompt("¿desea confirmar su compra?\n 1.Si, agregar al carrito.\n 2.No, volver al menu de seleccion de productos")
//     switch (confirmacion) {
//         case "1":
//             carrito.push(producto);
//             totalCarrito();
//             seguirComprando();
//             break
//         case "2":
//             administrarCarrito();
//         default:
//             alert("No es una opción válida");
//             addToCart(producto)
//     }
// }


// function seguirComprando() {
//     let comprar = prompt("¿Desea seguir comprando?\n 1.Si\n 2.No")
//     if (comprar == "1") {
//         comprarProducto();
//     } else {
//         administrarCarrito();
//     }
// }

// //calcular el total del carrito
// function totalCarrito() {
//     let precioTotal = carrito.reduce((acumulador, producto) => {
//         return acumulador + producto.precio
//     }
//         , 0);
//     alert(`El total del carrito es de $${precioTotal}`);
// }

// // function finalizarCompra{

// // }

// function eliminarProductoCarrito() {
//     let ultimoProducto = carrito.length - 1;
//     alert(`Se elimino del carrito ${carrito[ultimoProducto].nombre}`)
//     carrito.splice(ultimoProducto, 1)
//     totalCarrito()
// }