const pacienteService ={
    API: "http://localhost:8080/api/paciente",
    HEADERS : {
        "Content-Type": "application/json",  

    },
    //

    async listar(){
        const respuesta = await fetch(this.API + "/listar",{
            method: "GET",
            headers: this.Headers,
        });
           const listaPacientes = await respuesta.json();
           return listaPacientes;
    },

    //
    async buscarPorId(id){
        const respuesta = await fetch(this.API + "/id/"+ id,{
           method: "GET",
           headers: this.Headers,
        });
        return await respuesta.json();
    },

    // 
    async registrar(paciente){
        const respuesta = await fetch(this.API + "/registrar", {
            method: "POST",
            headers: this.Headers,
            body: JSON.stringify(paciente),
        });
    },

    //
    async modificar(paciente){
        const respuesta = await fetch(this.API + "/modificar",{
           method: "PUT",
           headers: this.Headers,
           body: JSON.stringify(paciente),
        });
    },

    //
    async eliminar(id){
        const doctor = {
            id: id,
        };
        const respuesta = await fetch(this.API + "/eliminar",{
            method: "DELETE",
            headers: this.Headers,
            body: JSON.stringify(paciente),
        });
    }, 
};