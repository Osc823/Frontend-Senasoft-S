<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

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
        "</th><td>" + '<center class="d-flex justify-content-center">' +
        '<a class="btn btn-info mr-3 px-3" href="verhistorial.html" role="button">Ver</a>'+ '<br>' +
        '<a class="btn btn-success" href="agregarhistorial.html" role="button">Agregar</a>'+
        '</center>' +"</th></tr>";

        tabla.innerHTML += fila;
    });
}

    async function eliminar(id){
        await pacienteService.eliminar(id);
        location.reload();
    }
    
    cargarDatos();
