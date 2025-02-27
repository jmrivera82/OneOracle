// El principal objetivo de este desafío es fortalecer tus habilidades en 
// lógica de programación. Aquí deberás desarrollar la lógica para resolver 
// el problema.

//Variables
let listaAmigos=[]
let cantidadDeNombres = 0

//Funciones
function asignarNombre(elemento,texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
    return
}

function limpiarAmigo(){
    document.querySelector('#amigo').value =''
}

function agregarAmigo(){

    amigo = document.getElementById('amigo').value

    if (amigo===""){

        alert("Debe ingresar un nombre válido")

    } else{

        listaAmigos.push(amigo)
        limpiarAmigo()
        console.log(listaAmigos)
            
        if (amigo){

            let li = document.createElement('li')
            li.textContent = amigo
            document.getElementById('listaAmigos').appendChild(li)
        }
    }
}


function sortearAmigo(){


    if (document.querySelector('#amigo').value ===''){

        alert("No hay nombres ingresados para hacer el sorteo")

    } else {

        cantidadDeNombres = listaAmigos.length
        console.log(cantidadDeNombres)
    
        let numeroLista = Math.floor(Math.random()*cantidadDeNombres)+1
        console.log(numeroLista)
    
        console.log(`El nombre sorteado es ${listaAmigos[numeroLista]}`)
        asignarNombre('ul',`El nombre sorteado es: ${listaAmigos[numeroLista]}`)

    }

}



