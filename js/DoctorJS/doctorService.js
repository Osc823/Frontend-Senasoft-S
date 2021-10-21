const doctorService ={
    API: "http://localhost:8080/api/doctor",
    HEADERS : {
        "Content-Type": "application/json",  
    },
    //

    async listar(){
        const respuesta = await fetch(this.API + "/listar",{
            method: "GET",
            headers: this.Headers,
        });
           const listaDoctores = await respuesta.json();
           return listaDoctores;
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
    async registrar(doctor){
        const respuesta = await fetch(this.API + "/registrar", {
            method: "POST",
            headers: this.Headers,
            body: JSON.stringify(doctor),
        });
    },

    //
    async modificar(doctor){
        const respuesta = await fetch(this.API + "/modificar",{
           method: "PUT",
           headers: this.Headers,
           body: JSON.stringify(doctor),
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
            body: JSON.stringify(doctor),
        });
    }, 
};