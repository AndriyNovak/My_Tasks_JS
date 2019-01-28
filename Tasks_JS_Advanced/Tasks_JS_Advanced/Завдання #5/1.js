/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

  var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var currentPosition = 0;
window.addEventListener('load', function(){

  var slider = document.getElementById("slider");
  var img = document.createElement("img");
  img.src = OurSliderImages[0];
  slider.appendChild(img);

  var PrevSilde = document.getElementById("PrevSilde");
  var NextSilde = document.getElementById("NextSilde");
  console.log(OurSliderImages.length);

  function RenderImage(){
  		img.src = "";
        img.src = OurSliderImages[count];   
        slider.appendChild(img); 
        console.log(OurSliderImages[count]  + " ++++" +  count); 
  }
   var count =0;
  NextSilde.addEventListener("click", function(){        
         
         if (count<(OurSliderImages.length-1)){ 			
	         count++;
	         RenderImage();
         } 
         else{
		    count=-1;
			count++;
		    RenderImage();
		   
         }
 }) 
  PrevSilde.addEventListener("click", function(){        
          
          
         if (count>0){
		 
         count--;
            RenderImage();
         } 
         else{         	
          count=OurSliderImages.length;
          count--;
           
          RenderImage();
         
         }
      }) 


































 //   var count =1;
 //  NextSilde.addEventListener("click", function(){        
          
 //         if (count<8){

 //          img.src = "";
          
          
 //          img.src = OurSliderImages[count];   
 //          slider.appendChild(img); 
 //           console.log(OurSliderImages[count]  + " ++++" +  count); 
 //            count++;
 //         }
 //         if (count>=8){
 //          count=0;
          
 //         }
 // }) 
 //  PrevSilde.addEventListener("click", function(){        
         
 //         if (count>=0){
         
           
 //          img.src = "";
 //          img.src = OurSliderImages[count];   
 //          slider.appendChild(img);
 //          console.log(OurSliderImages[count]  + " ++++"  + (count)); 
 //          count--;
          
 //         }  
 //         if (count<0){
         
 //          count=7;
         
          
 //         }

       
 //    })
     
    
    
  })


 
   

    
  