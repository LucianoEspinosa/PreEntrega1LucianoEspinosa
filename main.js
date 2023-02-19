let montoParcial = 30000;
let montoFinal = 0;
let envio = 500;
alert("El valor del producto seleccionado es de $" + montoParcial + " + envio.");
alert("El valor del envio es $" + envio + ".");
alert("Con el codigo de descuento 'CAMPEONMUNDIAL' obtenga un 10% de descuento y envio gratis pagando unicamente con tarjetas de debito y tarjetas de credito en un pago.");

let metodoPago = prompt("Como desea abonar?. Pulse 1, para abonar con debito o 2 para abonar con tarjeta de credito");


while (metodoPago != "1" && metodoPago != "2") {
    alert("el valor ingresado no es correcto")
    metodoPago = prompt("Como desea abonar?. Pulse 1, para abonar con debito o 2 para abonar con tarjeta de credito");
}

if (metodoPago == "1") {

    descuento(prompt("Si posee codigo de descuento uselo ahora. De lo contrario pulse aceptar").toLocaleUpperCase());

    alert("El total a pagar es $" + montoFinal + " Gracias por su compra");

} else {
    tarjetaCredito()
}

function descuento(codigoDescuento) {
    if (codigoDescuento == "CAMPEONMUNDIAL") {

        montoFinal = montoParcial - montoParcial * 0.10;
    } else {
        montoFinal = montoParcial + envio
    }
}

function tarjetaCredito() {
    do {
        cantCuotas = prompt("En cuantas cuotas desea hacer la compra? Recuerde que tiene 1 y 3 pagos sin interes. 6 pagos con un interes del 20% y 12 pagos con un interes de 40%");
        switch (cantCuotas) {
            case "1":
                descuento(prompt("Si posee codigo de descuento uselo ahora. De lo contrario pulse aceptar").toLocaleUpperCase());
                alert("El total a pagar es $" + montoFinal);
                alert("Gracias por su compra")
                break;

            case "3":
                montoFinal = montoParcial + envio;
                alert("El total a pagar es $" + montoFinal + " en " + cantCuotas + " cuotas de $" + (montoFinal / Number(cantCuotas)).toFixed(2) + " sin interes");
                alert("Gracias por su compra")
                break;

            case "6":
                montoFinal = montoParcial + montoParcial * 0.20 + envio;
                alert("El total a pagar es $" + montoFinal + " en " + cantCuotas + " cuotas de $" + (montoFinal / Number(cantCuotas)).toFixed(2));
                alert("Gracias por su compra")
                break;

            case "12":
                montoFinal = montoParcial + montoParcial * 0.40 + envio;
                alert("El total a pagar es $" + montoFinal + " en " + cantCuotas + " cuotas de $" + (montoFinal / Number(cantCuotas)).toFixed(2));
                alert("Gracias por su compra")
                break;

            default:
                alert("Solo se puede hacer en 1, 3, 6 y 12 pagos");
                break;
        }
    } while (cantCuotas != "1" && cantCuotas != "3" && cantCuotas != "6" && cantCuotas != "12");
}






