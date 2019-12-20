function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    this.golpes = 0;

    this.curar = function(jugadorObjetivo){
        if(this.sp >= 40){
            this.sp -= 40;
            jugadorObjetivo.pv += 40;
        }else{
            console.info(this.nombre + " No tiene sp");
        }

        this.estado(jugadorObjetivo);
        
    }

    this.golpe = function(jugadorObjetivo) {

    if(jugadorObjetivo.pv >= 40){
        jugadorObjetivo.pv -= 40;
    }else{
        jugadorObjetivo.pv = 0;
        console.error( jugadorObjetivo.nombre + "Perdió" );
    }
        this.golpes +=1;
        console.log(this.nombre + " " +this.golpes);
        this.estado(jugadorObjetivo);
    }

    this.estado = function(jugadorObjetivo) {
        console.info(this); 
        console.info(jugadorObjetivo);
    }
};

var rocky = new Jugador("Rocky Balboa");
var drago = new Jugador("Ivan Drago");
var entrenador = new Jugador("Entrenador");

console.log(rocky);
console.log(drago);
console.log(entrenador);

drago.golpe(rocky);
drago.golpe(rocky);

entrenador.curar(rocky);

rocky.golpe(drago);

entrenador.curar(rocky);

rocky.golpe(drago);

drago.golpe(rocky);
drago.golpe(rocky);

entrenador.curar(rocky);

rocky.golpe(drago);
