const ventas = [
    { id: 1, img: "/semana5/imagenes/bomba.jpg", nombre: "Bomba de agua eléctrica tipo Jet 1 HP.", descripcion: "Es el complemento perfecto para conformar equipos de bombeo de alta potencia. Fabricada con materiales resistentes a la corrosión para una prolongada vida útil. Motor de trabajo continuo y silencioso.", precio: 6000 },
    { id: 2, img: "/semana5/imagenes/portacartucho.jpg", nombre: "Portacartucho 2.5 X 10.", descripcion: "Portacartuchos o portafiltro. Materia prima: Polipropileno.Medidas: para cartuchos 2.5 x 10.", precio: 800 },
    { id: 3, img: "/semana5/imagenes/arduino.jpg", nombre: "Arduino mega.", descripcion: "Tarjeta Arduino Due R3 Compatible.", precio: 150 },
    { id: 4, img: "/semana5/imagenes/motor a pasos.jpg", nombre: "Nema17 - Motor paso a paso", descripcion: "Bipolar de 42 motores con cable de 1 m para impresora 3D CNC XYZ (33 mm, 1 paquete).", precio: 650 },
    { id: 5, img: "/semana5/imagenes/lampara.jfif", nombre: "Lampara.", descripcion: "Cuenta con manual de ensamble. MDF 3mm. 30cm de alto.", precio: 450 },
    { id: 6, img: "/semana5/imagenes/cuadro.jpg", nombre: "Cuadro.", descripcion: "3 piezas de 60x40cm. MDF 3mm.", precio: 490 }
];

const carritoc = [];
const productos1 = document.getElementById("productos1");
const llenado = document.getElementById("llenado");
const contadorcarrito = document.createAttribute("p");
const mostrarp = document.getElementById("mostrarp");

const agregarproducto = (producto, carrito) => {
    const servicioelegido = ventas.find(linea => linea.id === producto)
    carrito.push(servicioelegido);
    console.log("agregado", carritoc)
};

const numerocarrito = () => {
    if (carritoc.length !== 0) {
        contadorcarrito.textContent = carritoc.length;
        //llenado.appendChild(contadorcarrito)
    }
}

const mostrarcarrito = () => {
    mostrarp.innerHTML ="";
    carritoc.forEach(productos => {
        const div = document.createElement("div");
        div.innerHTML =
            `
        <div class="detalles">
            <p>${productos.cantidad}</p>
            <p>${productos.nombre}</p>
            <p>$${productos.precio}</p>
            <button id="elimina${productos.id}"><iconify-icon icon="ion:trash" width="15" height="15"></iconify-icon></button>
        </div>
        `
        mostrarp.appendChild(div);
    })
}

ventas.forEach(pventas => {
    const div = document.createElement("div");
    div.innerHTML =
        `
    <div>
        <img src="${pventas.img}" alt="${pventas.nombre}">
        <h2>${pventas.nombre}</h2>
        <p>${pventas.descripcion}</p>
        <p class="precio">$${pventas.precio}</p>
        <button id="agrega${pventas.id}">Agregar al carrito</button>
    </div>
    `
    productos1.appendChild(div);
    const btncarrito = document.getElementById(`agrega${pventas.id}`);
    btncarrito.addEventListener("click", () => {
        agregarproducto(pventas.id, carritoc);
        numerocarrito();
        mostrarcarrito();
    })
});

const agregarlocal = (clave, valor)=>{
    localStorage.setItem(clave, JSON.stringify(valor));
}
