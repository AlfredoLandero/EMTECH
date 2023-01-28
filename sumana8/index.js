const electronicos = [
    { id: 1, nombre: "tv", precio: 5000, disponibilidad: 6 },
    { id: 2, nombre: "tostador", precio: 3000, disponibilidad: 2 },
    { id: 3, nombre: "licuadora", precio: 1500, disponibilidad: 5 },
    { id: 4, nombre: "refrigerador", precio: 8000, disponibilidad: 3 },
]

let preciosn = electronicos.map (productos => productos.precio)
let maximo = Math.max(preciosn)
console.log (maximo)

electronicos.forEach(producto => {
    console.log("nombre del producto:", producto.nombre + " ; Precio del producto:", producto.precio)
})

const preciosb = electronicos.filter(producto => producto.precio > 200)
console.log(preciosb)

let sumaprecios = 0;
electronicos.forEach(producto => {
    sumaprecios = sumaprecios + producto.precio;
})
console.log("el promedio es:", sumaprecios / electronicos.length)

const ordenalfa = electronicos.sort((producto1, producto2) => {
    if (producto1.nombre == producto2.nombre) {
        return 0;
    } else if (producto1.nombre < producto2.nombre) {
        return -1;
    } else {
        return 1;
    }
})
console.log(ordenalfa)

