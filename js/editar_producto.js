


let cadena= location.search;

let datos=  new URLSearchParams(cadena)
let resultado=[]

for(const[llave,valor] of datos){
    resultado[llave]=valor
  
 
    

}
console.log(resultado)
let id=document.getElementById("id").value= resultado["id"]
let categoria=document.getElementById("categoria").value= resultado["categoria"]
let imagen= document.getElementById("imagen").value = resultado["imagen"]
let marca=document.getElementById("marca").value  = resultado["marca"]
let modelo= document.getElementById("modelo").value = resultado["modelo"]
let descripcion= document.getElementById("descripcion").value = resultado["descripcion"]
let precio=document.getElementById("precio").value = resultado["precio"]


/*function editar(){
    let id = document.getElementById("id").value
    let ingresar_categoria=document.getElementById("categoria").value
    let ingresar_img= document.getElementById("imagen").value 
    let ingresar_marca=document.getElementById("marca").value
    let ingresar_modelo= document.getElementById("modelo").value
    let ingresar_descripcion= document.getElementById("descripcion").value
    let ingresar_precio=document.getElementById("precio").value
  

console.log(id)

    let enviar_producto={
        categoria:ingresar_categoria,
        imagen:ingresar_img,
        marca: ingresar_marca,
        modelo: ingresar_modelo,
        descripcion: ingresar_descripcion,
        precio: ingresar_precio,
  }

    console.log(enviar_producto)

    
    let url="http://127.0.0.1:5000/upgrade/"+id
    console.log(url)
    let options={
                body: JSON.stringify(enviar_producto),
                method: 'PUT',
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
    
}*/