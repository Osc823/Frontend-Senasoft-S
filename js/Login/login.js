/*
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

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
            swal({
              title: "Error",
              text: "DATOS INCORRECTOS Y/O VACIOS",
              icon: "error", 
              dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                  location.reload();
                    return;
                } 
              });
        }

        const usuario = await respuesta.json();
        //alert("BIENVENIDO")
        swal({
              title: "BIENVENIDO",
              icon: "success", 
              dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                  window.location.href = "doctors.html";
                   return;
                } 
              });
       
      }




    }

    function login() {
      loginService.login();
    }
 */