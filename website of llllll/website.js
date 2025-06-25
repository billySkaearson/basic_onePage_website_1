

window.onscroll = function () {
var he = document.getElementById('hed'),fades = document.querySelectorAll('.fade-in');
 
if (pageYOffset >1000) {
	he.style.backgroundColor = 'black';
	he.style.borderBottom = '5px solid darkgray';
	he.style.borderRight = '5px solid darkgray';

}else {

	he.style.backgroundColor = "";
	he.style.borderBottom = '0px';
	he.style.borderRight= '0px';
	}

if(pageYOffset >1300){

    // for(let ii = 3;i=3;i++){
    //      fades[i].classList.add('appear');

    // }
    
    fades.forEach((fade) => {
     	fade.classList.add('appear');
     })


}else{

   fades.forEach((fade) => {
     	fade.classList.remove('appear');
     })

}
}

var k = document.getElementById('k')
,t = document.getElementById('l'),h = document.getElementById('ff');





k.onclick = () => {
h.scrollBy(240,0);
}

t.onclick = () => {
	
h.scrollBy(-240,0);
}


 function initMap(){
 var options ={
     zoom:8,
     center:{lat:42.3601,lng:-71.0589}
 }

 }
  var map = new google.maps.map(document.getElementById('map'),options);





