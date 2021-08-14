function one(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "1";
}

function two(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "2";
}

function three(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "3";
}

function four(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "4";
}

function five(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "5";
}

function six(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "6";
}

function seven(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "7";
}

function eight(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "8";
}

function nine(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "9";
}

function zero(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "0";
}

function dZero(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += "00";
}

function dot(){
    let getVal = document.getElementById('cal-inp');

    getVal.value += ".";
}

function plus(){
    let getVal = document.getElementById('cal-inp')
    getVal.value += "+";
}

function minus(){
    let getVal = document.getElementById('cal-inp')
    getVal.value += "-";
}

function multyply(){
    let getVal = document.getElementById('cal-inp')
    getVal.value += "*";
}

function divid(){
    let getVal = document.getElementById('cal-inp')
    getVal.value += "/";
}

function modulo(){
    let getVal = document.getElementById('cal-inp')
    getVal.value += "%";
}

function equal(){
    let getVal = document.getElementById('cal-inp').value;
    // let result = document.getElementById('result-cal');
    let res = eval(getVal);
    document.getElementById('main-inp').value = res;
    

}

function ce(){
    document.getElementById('cal-inp').value = null;
    document.getElementById('main-inp').value = null;
}