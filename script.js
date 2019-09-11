


function closepopup()
{
	var popupcont = document.querySelector("div.popup");
    popupcont.style.display = "none";
    
}


function showpopup(StringtoForm, form, isApplication)
{
	form.service.value = "";
	form.service.value = StringtoForm;
    var popupcont = document.querySelector("div.popup");
	popupcont.style.display = "block";

	if(isApplication == true)
	{
         var titleHead = document.querySelector("label.title-form");
         titleHead.innerHTML = "Заявка";
	}

	else
	{
		var titleHead = document.querySelector("label.title-form");
         titleHead.innerHTML = "Заказать";
	}

}



var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n)
{
    
   var index = showSlides(slideIndex += n);
   var interval = setInterval(frame, 10);
   var i = 600;

function frame()
{
    var slides = document.querySelectorAll('div.mySlides');
   

    if(i === 0)
    {
       clearInterval(interval);
       console.log('Thats all');
    }

    else
    {

     i -=10;
  //  slides[index-1].style.transform = "translateX("+i+"px)";

    }
}

  
   


}


function currentSlide(n)
{

var index = showSlides(slideIndex = n);
var interval = setInterval(frame, 10);
var i = 500;

function frame()
{
    var slides = document.querySelectorAll('div.mySlides');
   

    if(i === 0)
    {
       clearInterval(interval);
       console.log('Thats all');
    }

    else
    {

     i -=10;
    //slides[index-1].style.transform = "translateX("+i+"px)";

    }
}

}


function showSlides(n)
{
    var i;
    var slides = document.querySelectorAll('div.mySlides');
    var dots = document.querySelectorAll('span.dot');

    if(n > slides.length)
    {
        slideIndex = 1;

    }

    if(n < 1)
    {
       slideIndex = slides.length;
    }

    for ( i = 0; i < slides.length; i++) {
        
        slides[i].style.display = "none";
        
    }

    for ( i = 0; i < dots.length; i++) {
        
        dots[i].className = dots[i].className.replace("active","");
    }

   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";


   //var textSlides = document.querySelectorAll('div.numbertext');
  // textSlides[slideIndex -1].innerHTML = "1/" + slideIndex;

  return slideIndex;

  }

  

 function autoplay()
 {
     
     interval = setInterval(play, 4000);

    i = 1;

     function play()
     {

        plusSlides(1);
     	
     }
    


 }

 autoplay();





 
 

 
