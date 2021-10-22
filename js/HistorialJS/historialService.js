const historialService ={
    API: "http://localhost:8080/api/historial",
    HEADERS: {
        "Content-Type": "application/json",  
    },
    //
    async listar(){
        const respuesta = await fetch(this.API + "/listar",{
            method: "GET",
            headers: this.HEADERS,
        });
        const listaHistoriales = await respuesta.json();
        return listaHistoriales;
    },

    //
    async buscarPorId(id){
        const respuesta = await fetch(this.API + "/id/" + id,{
            method: "GET",
            headers: this.HEADERS,
        });
        return await respuesta.json();
    },

    //
    async registrar(historial){
        const respuesta = await fetch(this.API + "/registrar",{
            method: "POST",
            headers: this.HEADERS,
            body: JSON.stringify(historial),
        });
    },

    //
    async modificar(historial){
        const respuesta = await fetch(this.API + "/modificar",{
            method: "PUT",
            headers: this.HEADERS,
            body: JSON.stringify(historial),
        });
    },

    //
    async eliminar(id){
        const doctor = {
            id: id,
        }
        const respuesta = await fetch(this.API + "/eliminar",{
            method: "DELETE",
            headers: this.HEADERS,
            body: JSON.stringify(historial),
        });
    },

    
    
};

    