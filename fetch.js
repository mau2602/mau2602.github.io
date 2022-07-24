async function getMoto (){
const moto = await fetch ('motos.json');
const data = await moto.json();

console.log(data);

}

console.log(getMoto());
