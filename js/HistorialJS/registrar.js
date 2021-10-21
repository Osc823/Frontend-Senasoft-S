async  function registrar(){
    const inputFecha = document.getElementById("fecha");
    const inputUrlHistorial = document.getElementById("urlHistorial");
    const inputDoctoresId = document.getElementById("doctoresId");
    const inputPacientesId = document.getElementById("pacientesId");

    const fecha = inputFecha;
    const urlHistorial = inputUrlHistorial;
    const doctoresId = inputDoctoresId.value;
    const pacientesId = inputPacientesId.value;

    const historial = {
          fecha: fecha,
          urlHistorial: urlHistorial,
          doctor:{
              id: doctoresId,
          },
          paciente: {
              id: pacientesId,
          },
    };
}


    async function cargarDatosDoctores(){
        const selectDoctores = document.getElementById("doctoresId");
        const listaDoctores = await doctorService.listar();
        listaDoctores.forEach((doctor) => {
            let option = 
            "<option value=" + doctor.id + ">" + doctor.nombres + "</option>";

            selectDoctores.innerHTML += option;   
        });
    }

    
    

    async function cargarDatosPacientes(){
        const selectPacientes = document.getElementById("pacientesId");
        const listaPacientes = await pacienteService.listar();
        listaPacientes.forEach((pacientes) => {
            let option = 
            "<option value=" + pacientes.id + ">" + pacientes.nombres + "</option>";

            selectPacientes.innerHTML += option;   
        });
    }


    cargarDatosDoctores();
    cargarDatosPacientes();

