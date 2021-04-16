const btnDelete = document.querySelector("#btnEliminar");

    btnDelete.addEventListener('click', async() =>{
        const id = btnDelete.dataset.id;
        try {
            const data = await fetch(`/frutas/${id}`, {
                method: "delete"})
            const resp = await data.json();
            
            console.log(resp)
            if(resp.estado = true){
                alert("Eliminado Correctamente!!")
                window.location.href = "/frutas"
            }
            else{
                alert("No Eliminado")
            }
        } catch (error) {
            console.log(error)
        }
    })