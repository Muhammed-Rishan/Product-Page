document.getElementById('price').innerHTML= '$'+19.03;

var Mainimg = document.getElementById('Mainimg');
var qnt = document.getElementById('qnt').value;
var red_price= 19.03;
function calculate(val){
    var tot_price = val*red_price;
    document.getElementById('price').innerHTML = '$ '+tot_price;
    document.getElementById('sprice').innerHTML='Price:'+'$ '+tot_price;
    document.getElementById('sqty').innerHTML= 'Quantity:'+val;

    // document.getElementById('cimg').innerHTML=Mainimg;

}

var red=document.getElementById('red')
red.addEventListener("click",function()
{
    document.getElementById('Mainimg').src = 'media/img2.jpeg'; 
    // var price = qnt*red_price;
    document.getElementById('price').innerHTML = '$ '+red_price;
});


var green=document.getElementById('green')
var green_price= 15.03;
// function calculate(val){
//     var tot_price = val*green_price;
//     document.getElementById('price').innerHTML = '$ '+tot_price;
// }
green.addEventListener("click",function()
{
    document.getElementById('Mainimg').src = 'media/img3.jpeg'; 
    document.getElementById('price').innerHTML = '$'+green_price;
});


var blue=document.getElementById('blue')
var blue_price= '$17.00';
blue.addEventListener("click",function()
{
    document.getElementById('Mainimg').src = 'media/img4.jpeg'; 
    document.getElementById('price').innerHTML = blue_price;
});


var gray=document.getElementById('gray');
var gray_price= '$20.00';
gray.addEventListener("click",function()
{
    document.getElementById('Mainimg').src = 'media/img5.jpeg';
    document.getElementById('price').innerHTML = gray_price; 
});

function clrchange(val)
{
    var color=document.getElementsByName('clr');
    for (i=0;i<color.length;i++)
    {
        if (color[i].checked)
        document.getElementById('sclr').innerHTML="Color:"+color[i].value;
    }
}