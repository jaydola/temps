function showLocation() {
    var latitude = 36.811527161964484;
    var longitude = -1.2715610380215332; 
    window.open("https://edulink.ac.ke/?q=" + latitude + "," + longitude); // Fixed URL formation
}

const sr =ScrollReveal({
   distance: '65px',
   duration: 2600,
   delay:450,
   reset: true ,
   easing: 'ease-in-out',
   interval: 200

});
sr.reveal('.img1',{delay:200,origin:'top'});
sr.reveal('.img2',{delay:450,origin:'bottom'});
sr.reveal('.text2',{delay:320,origin:'left'});
sr.reveal('.text',{delay:400,origin:'right'});
sr.reveal('.img3',{delay:200,origin:'right'});