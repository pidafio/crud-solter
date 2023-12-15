

function registrar(url1,metodo, id1){
    let id= id1
    let ingresar_categoria=document.getElementById("categoria").value
    let ingresar_img= document.getElementById("imagen").value 
    let ingresar_marca=document.getElementById("marca").value
    let ingresar_modelo= document.getElementById("modelo").value
    let ingresar_descripcion= document.getElementById("descripcion").value
    let ingresar_precio=document.getElementById("precio").value
  

console.log(ingresar_img)

    let enviar_producto={
        categoria:ingresar_categoria,
        imagen:ingresar_img,
        marca: ingresar_marca,
        modelo: ingresar_modelo,
        descripcion: ingresar_descripcion,
        precio: ingresar_precio,
  }

    console.log(enviar_producto)

    
    let url=url1
    let options={
                body: JSON.stringify(enviar_producto),
                method:metodo,
                headers: { 'Content-Type': 'application/json' },

                }
            fetch(url, options)
            .then(function(){
                console.log("se grabo el producto")
                alert("se grabo el producto")
                window.location.href="../Templates/productos.html"
            })
            .catch(err=>{
                alert("no se pudo guardar")
                console.log(err)
            })

    }


   function guardar(){

        let metodo='POST'
        let url1="http://solter.pythonanywhere.com/registro"
        let id1=""
        registrar(url1, metodo,id1)
   }

    function editar(){
        var metodo='PUT'
        var url1="http://solter.pythonanywhere.com/upgrade/"+id
        let id1=document.getElementById("id").value
        registrar(url1, metodo,id1)

    }
