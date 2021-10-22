
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
        '<a class="btn btn-info mr-3 px-3" href="verhistorial.html?id='+paciente.id+'" role="button">Ver</a>'+ '<br>' +
        '<a class="btn btn-success" href="agregarhistorial.html" role="button">Agregar</a>'+
        '</center>'+"</th></tr>";

        tabla.innerHTML += fila;

    });

    $(document).ready(function () {
    // Setup - add a text input to each footer cell
    $('#example thead tr')
        .clone(true)
        .addClass('filters')
        .appendTo('#example thead');
 
    var table = $('#example').DataTable({
        orderCellsTop: true,
        fixedHeader: true,
        initComplete: function () {
            var api = this.api();
 
            // For each column
            api
                .columns()
                .eq(0)
                .each(function (colIdx) {
                    // Set the header cell to contain the input element
                    var cell = $('.filters th').eq(
                        $(api.column(colIdx).header()).index()
                    );
                    var title = $(cell).text();
                    $(cell).html('<input type="text" placeholder="' + title + '" />');
 
                    // On every keypress in this input
                    $(
                        'input',
                        $('.filters th').eq($(api.column(colIdx).header()).index())
                    )
                        .off('keyup change')
                        .on('keyup change', function (e) {
                            e.stopPropagation();
 
                            // Get the search value
                            $(this).attr('title', $(this).val());
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
 
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api
                                .column(colIdx)
                                .search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                )
                                .draw();
 
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                });
        },
    });
});
    

}

    async function eliminar(id){
        await pacienteService.eliminar(id);
        location.reload();
    }
    
    
    cargarDatos(); 
    
    
    

   

  

    
