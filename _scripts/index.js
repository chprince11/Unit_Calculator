let inputBox = document.getElementById('input-box');
let para = document.getElementById('para-1');

let cmInch = document.getElementById('btn-1');
let inchCm = document.getElementById('btn-2');
let cmMeters = document.getElementById('btn-3');
let mCenti = document.getElementById('btn-4');
let inchM = document.getElementById('btn-5');
let mInch = document.getElementById('btn-6');
let mFeet = document.getElementById('btn-7');
let feetM = document.getElementById('btn-8');
let cmFeet = document.getElementById('btn-9');
let feetCm = document.getElementById('btn-10');

let reset = document.getElementById('reset-btn');


cmInch.onclick = function ()
{
    let display = inputBox.value;
    var answer = (display * (0.3937007874));
    para.innerHTML = " Result : " + display + " centimeter = " + answer.toFixed(2)
     + " inch";
    para.style.background = "skyblue";
     
}

inchCm.onclick = function () 
{
    let display = inputBox.value;
    const answer = (display * (2.54));
    para.innerHTML = " Result : " + display + " inch = " + answer.toFixed(2)  + " centimeter";
    para.style.background = "lightgreen";

}

cmMeters.onclick = function () 
{
    let display = inputBox.value;
    var answer = (display / (100));
    para.innerHTML = " Result : " + display + " centimeter = " + answer.toFixed(2)  + " meter";
    para.style.background = "violet";

}

mCenti.onclick = function () 
{
    let display = inputBox.value;
    var answer = (display * (100));
    para.innerHTML = " Result : " + display + " meter = " + answer.toFixed(2) + " centimeter";
    para.style.background = "orange";

}

inchM.onclick = function () 
{
    let display = inputBox.value;
    var answer = (display * (0.0254));
    para.innerHTML = " Result : " + display + " inch = " + answer.toFixed(2) + " meter";
    para.style.background = "brown";

}

mInch.onclick = function () 
{
    let display = inputBox.value;
    const answer = (display * (39.37007874));
    para.innerHTML = " Result : " + display + " meter = " + answer.toFixed(2) + " inch";
    para.style.background = "aqua";

}

mFeet.onclick = function () 
{
    let display = inputBox.value;
    var answer = (display * (3.280839895));
    para.innerHTML = " Result : " + display + " meter = " + answer.toFixed(2)  + " feet";
    para.style.background = "yellow";

}

feetM.onclick = function () 
{
    let display = inputBox.value;
    const answer = (display * (0.3048));
    para.innerHTML = " Result : " + display + " feet = " + answer.toFixed(2) + " meter";
    para.style.background = "pink";

}

cmFeet.onclick = function () 
{
    let display = inputBox.value;
    var answer = (display * (0.03280839895));
    para.innerHTML = " Result : " + display + " centimeter = " + answer.toFixed(2) + " feet";
    para.style.background = "green";

}

feetCm.onclick = function () 
{
    let display = inputBox.value;
    var answer = (display * (30.48)); 
    para.innerHTML = " Result : " + display + " feet = " + answer.toFixed(2) + " centimeter";
    para.style.background = "red";

}

reset.onclick = function () 
{
    para.innerHTML = "Cleared all...";
    para.style.background = "#2e9c2e1f";
    inputBox.focus();
}
