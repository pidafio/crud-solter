const{createApp}=Vue

createApp({
    data(){
        return{
            url:"https://solter.pythonanywhere.com/productos",
            productos:[],
            error: false,
            cargar: true,
        }

    },
    created(){
        this.fetchdata(this.url)
    },
    methods:{
        fetchdata(url){
            fetch(url)
            .then(Response=>Response.json())
            .then(data=>{
                this.productos=data
                this.cargar=false
            })
             
            .catch(err=>{
                console.log(err)
                this.error=true
            });
        },
        eliminar(id){
            let url="https://solter.pythonanywhere.com/delete/"+id
            let options={
                    method: 'DELETE',        
                     }

            fetch(url, options)
                .then(resp=> resp.text())
                .then(resp=>{ console.log("se elimino")
                     alert("eliminado")
                     location.reload()
                 })
         }
    },
    mounted(){
        this.getproductos(this.url)
    },
}).mount("#app")




    

    
