
//document.cookie = "edad=18";

function crearCookie(nombre, valor) {
    valor = escape(valor);

    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()+1);//Sumamos un mes a la fecha

    document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
}

function borrarCookie(nombre) {
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()-1);//Sumamos un mes a la fecha

    document.cookie = nombre+"=x;expires="+hoy.toUTCString()+";";
}


function obtenerCookie(nombre) {

    var cookies = document.cookie;

    var cookieArr = cookies.split("; ");
    console.log(cookieArr);

    for(var i=0; i < cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if(parArr[0] === nombre){
            return unescape(parArr[1]);
        }
    }
    return undefined;
}

console.log(obtenerCookie("direccion"));

// crearCookie("nombre","Alberto");
// crearCookie("apellido","Rodriguez");
// crearCookie("correo","hi@alberto.com.co");
// crearCookie("direccion","Calle 75A # xx - 17 Ap 406");

// var cookies = document.cookie;

// console.log(cookies);