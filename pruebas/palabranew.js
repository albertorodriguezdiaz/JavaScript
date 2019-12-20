function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 18;

    this.imprimirDatos = function(){
        return this.nombre + " " + this.apellido + " Edad:" + this.edad
    }
}

var alberto = new Persona("Alberto", "Rodriguez");
console.log( alberto.imprimirDatos());