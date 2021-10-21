async function cargarDatos(){
    const tabla  = document.getElementById("datosTabla");

    const listaDoctores = await doctorService.listar();

    listaDoctores.forEach((doctor) => {
        let fila =
        "<tr><th>" +
        doctor.id +
        "</th><td>" +
        doctor.nombres+
        "</th><td>" +
        doctor.apellidos +
        "</th><td>" +
        doctor.cedula +
        "</th><td>" +
        doctor.clave +
        "</th><td>" +
        doctor.urlFirma +
        "</th><td>" +
        doctor.urlImagen +
        "</th><td>" +
        "</th></tr>";

        tabla.innerHTML += fila;
    });
}

    async function eliminar(id){
        await doctorService.eliminar(id);
        location.reload();
    }
    
    cargarDatos();
