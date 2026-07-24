js code
 let change_bgcolor ;
    function randomColor(){
        clearInterval();
        
        change_bgcolor = setInterval(()=>{
           let random_color = "#"+ Math.floor(Math.random()*16777215).toString(16);
          console.log("setInterval()");
          document.body.style.backgroundColor = random_color;  
        },1000);
}
function stop_color(){
  console.log("clearInterval()");
    clearInterval(change_bgcolor);
}

html code : 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
  .div{
        height: 100px;
        width: 100px;
        display:flex;
        flex-direction: column-reverse;
    }
    #a{
        background-color: blueviolet;
    }#b{
        background-color: brown;
    }#c{
        background-color: orange;
    }#d{
        background-color: green;
    }
</style>
<body>
    <div class="container">
        <div class="div" id="a"><p>hello </p></div>
        <div class="div" id="b"></div>
        <div class="div" id="c"></div>
        <div class="div" id="d"></div>
    </div>
 <script src="js_practice.js"></script>   
</body>
</html>
