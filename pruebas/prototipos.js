function Persona() {
    this.nombre     = "Alberto";
    this.apellido   = "Rodriguez";
    this.edad       = 18;
}


Persona.prototype.pais = "Colombia";
Persona.prototype.imprimirInfo = function() {
    console.log(this.nombre + " " + this.apellido + " - Edad: " + this.edad + "- País: " + this.pais);
}



Number.prototype.esPositivo = function() {
    if(this > 0){
        return true;
    }else{
        return false;
    }
}


var alberto = new Persona();

console.log(alberto);
console.log(alberto.imprimirInfo());