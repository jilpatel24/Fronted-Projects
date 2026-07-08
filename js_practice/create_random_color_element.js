js code
let change = document.querySelectorAll(".container div");
//for creating random color on element
change.forEach((element,index) =>{
    let random_color = "#"+ Math.floor(Math.random()*16777215).toString(16); //we use 16777215 bcz red,green,blue range = 0 to 155 so 256*256*256
    // toSring(16) use for convert that value into hexadecimal
    element.style.backgroundColor = random_color;
});
//using Array
// change.forEach((element,index) =>{
//     let random_color = ["purple","green","orange","blue"];
//     element.style.backgroundColor = random_color;
// });
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
