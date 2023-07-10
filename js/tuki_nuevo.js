function guardar(){
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

    let url = 'https://crudtuki.pythonanywhere.com/tukis'
    let options = {
        body: JSON.stringify(tuki),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    }

    fetch(url, options)
    .then(function(){
        alert("Producto agregado exitosamente");
        window.location.href = './clientes_tukis.html'
    })
    .catch(error => {
        alert('No pudo agregarse el producto');
        console.error(error);
    })
}