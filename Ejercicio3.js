console.log("/////////BUSCAR PRODUCTO EN INVENTARIO//////////");

const inventario = [
    { nombre: "camisa", precio: 20},
    {nombre: "zapatos", precio: 50}
]

function buscarProducto(nombre, inventario) {
    const producto = inventario.find(intem => intem.nombre === nombre);
    return producto || null;
}

console.log(buscarProducto("camisa", inventario));
console.log(buscarProducto("gorro", inventario));


