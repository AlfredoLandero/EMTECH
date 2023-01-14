function suma (a,b,c){
    const resultado = a+b+c;
    console.log(resultado);
}
suma(2,3,4);
////////////////////////////////
function comparacion (a,b,){
    if (a < b){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
comparacion(9,7);
////////////////////////////////
const suma1 = (a,b,c) => {
    const resultado = a+b+c;
    console.log(resultado);
}
suma1(2,8,4);
////////////////////////////////
const comparacion1 = (a,b,) => {
    if (a < b){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
comparacion1(2,7);
/////////////////////////////////

const obprueba = {
    color: 'rojo',
    tamaño: 'mediano',
    demanda: 'alta',
    consumo: 'alto',
    peso: 20
}

const {color, peso, tamaño} = obprueba;
console.log(color,peso,tamaño);
////////////////////////////////////

const arprueba = ["hola", 12, 20, ar2=["salud","tl"]];

const [dato1,,numero,d] = arprueba;
console.log(dato1,numero,d)
