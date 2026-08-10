
let create_card = (title,cName,views,how_old,duration,n_img)=>{
 let n_title = document.getElementById("title"); 
 n_title.innerHTML = title; 
 let n_cName = document.getElementById("channel_name");
 n_cName.innerHTML = cName;
//for giving proper size to views
 let n_views = document.getElementById("views");
 let formatted_view;
 if(views >= 1000000000000){
 formatted_view= (views/1000000000000).toFixed(1)+"T";
 }else if(views >= 1000000000){
 formatted_view= (views/1000000000).toFixed(1)+"B";
 }else if(views >= 1000000){
 formatted_view=(views/1000000).toFixed(1)+"M";
 }else if(views >= 1000){
 formatted_view= (views/1000).toFixed(1)+"K";
 }else{
  formatted_view= views;
 }
 n_views.innerHTML = formatted_view;
 let old = document.getElementById("how_old_vid");
 old.innerHTML = how_old;
 let vid_time = document.getElementById("time");
 vid_time.innerHTML = duration;
 let img = document.getElementById("img");
 img.src = n_img;
}
create_card("Let's make cookie with Me || Explore My Channel",
    "it's! Me",
    40000,
    "3 Years ago",
    "22:33","img1.avif");




