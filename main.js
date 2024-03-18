let invitados = ["Roberto", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "David", "Elena"];
function mostrarInvitados() {
    document.getElementById("invitedList").innerHTML = "";

    invitados.forEach(function(nombre) {
        const listItem = document.createElement("li");
        listItem.textContent = nombre.toUpperCase();
        document.getElementById("invitedList").appendChild(listItem)
    });
}

function buscarInvitado (nombre) {
    return invitados.includes(nombre)
}

function buscarEnLista() {
    const nombre = prompt("Introduce el nombre de la persona que deseas buscar:");
    const encontrado = buscarInvitado(nombre);
    if (encontrado) {
        alert(`${nombre.toUpperCase()} está en la lista dejarle pasar.`);
    } else {
        alert(`${nombre.toUpperCase()} no está en la lista de invitados, llamar a seguridad.`);
    }
};


// Juani se apunta con su novio Alex

function juani() {
    invitados.push("Juani", "Alex");
    mostrarInvitados();
    
    console.log(invitados)
}

//Marta pide colarse de tercera

function Marta() {
    invitados.splice(2, 0, "Marta")
    mostrarInvitados()
    console.log(invitados)
}


//roberto que está de primero está de viaje, Bye Bye Roberto

function Roberto() {
    invitados.shift()
    mostrarInvitados()
    
    console.log(invitados)
}

//hay una fiesta y todos ellos se suman a la fiesta

function vecinos() {
    
    const fiestaAlLado = ["Mario", "Rosa", "Samuel", "Raul", "Efrain", "Jonathan"] 
    
    invitados = invitados.concat(fiestaAlLado);
    mostrarInvitados()
    
    console.log(invitados)
}

//Mostrar lista definitiva

/* function listaDefinitiva() {
    for (i = 0; i < invitados.length; i++){
        console.log(invitados[i].toUpperCase())
    }
} */

/* invitados.forEach(function(nombre){
    console.log(nombre.toUpperCase)
}) */






