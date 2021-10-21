const loginService = {
    API: "http://localhost:8080/api/login",
    HEADERS: {
        "Content-Type": "application/json",
    },

    async login() {

        const cedula = document.getElementById("cedula").value;
        const clave = document.getElementById("clave").value;
        const doctor = {
            cedula: cedula,
            clave: clave
        }

        const respuesta = await fetch(this.API + "/login", {
            method: "POST",
            headers: this.HEADERS,
            body: JSON.stringify(doctor),
        });

        


        if (respuesta.status === 403) {
            location.reload();
            return;
        }

        const usuario = await respuesta.json();

        window.location.href = "doctors.html";
        return;



    }

}
function login() {
    loginService.login();
}