let mass=["https://answit.com/wp-content/uploads/2017/01/full-hd.jpg", "https://www.sunhome.ru/i/wallpapers/73/krasnoe-selo.orig.jpg", "https://pbs.twimg.com/media/E3ikLYGWUA0yVrn.jpg"]
let count =0;
                                                                                                                                                                                                                                                                                                               
let next = document.querySelector(".next")     
let prev = document.querySelector(".prev")                                                                                                                                                             
let pic=document.querySelector(".pic")
let dot1 = document.querySelector(".dot1")
let dot2 = document.querySelector(".dot2")
let dot3 = document.querySelector(".dot3")
next.addEventListener("click", ()=> {
    count++;

    pic.src=mass[count]
    if(count>=mass.length){
        count=0;
        pic.src=mass[count]
        dot1.style.backgroundColor= "red";
        dot3.style.backgroundColor= "blanchedalmond";
    }
    if(count==1){
        dot2.style.backgroundColor= "red";
        dot1.style.backgroundColor= "blanchedalmond";
    }
    if(count==2){
        dot3.style.backgroundColor= "red";
        dot2.style.backgroundColor= "blanchedalmond";
    }
})

prev.addEventListener("click", ()=> {
    if(count<=0){
        count=mass.length;
      /*  dot1.style.backgroundColor= "red";
        dot2.style.backgroundColor= "blanchedalmond"; */
    }
    if(count==1){
        dot2.style.backgroundColor= "red";
        dot3.style.backgroundColor= "blanchedalmond";
    }
    if(count==2){
        dot3.style.backgroundColor= "red";
        dot1.style.backgroundColor= "blanchedalmond";
    }
   if(count==0){
    dot1.style.backgroundColor= "red";
    dot2.style.backgroundColor= "blanchedalmond";
   }
  
    count--;
    pic.src=mass[count]
})