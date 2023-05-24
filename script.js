function validarNumero(numero, mensaje){
    while(isNaN(numero)){
        alert("Ingrese un valor numerico por favor");
        numero = parseInt(prompt(mensaje));
    }
    return numero;
}



let nombreUser = prompt("Indique su nombre");
let mensajePresentacion = (`${nombreUser}, bienvenido a CoderBank. ¿Desea realizar un plazo fijo? Respuestas posibles: Si - No`);

let respuestaUser = prompt(mensajePresentacion)

decisionUser(respuestaUser.toLowerCase())

function decisionUser(decision){
    
    while(decisionUser){
        if (decision == "si"){
            return 
        }
        else if (decision == "no"){
            alert("Muy bien, lo esperamos en otra ocasion")
            decision = prompt("¿Desea realizar un plazo fijo? Respuestas posibles: Si - No").toLowerCase()
        }
        else{
            alert("Elija entre 'Si' o 'No' por favor")
            decision = prompt("¿Desea realizar un plazo fijo? Respuestas posibles: Si - No").toLowerCase()
        }
    }
}

decisionUser(respuestaUser.toLowerCase())

class TasaNominalActual{
    constructor(tasa){
        this.tasa = tasa
        this.fecha = new Date()
    }
}

function TNA(){
    alert(`Perfecto. Le informamos que la TNA es de ${tnaHoy.tasa}%. Actualizado al ${tnaHoy.fecha.toLocaleDateString()}`)
} 

const tnaHoy = new TasaNominalActual (97)
TNA()

class MontosPlazoFijo{
    constructor(id, monto){
        this.id = id,
        this.monto = monto
    }
}
const monto1 = new MontosPlazoFijo(1, 10000)
const monto2 = new MontosPlazoFijo(2, 25000)
const monto3 = new MontosPlazoFijo(3, 50000)
const monto4 = new MontosPlazoFijo(4, 75000)
const monto5 = new MontosPlazoFijo(5, 100000)
const monto6 = new MontosPlazoFijo(6, "otro")

const opcionesPlazoFijo = [monto1, monto2, monto3, monto4, monto5, monto6];

class MesesPlazoFijo{
    constructor(id, cantMeses){
        this.id = id,
        this.cantMeses = cantMeses
    }
}
const cantMes1 = new MesesPlazoFijo(1, 30)
const cantMes2 = new MesesPlazoFijo(2, 60)
const cantMes3 = new MesesPlazoFijo(3, 90)
const cantMes4 = new MesesPlazoFijo(4, 120)
const cantMes5 = new MesesPlazoFijo(5, "otro")

const opcionesMeses = [cantMes1, cantMes2, cantMes3, cantMes4, cantMes5];

const mensajeGeneral = "A continuacion le daremos una serie de opciones. Elija alguna ingresando su numero correspondiente."

function elegirMonto(){
    let mensajeMontos = "El monto a cotizar sera de: \n";
    opcionesPlazoFijo.forEach(e => {
        mensajeMontos += `${e.id} - ${e.monto} \n`
    });

    let respuestaMonto = parseInt(prompt(`${mensajeGeneral} \n${mensajeMontos}`));
    respuestaMonto = validarNumero(respuestaMonto, mensajeMontos);
    return opcionesPlazoFijo.find(e => e.id === respuestaMonto);
}

let opcionElegidaMonto = elegirMonto()


function validarMonto(){
    if (opcionElegidaMonto.id <= 5){
        return opcionElegidaMonto.monto
    }else if (opcionElegidaMonto.id == 6){
        let nuevoMontoMensaje = "¿Que monto desea cotizar?"
        const monto6 = new MontosPlazoFijo(6, parseInt(prompt(nuevoMontoMensaje)))
        monto6.monto = validarNumero(monto6.monto, nuevoMontoMensaje)
        return opcionElegidaMonto = monto6
    }else{
        alert("elegi un numero valido")
        elegirMonto()
    }
}

validarMonto()

alert(`Muy bien, cotizaremos ${opcionElegidaMonto.monto} pesos`)

function elegirMeses(){
    let mensajeMeses = "A cuantos dias quiere hacer el plazo fijo: \n";
    opcionesMeses.forEach(e => {
        mensajeMeses += `${e.id} - ${e.cantMeses} \n`
    });

    let respuestaMeses = parseInt(prompt(`${mensajeGeneral} \n${mensajeMeses}`));
    respuestaMeses = validarNumero(respuestaMeses, mensajeMeses);
    return opcionesMeses.find(e => e.id === respuestaMeses);
}

let opcionElegidaMeses = elegirMeses()

function validarMeses(){
    if (opcionElegidaMeses.id <= 4){
        return opcionElegidaMeses.cantMeses
    }else if (opcionElegidaMeses.id == 5){
        let nuevoMesesMensaje = "¿A cuantos dias quiere hacer el plazo fijo?"
        const cantMes5 = new MesesPlazoFijo(5, parseInt(prompt(nuevoMesesMensaje)))
        cantMes5.cantMeses = validarNumero(cantMes5.cantMeses, nuevoMesesMensaje)
        return opcionElegidaMeses = cantMes5
    }else{
        alert("elegi un numero valido")
        elegirMeses()
    }
}

validarMeses()
alert(`Muy bien, entonces cotizaremos $${opcionElegidaMonto.monto} a ${opcionElegidaMeses.cantMeses} dias.`);

function cotizarPlazoFijo(){
    let montoPorMes = opcionElegidaMonto.monto * tnaHoy.tasa / 100 / 12;
    let montoTotal = montoPorMes * opcionElegidaMeses.cantMeses / 30;

    alert(`El interes mensual a recibir sera de ${montoPorMes.toFixed(2)} \n Usted recibira un total de ${montoTotal.toFixed(2)} pesos al terminar el plazo fijo`)
}

cotizarPlazoFijo()