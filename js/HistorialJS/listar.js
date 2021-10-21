async function cargarDatos(){
    const tabla  = document.getElementById("datosTabla");

    const listaHistoriales = await historialService.listar();

    listaHistoriales.forEach((historial) => {
        let fila =
        "<tr><th>" +
        historial.id +
        "</th><td>" +
        historial.fecha+
        "</th><td>" +
        historial.urlHistorial +
        "</th><td>" +
        historial.doctor.nombres +
        "</th><td>" +
        historial.paciente.nombres +
        "</th><td>" +
        "Eliminar</button><a class='btn btn-default btn-main th-btn-border' href='modificar.html?id=" +
        historial.id +
        "'>Modificar</a></th></tr>";

        tabla.innerHTML += fila;
    });
}

    async function eliminar(id){
        await historialService.eliminar(id);
        location.reload();
    }
    
    cargarDatos();
