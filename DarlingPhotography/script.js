/* 
         Darling Photography
         Filename: script.js

         Author:   Kaylea Britton
         Date:     05/03/2017
      */
	  
	  /* create variables */
	  var flatwoodsHead = document.querySelector(".flatwoods h4");
	  var flatwoodsParagraph = document.querySelector(".flatwoods p");
	  var cityHead = document.querySelector(".city h4");
	  var cityParagraph = document.querySelector(".city p");
	  var gymHead = document.querySelector(".gym h4");
	  var gymParagraph = document.querySelector(".gym p");
	  var ownHead = document.querySelector(".own h4");
	  var ownParagraph = document.querySelector(".own p");
	  var figureImage = document.querySelector("figure img");
	  var figureCaption = document.querySelector("figcaption")
	  
	  /* function to show Flatwoods p and img and hide other paragraphs */
	  function showFlatwoods() {
		  flatwoodsParagraph.textContent="Flatwoods Park in Gosport is a beautiful venue";
		  cityParagraph.textContent="";
		  gymParagraph.textContent="";
		  ownParagraph.textContent="";
		  figureImage.src="images/venuebritton.jpg";
		  figcaption.textContent="Flatwoods Park";
	  }
	    
		
	 /* function to show Downtown Bloomington p and img and hide other paragraphs */
	  function showCity() {
	      flatwoodsParagraph.textContent="";
		  cityParagraph.textContent="This alley in Bloomington was great for these photos";
		  gymParagraph.textContent="";
		  ownParagraph.textContent="";
		  figureImage.src="images/venuepemberton.jpg";
		  figcaption.textContent="Downtown Bloomington";
	  }
	 
	 /* function to show The Gym p and img and hide other paragraphs */
	  function showGym() {
	      flatwoodsParagraph.textContent="";
		  cityParagraph.textContent="";
		  gymParagraph.textContent="This client got super unique pictures in this gym";
		  ownParagraph.textContent="";
		  figureImage.src="images/venuegym.jpg";
		  figcaption.textContent="The Gym";
	  }
	  
	  
	  /* function to show Your Own Property p and img and hide other paragraphs */
	  function showOwn() {
	      flatwoodsParagraph.textContent="";
		  cityParagraph.textContent="";
		  gymParagraph.textContent="";
		  ownParagraph.textContent="This is the client's property which made the photos more special";
		  figureImage.src="images/venuejess.jpg";
		  figcaption.textContent="Your Own Property";
	  }
	  
	  
	  /* event listeners */
	  flatwoodsHead.addEventListener("click", showFlatwoods, false);
	  cityHead.addEventListener("click", showCity, false);
	  gymHead.addEventListener("click", showGym, false);
	  ownHead.addEventListener("click", showOwn, false);
	  
	  
	  
	  