var persona = {
    nombre: "Alberto",
    apellido: "Rodriguez",
    edad: "18",
    imprimirDatos: function() {
        console.log(this.nombre + " " + this.apellido + " - Edad:" + this.edad);
    },
    direccion:{
        pais: "CO",
        obtenerPais: function() {
            console.log("El pais es: " + this.pais);

            var self = this; // Aquí pido el contexto del objeto

            var nuevaDireccion = function() {
                console.log(self);
                console.log("El pais nuevo es: " + self.pais);
            }
            nuevaDireccion();
        }
    }
};

persona.imprimirDatos();
persona.direccion.pais = "Colombia";
persona.direccion.obtenerPais();