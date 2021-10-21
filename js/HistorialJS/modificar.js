    const inputId = document.getElementById("id");
    const inputFecha = document.getElementById("fecha");
    const inputUrlHistorial = document.getElementById("urlHistoria");
    //const InputDoctoresId = document.getElementById("DoctoresId");
    //const InputPacienteId = document.getElementById("PacienteId");

    async function cargarHistorial(){
        const stringUrl = window.location.href;
        const url = new URL(stringUrl);
        const stringId = url.searchParams.get("id");
        const id = parseInt(stringId);

        const historial = await historialService.buscarPorId("id");

       inputId.value = historial.id;
       inputFecha.value = historial.fecha;
       inputUrlHistorial.value = historial.urlHistorial;

    }
   

   cargarHistorial();

   async function modificar(){
       const id = inputId.value;
       const fecha = inputFecha.value;
   }
