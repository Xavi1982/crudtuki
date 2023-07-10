// 1: Recuperamos los datos URL y los mostramos en los input
//console.log(location.search);

let argsUrl = location.search.substring(1).split('&');
console.log(argsUrl);

let data = [];
for(let i = 0; i < argsUrl.length; i++){
    data[i] = argsUrl[i].split('=');
}
console.log(data);

document.getElementById('id').value = decodeURIComponent(data[0][1]);
document.getElementById('cliente').value = decodeURIComponent(data[1][1]);
document.getElementById('trabajo').value = decodeURIComponent(data[2][1]);
document.getElementById('precio').value = decodeURIComponent(data[3][1]);
document.getElementById('imagen').value = decodeURIComponent(data[4][1]);

// 2: Actualizar los datos
function modificar(){
    let id = document.getElementById('id').value;
    let c = document.getElementById('cliente').value;
    let t = document.getElementById('trabajo').value;
    let p = document.getElementById('precio').value;
    let i = document.getElementById('imagen').value;

    let tuki = {
        cliente: c,
        trabajo: t,
        precio: p,
        imagen: i
    };

    let url = 'https://crudtuki.pythonanywhere.com/tukis/'+id;
    let options = {
        body: JSON.stringify(tuki),
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}
    };

    fetch(url, options)
    .then(function(){
        alert('El tuki fue editado exitosamente');
        window.location.href = './clientes_tukis.html';
    })
    .catch(err=> {
        alert('No pudo modificarse el tuki');
        console.error(err);
    })
}