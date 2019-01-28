/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 6-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 256;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе:  
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
  
  function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  var div_wrap = document.getElementById('app');
  var mydiv = document.createElement("div"); 
  var a =  div_wrap.appendChild(mydiv);
  a.className = "mydiv";
  a.style.display = "flex";
  a.style.justifyContent = "center"; 
  a.style.alignItems = "center"; 
  a.style.minHeight = "100%";
  a.style.margin = " 20% 10%";
  a.style.border = " 1px solid black";
  var ff="#" +  getRandom(0,255).toString(16) + getRandom(0,255).toString(16) + getRandom(0,255).toString(16);
  function bgColor(){
    //Варіант 1
    // mydiv.style.background = "rgb(" +  getRandom(0,255) + "," + getRandom(0,255) + "," + getRandom(0,255) + ")";
    // Варіант 2
    
    mydiv.style.background =ff ;
    // console.log(ff);
    a.innerHTML = ff;
  }
  bgColor();
  
  var btn = document.createElement("button");
  var btn_in_div = document.body.appendChild(btn);
  btn_in_div.innerHTML = "Кнопка";
  btn_in_div.style.position = "absolute"; 
  btn_in_div.style.height = "30px";
  btn_in_div.style.marginRight = "20%";
  btn_in_div.style.marginTop = "10%";
  
    
   // a.innerHTML = ff;
    btn_in_div.onclick = function() {    
    var dd= "#" +  getRandom(0,255).toString(16) + getRandom(0,255).toString(16) + getRandom(0,255).toString(16) ;
     mydiv.style.background =dd ;
    // console.log(ff);
    a.innerHTML =dd;    
    

    
  }

      // a.innerHTML = ff;