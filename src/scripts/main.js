AOS.init();

const dataDaFesta = new Date("Sep 16, 2023 19:30:00");
const timeStampDaFesta = dataDaFesta.getTime();

    const contaAsHoras = setInterval(function (){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteAfesta = timeStampDaFesta - timeStampAtual;
    const diasEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMs = 1000* 60;
    

    const diasAteAfesta = Math.floor(distanciaAteAfesta / diasEmMS);
    const horasAteAfesta = Math.floor((distanciaAteAfesta % diasEmMS) / horaEmMS);
    const minutosAteAfesta = Math.floor((distanciaAteAfesta % horaEmMS) / minutoEmMs);
    const segundosAteAfesta = Math.floor((distanciaAteAfesta % minutoEmMs) / 1000);
    

    document.getElementById('contador').innerHTML = `Faltam somente ${diasAteAfesta}d ${horasAteAfesta}h ${minutosAteAfesta}m ${segundosAteAfesta}s para começar a festa!`;

    if(distanciaAteAfesta < 0 ) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `A Festa já acabou, a próxima agora só em setembro de 2024`
    }
});