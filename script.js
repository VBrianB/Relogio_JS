let digitalElement = document.querySelector('.digital');
let ponteiroS = document.querySelector('.p_s');
let ponteiroM = document.querySelector('.p_m');
let ponteiroH = document.querySelector('.p_h');


function updateClock(){
    time = new Date();
    hour = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`

    let sDeg = ((360 / 60)* seconds) - 90;
    let mDeg = ((360 / 60)* minutes) - 90;
    let hDeg = ((360 / 12)* hour) - 90;

    ponteiroS.style.transform = `rotate(${sDeg}deg)`; 
    ponteiroM.style.transform = `rotate(${mDeg}deg)`; 
    ponteiroH.style.transform = `rotate(${hDeg}deg)`; 




}
const fixZero = (e) => e <10 ? `0`+e : e; 

setInterval(updateClock, 1000);
updateClock();

