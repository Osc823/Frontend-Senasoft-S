const inputId = document.getElementById("id");
const inputNombres = document.getElementById("nombres");
const inputApellidos = document.getElementById("apellidos");
const inputCedula = document.getElementById("cedula");
const inputFirma = document.getElementById("url_firma");

async function cargarDoctor(){
    const stringUrl = window.location.href;
    const url = new URL(stringUrl);
    const stringId = url.searchParams.get("id");
    const id = parseInt(stringId);

    const doctor = await doctorService.buscarPorId(id);

    inputId.value = doctor.id;
    inputNombres.value = doctor.nombres;
    inputApellidos.value = doctor.apellidos;
    inputCedula.value = doctor.cedula;
    inputFirma.value = doctor.url_firma;

}

cargarDoctor();

async function modificar(){
    const id = inputId.value;
    const nombres = inputNombres.value;
    const apellidos = inputApellidos.value;
    const cedula = inputCedula.value;
    const url_firma = inputFirma.value;

    const doctor ={
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        cedula: cedula,
        url_firma: url_firma
    };

    await doctorService.modificar(doctor);

    window.location.href = "doctors.html";
}