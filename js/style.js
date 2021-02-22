$(document).ready(function (){

       var liens= $('ul li a');
       //mes_liens= Array.from(liens);

		liens.click(function live(){
		   $.ajax({
					url:$(this).attr("href"),//index.html
					dataType:"text",
					success:function(data){
                    $('.container').empty()
					$('.container').append(data)
				    },
					error:function(xhr){
					}
		   })
				return false;
		       
		})
		        //activer un lien
                    link=$('#myul a')
			        link.click(function show(event){
					  event.preventDefault()
						//console.log($(this).parent().siblings())
						 $(this).parent().siblings().removeClass('active');
						 $(this).parent().addClass('active');
					    //console.log($(this).parent().addClass('active'))
					})

//effet au scroll
        const contener= $('.box');
	    const my_scroll= $('.style_anim')	
	    window.addEventListener('scroll',()=>{
		   if(window.scrollY > 100){
		   my_scroll.addClass('box');

		   }else{
		   my_scroll.removeClass('box');
		   }
	   })




//effet au click
	window.addEventListener('click',(event)=>{
		   // event.preventDefault();
		    //console.log(e)
		    
		    let rond =document.createElement('div');
		    console.log('rond')
		    rond.className ='clickAnim'
		    rond.style.top='${e.pageY - 50}px';
		    rond.style.left='${e.pageX - 50}px';
            document.body.appendChild(rond);
		})

//chercher le formulaire
	var lien_footer=$('div span a');
	lien_footer.click(function live(){
		console.log('je suis la foncion')
	     console.log($(this).attr('href'));								
	    $.ajax({
				url:$(this).attr("href"),//index.html
				dataType:"text",
				success:function(data){
                  console.log(data)
				$('.container').empty()
				$('.container').append(data)
				
				},
				error:function(xhr){
					//console.log(xhr)
					//console.log(text)
				}
		})
			return false;
	})
	//toggle
	const tel= document.querySelector('button');
	const p_cache=document.querySelector('.text');
	
	
	tel.addEventListener('click',(event) =>{
		event.preventDefault()
		p_cache.classList.toggle('is-visible');
		
	});


	
})