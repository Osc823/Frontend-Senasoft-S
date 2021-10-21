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
        "</th></tr>";

        tabla.innerHTML += fila;
    });
}

    async function eliminar(id){
        await pacienteService.eliminar(id);
        location.reload();
    }
    
    cargarDatos();
