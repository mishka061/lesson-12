//Первое задание

document.querySelector('.one').onclick = function () {
    document.querySelector('.one').style.width = '115px'
    document.querySelector('.one').style.height = '115px'
    document.querySelector('.one').style.background = 'yellow'
}

// Второе задание двойной клик
let a = document.querySelector('.two')
a.ondblclick = function () {
    console.log(a.textContent)
}
// Третье задание,заменяет картинку на вторую картинку
let block=document.querySelector('.three')
block.onclick = function(){
    block.classList.add('ris')
    console.log('click')
}

// Третье задание,заменяет картинку на цифру 2

document.querySelector('.four').onclick = function () {
    document.querySelector('.four').innerHTML = '2'
}

// Четвертое задание

document.querySelector('.input-text').onkeypress = function(e){
    console.log(e)
    document.querySelector('.six').innerHTML= e.code
    document.querySelector('.seven').innerHTML= e.charCode
}

// Пятое задание
let but = document.querySelector('.but')
let str = document.querySelector('.in-text')
but.onclick = function (){
    if (!isNaN(str.value)){
        document.querySelector('.five').innerHTML= false
    }else{
        document.querySelector('.five').innerHTML= true
    }
}









