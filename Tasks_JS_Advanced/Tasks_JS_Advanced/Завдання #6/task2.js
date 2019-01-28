/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  let colors = {
    background: 'lightgreen',
    color: 'white'
  }
var bind_block = document.querySelector(".bind_block");
var testBtn = document.getElementById("testBtn");
testBtn.style.display = "none";
var meowButton = document.getElementById("meowButton");
meowButton.style.display = "none";


 var h1 = document.createElement("h1");

  function myCall( back ){
    document.body.style.background = back;
    document.body.style.color = this.color;   
    h1.innerHTML = "I know how binding works in JS";
    bind_block.appendChild(h1);
  }
var Call = document.getElementById("Call");
Call.addEventListener("click", function(){
   h1.innerHTML = "";
   myCall.call( colors, 'pink' );
})
   



  function myBind(){
    
    var text="I know how binding works in JS";

    document.body.style.background = this.background;
    document.body.style.color = this.color;    
    h1.innerHTML = text;
    bind_block.appendChild(h1);
    
  }
var Bind = document.getElementById("Bind");
Bind.addEventListener("click", function(){
   h1.innerHTML = "";
   
   let myBindFunk = myBind.bind(colors);
   myBindFunk();
})




 function myApply(text){   
     document.body.style.color = this.color;
     document.body.style.background = this.background;
    h1.innerHTML = text;
    bind_block.appendChild(h1);
  }

var Apply = document.getElementById("Apply");
Apply.addEventListener("click", function(){
   h1.innerHTML = "";
  var text_apply = [prompt("введите текст","Здесь должна быть Ваша РЕКЛАМА!!!")];
   myApply.apply( colors, text_apply );
})
