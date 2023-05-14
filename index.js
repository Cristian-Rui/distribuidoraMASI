// let miPrimerVariable;

// miPrimerVariable = 50;

// console.log(miPrimerVariable);

let edad = prompt("ingrese su edad:")

while (edad < 18) {
    edad = prompt("ingrese nuevamente su edad:")
}

alert("bienvenido a la pagina de distribuidora masi");

// let compra = prompt("¿que desea comprar?: \nwhisky 1: $10000\nwhisky 2: $15000\nwhisky 3: $150000\nwhisky 4: $500000")

// let subtotal = 0

// let carrito = (subtotal, x) => subtotal + x

// const infoCarrito = (compra,subtotal) => alert(`Se añadio 1(uno) ${compra} a tu carrito\nEl subtotal de tu compra es de $${subtotal}`);

// while (compra != "no") {
//     switch (compra) {
//         case "whisky 1":
//             subtotal = carrito(subtotal,10000);
//             infoCarrito(compra,subtotal);
//             break;
//         case "whisky 2":
//             subtotal = carrito(subtotal, 15000);
//             infoCarrito(compra,subtotal);
//             break;
//         case "whisky 3":
//             subtotal = carrito(subtotal, 150000);
//             infoCarrito(compra,subtotal);
//             break;
//         case "whisky 4":
//             subtotal = carrito(subtotal, 500000);
//             infoCarrito(compra,subtotal);
//             break;
//         default:
//             alert("En este momento no se encuentra disponible esa opcion");
//             break;
//     }

//     let seguirComprando = prompt("¿desea seguir comprando?")
//     if (seguirComprando == "si"){
//         compra = prompt("¿que desea comprar?: \nwhisky 1: $10000\nwhisky 2: $15000\nwhisky 3: $150000\nwhisky 4: $500000")
//     }else{
//         compra = "no"
//     }

// }

class Producto {
    constructor(obj) {
        this.nombre = obj.nombre,
        this.tipo = obj.tipo,
        this.tamaño = parseInt(obj.tamaño),
        this.precio = parceInt(obj.precio);
    }
    hablar () {
        console.log("hola mi nombre es " + this.nombre)
    }
        cambiarNombre = (nuevoPrecio) => this.precio = nuevoPrecio
    }

const BlueLabel750 = new Producto(
    {
        nombre: 'Johnnie Walker Blue Label',
        tipo: 'whisky',
        tamaño: 750,
        precio: 91079
    }
)