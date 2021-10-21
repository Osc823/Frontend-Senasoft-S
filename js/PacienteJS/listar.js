async function cargarDatos(){
    const tabla  = document.getElementById("datosTabla");

    const listaPacientes = await pacienteService.listar();

    listaPacientes.forEach((paciente) => {
        let fila =
        "<tr><th>" +
        paciente.id +
        "</th><td>" +
        paciente.nombres+
        "</th><td>" +
        paciente.apellidos +
        "</th><td>" +
        paciente.edad +
        "</th><td>" +
        paciente.cedula +
        "</th><td>" +
        paciente.urlImagen +
        "</th><td>" +
        '<a class=btn btn-info" href="verhistorial.html" role="button">Ver Historial</a>'+
        '<a class="btn btn-success" href="agregarhistorial.html" role="button">Agregar Historial</a>'+
        "</th></tr>";

        tabla.innerHTML += fila;
    });
}

    async function eliminar(id){
        await pacienteService.eliminar(id);
        location.reload();
    }
    
    cargarDatos();
