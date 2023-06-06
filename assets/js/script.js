var modificar=(listadoNuevo)=>{
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eBtnEditarUp=document.getElementById('btnEditar')
    let nombre=eNombre.value;
    let apellido=eApellido.value;
    let indice=eBtnEditarUp.value;
    listadoNuevo[indice].nombre=nombre;
    listadoNuevo[indice].apellido=apellido;
    localStorage.setItem('personas',JSON.stringify(listadoNuevo));
    cargarTabla(listadoNuevo)
}
var Eliminar=(listadoNuevo)=>{
    let eBtnEliminarUp=document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    console.log(listadoNuevo)
    lista=listadoNuevo.filter((p)=>p.id!=indice)
    delete listadoNuevo[indice]
    console.log(listadoNuevo) 
    localStorage.setItem("personas",JSON.stringify(lista));
    cargarTabla(lista)  
}
var cargarTabla =(listadoNuevo)=>{
    let econtenedorTabla=document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    render="<table>"
    render+="<tr><tr><th>Nombre</th><th>Apellido</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
       render+="<tr>"
       render+="<td>"+element.nombre+"</td>"
       render+="<td>"+element.apellido+"</td>"
       render+="<td>"
       render+="<button id='btnEditar"+i+"'>Editar</button>"
       render+="<button id='btnEliminar'"+i+">Eliminar</button>"
       render+="</td>"
       render+="</tr>"
       
    }
    render+="</table>";
    econtenedorTabla.innerHTML=render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        var eBtn=document.getElementById("btnEditar"+i);
        var eBtn2=document.getElementById("btnEliminar"+i);
        let element=listadoNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombre.value=element.nombre;
            eApellido.value=element.apellido
            let sEditar="<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
            //let sEliminar="<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorboton=document.getElementById('contenedorBtnExtra');
            contenedorboton.innerHTML=sEditar;
            let eBtnEditarUp=document.getElementById('btnEditar')
            eBtnEditarUp.addEventListener("click",()=>modificar(listadoNuevo))
        })
        eBtn2.addEventListener("click",()=>{
            
        })      
    }
}

var registrar = ()=>{
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    console.log(nombre);
    console.log(apellido);
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    if(listadoAntiguo==null){
        let persona = {"id":0,"nombre":nombre,"apellido":apellido}
        listadoNuevo = [persona]
    }else{
        //listadoAntiguo.push(persona)
        let persona = {"id":listadoAntiguo.length,"nombre":nombre,"apellido":apellido}
        listadoNuevo = [...listadoAntiguo,persona]
    }
    //console.log(persona)
    //console.log(listadoAntiguo)
    //console.log(listadoNuevo);
    localStorage.setItem("personas",JSON.stringify(listadoNuevo));
    //econtenedorTabla.innerHTML=""+element;
    cargarTabla(listadoNuevo)
    

    }

document.getElementById("btn").addEventListener("click",registrar);
