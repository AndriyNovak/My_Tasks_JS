


    // Задание 1.

    // Написать скрипт который будет будет переключать вкладки по нажатию
    // на кнопки в хедере.

    // Главное условие - изменять файл HTML нельзя.

    // Алгоритм:
    //   1. Выбрать каждую кнопку в шапке
    //      + бонус выбрать одним селектором

    //   2. Повесить кнопку онклик
    //       button1.onclick = function(event) {

    //       }
    //       + бонус: один обработчик на все три кнопки

    //   3. Написать функцию которая выбирает соответствующую вкладку
    //      и добавляет к ней класс active

    //   4. Написать функцию hideAllTabs которая прячет все вкладки.
    //      Удаляя класс active со всех вкладок

    // Методы для работы:

    //   getElementById
    //   querySelector
    //   classList
    //   classList.add
    //   forEach
    //   onclick

    //   element.onclick = function(event) {
    //     // do stuff ...
    //   }

	
	
       		
       			
        	
	
	var tab = document.querySelectorAll(".tab");
	var button1 = document.querySelectorAll(".showButton");
					var i1=0;
					var i2=1;
					var i3=2;
					function hideAllTabs (a1,a2){
						
						tab[a1].classList.remove("active");
						tab[a2].classList.remove("active");
						
					}
					
					button1[0].onclick = function() {				
					tab[0].classList.add("active");
					hideAllTabs(i2,i3);
					}
					
	       			
	       			button1[1].onclick = function() {			
							tab[1].classList.add("active");
							hideAllTabs(i1,i3);
					}
							
	       			
	       			button1[2].onclick = function() {			
							tab[2].classList.add("active");
							hideAllTabs(i2,i1);

					}
					

	// var tab = document.querySelectorAll(".tab");
	// var button1 = document.querySelectorAll(".showButton");
					
	// 					button1[0].onclick = function(event) {				
	// 					tab[0].style.visibility = "visible";
	// 					tab[0].style.overflow = "visible";
	// 					tab[0].style.opacity = "1";
	// 					tab[0].classList.add("active");
						
	// 					tab[1].style.visibility = "hidden";
	// 					tab[1].style.overflow = "hidden";
	// 					tab[1].style.opacity = "1";
	// 					tab[2].style.visibility = "hidden";
	// 					tab[2].style.overflow = "hidden";
	// 					tab[2].style.opacity = "1";
	// 					}
						
       		
 //       			button1[1].onclick = function(event) {			
	// 				tab[1].style.visibility = "visible";
	// 				tab[1].style.overflow = "visible";
	// 				tab[1].style.opacity = "1";
	// 				tab[1].classList.add("active");

	// 				tab[2].style.visibility = "hidden";
	// 				tab[2].style.overflow = "hidden";
	// 				tab[2].style.opacity = "1";
	// 				tab[0].style.visibility = "hidden";
	// 				tab[0].style.overflow = "hidden";
	// 				tab[0].style.opacity = "1";
	// 			}
			
       	
 //       			button1[2].onclick = function(event) {			
	// 				tab[2].style.visibility = "visible";
	// 				tab[2].style.overflow = "visible";
	// 				tab[2].style.opacity = "1";
	// 				tab[0].classList.add("active");

	// 				tab[1].style.visibility = "hidden";
	// 				tab[1].style.overflow = "hidden";
	// 				tab[1].style.opacity = "1";
	// 				tab[0].style.visibility = "hidden";
	// 				tab[0].style.overflow = "hidden";
	// 				tab[0].style.opacity = "1";

	// 			}
        	
	
    