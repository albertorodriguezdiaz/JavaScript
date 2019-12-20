function crearPersona(nombre, apellido) {
    
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Alberto","Rodriguez");



function creaFuncion(){
    return function(nombre){
        console.log("Me creó" + " "+ nombre);

        return function(){
            console.log("Segunda Funcion");
        }
    }
}

var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();