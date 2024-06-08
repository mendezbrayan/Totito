let celdas = document.querySelectorAll('.col-4');
let accion = document.querySelectorAll('.accion')
let accion1 = document.querySelectorAll('.accion1')
let accion2 = document.querySelectorAll('.accion2')
let fila1 = document.querySelectorAll('.fila1')
let fila2 = document.querySelectorAll('.fila2')
let fila3 = document.querySelectorAll('.fila3')
let diagonal1 = document.querySelectorAll('.diagonal1')
let diagonal2 = document.querySelectorAll('.diagonal2')
let pntX = document.querySelector('.ptnX')
let pnt0 = document.querySelector('.ptn0')

let flag = true;
let arreglo = [null, null, null, null, null, null, null, null, null]
let reiniciar = document.querySelector('#reiniciar')
let contadorX = 0;
let contador0 = 0;

const row1 = () => {
    accion.forEach((color) => {
        color.classList.add('bg-danger')


    })
}

const validarJugador = () => {
    if ((arreglo[0] != null && arreglo[1] != null)
        && (arreglo[1] == arreglo[2])
        && (arreglo[1] == arreglo[2])) {
        row1()
        ganador()
    }
    else if (
        (arreglo[3] != null && arreglo[4] != null)
        && (arreglo[3] == arreglo[4])
        && (arreglo[4] == arreglo[5])) {
        
        accion1.forEach((color) => {
            color.classList.add('bg-danger')
        })
        ganador()
    }

    else if ((arreglo[6] != null && arreglo[7] != null)
        && (arreglo[6] == arreglo[7])
        && (arreglo[7] == arreglo[8])) {
        accion2.forEach((color) => {
            color.classList.add('bg-danger')
        })
        ganador()

    } else if ((arreglo[0] != null && arreglo[3] != null)
        && (arreglo[0] == arreglo[3])
        && (arreglo[3] == arreglo[6])) {
        fila1.forEach((color) => {
            color.classList.add('bg-danger')
        })
        ganador()
    } else if ((arreglo[1] != null && arreglo[4] != null)
        && (arreglo[1] == arreglo[4])
        && (arreglo[4] == arreglo[7])) {
        fila2.forEach((color) => {
            color.classList.add('bg-danger')
        })
        ganador()
    } else if ((arreglo[2] != null && arreglo[5] != null)
        && (arreglo[2] == arreglo[5])
        && (arreglo[5] == arreglo[8])) {
        fila3.forEach((color) => {
            color.classList.add('bg-danger')
        })
        ganador()
    } else if ((arreglo[0] != null && arreglo[4] != null)
        && (arreglo[0] == arreglo[4])
        && (arreglo[4] == arreglo[8])) {
        diagonal1.forEach((color) => {
            console.log(contador0)
            color.classList.add('bg-danger')
        })
        ganador()
    } else if ((arreglo[2] != null && arreglo[4] != null)
        && (arreglo[2] == arreglo[4])
        && (arreglo[4] == arreglo[6])) {
        diagonal2.forEach((color) => {
            color.classList.add('bg-danger')
        })
        ganador()
    }



    else {
        filter = arreglo.filter((item) => item == null)
        if (filter.length == 0) {
            alert('Empate')
        }

    }

}

const bloquearCasilla = (coordenada) => {


    if (arreglo[coordenada] != null) {

        return true

    }
    return false
}
const marcar = (celda) => {

    let isBlock = bloquearCasilla(celda.target.id)
    
    if (isBlock) {
        alert('no')

    }
     
    else {
        if (flag) {
            
            celda.target.innerText = "X"
            arreglo[celda.target.id] = 'X'
            flag = !flag

        } else {
            celda.target.innerText = '0'
            arreglo[celda.target.id] = '0'
            flag = !flag


        }
        
    }
    validarJugador()
    


}
const juegoNuevo = () => {

    celdas.forEach((celda) => {

        celda.innerText = ''
        flag = true;
        arreglo = [null, null, null, null, null, null, null, null, null]

        celda.classList.replace('bg-danger', 'bg-primary')
    })


}

const ganador = () => {
    if (flag == false) {
        
        alert('Jugador X Gano')
        contadorX = contadorX + 1
        pntX.value = contadorX
        
        juegoNuevo()

    } else {
        alert('Jugador 0 Gano')
        contador0 = contador0 + 1;
        pnt0.value = contador0
        juegoNuevo()
    }
    if(contadorX == '2' &&  contador0 == '2'){
        alert('es un empate')
    }else if(contadorX == '3'){
        alert('Gano X por 3 puntos')
    }else if (contador0 == '3'){
        alert('ganno 0 por 3 puntos')
    }



}

celdas.forEach((celda) => {

    reiniciar.addEventListener('click', () => {
        celda.innerText = ''
        flag = true;
        arreglo = [null, null, null, null, null, null, null, null, null]
        celda.classList.replace('bg-danger', 'bg-primary')
        contador0 = 0;
        contadorX = 0;
        pnt0.value = ''
        pntX.value = ''
    })
    celda.addEventListener('click', marcar)

})