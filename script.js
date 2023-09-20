const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const body = document.body;

function updateTime() {
    const datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();
    
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    const turno = determinarTurno(hr);
    alterarFundo(turno);
}

function determinarTurno(hora) {
    if (hora >= 5 && hora < 12) {
        return 'manha';
    } else if (hora >= 12 && hora < 18) {
        return 'tarde';
    } else if (hora >= 18 && hora < 24) {
        return 'noite';
    } else {
        return 'madrugada';
    }
}

function alterarFundo(turno) {
    switch (turno) {
        case 'manha':
            body.style.background = 'linear-gradient(120deg, #ffe53bd8, #ff2525da)';
            break;
        case 'tarde':
            body.style.background = 'linear-gradient(120deg, #ffedbc, #f7a0a0)';
            break;
        case 'noite':
            body.style.background = 'linear-gradient(120deg, #141e30, #34557b)';
            break;
        case 'madrugada':
            body.style.background = 'linear-gradient(120deg, #01041e, #0267c0);'
            break;
        default:
            break;
    }
}

setInterval(updateTime, 1000);
updateTime();

