

let hamp = document.getElementById('hamp');
var aq = document.getElementById('aq'),
fade = document.querySelectorAll('.fades-in'),to = document.getElementById('toot'),
dat = document.getElementById('date'),f=document.getElementById('fff');





const option = {};

const appear = new IntersectionObserver((e,a)=>{
e.forEach((ea) => {
	if(!e.isIntersecting){
		return;
	}else{
		a.unobserve(e.target);
		e.target.classList.add('appear');
	}
  
})
},option);




 let d = new Date();

 dat.append(d.toDateString());



to.onclick = () =>{
	 aq.classList.remove('ccc');
	hamp.classList.remove('vvc');
	f.classList.remove('cl');
}

hamp.onclick = () =>{
           
             
	if(aq.style.right = "-600px"){
             // aq.style.right = "0px";
             aq.classList.add('ccc');
           
             hamp.classList.add('vvc');
             setTimeout(() => {
               f.classList.add('cl');
             }, 1000)
   

	}
	
}

f.onclick = () =>{
	
	 aq.classList.remove('ccc');
	
	hamp.classList.remove('vvc');
	f.classList.remove('cl');
}

 fade.forEach((fa) => {
   // a.observe(fa);
     fa.classList.add('appear');
     console.warn(fa);
 })
