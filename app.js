document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove:1,
        fixedHeight:250,
        fixedWidth:250

    } ).mount()
    var  slides= document.querySelectorAll(".splide__slide");	
    for (let slide of slides) {
        slide.addEventListener("mouseenter", function(e){
            var parent = e.target.firstElementChild;
            console.log(parent)
            if(parent){
        
                    parent.style.opacity="1"
                }
                document.getElementsByClassName("splide__arrows")[0].style.opacity="0";

            })


        slide.addEventListener("mouseleave", function(e){
            var parent = e.target.firstElementChild;
            console.log(parent)
             if(parent){  
                parent.style.opacity="0"
            }
            document.getElementsByClassName("splide__arrows")[0].style.opacity="1"; 
        })    
            
    }
          
});
