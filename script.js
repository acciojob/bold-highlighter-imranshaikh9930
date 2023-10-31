 const boldWords = document.querySelectorAll("strong");
function highlight() {
    //Write your code here
	
	 for(let word of boldWords){
    word.style.color ='green';
  }


}


function return_normal() {
    //Write your code here
		for(let word of boldWords){
	    word.style.color ='black';
	  }
    
}
