let edad = 17;

if (edad >= 18){
    console.log("VALIDO");
}
else{
    console.log("NO VALIDO");
}

////////////////////////////////////

let componentes = [
    {nombre: 'resistencia', costo: '$50', garantia: 'si'},
    {nombre: 'fuente', costo:'$200', garantia:'si'},
    {nombre: 'motor', costo: '$150', garantia: 'no'},
    {nombre: 'pantalla', costo:'1000', garantia:'si'}
]

for(i=0; i<componentes.length; i++){
    console.log('componente: '+ componentes[i].nombre, 'costo: '+ componentes[i].costo, 'garantia: '+ componentes[i].garantia)
}
//////////////////////////////////////////////

let edadc = '15';

switch(edadc){
    case '15':
        console.log('Palomitas a mitad de precio');
        break;
    case '20':
        console.log('30% de descuento en las entradas');
        break;
    case '25':
        console.log('refresco con 20% de descuento');
        break;
}