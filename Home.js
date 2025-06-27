/*jquery*/
$(document).ready(function () {
    $(".io").hide();
    $(".alls").hide();
    $(".pkl").click(function(even){
    $(".alls").toggle();
    $(".io").toggle();
    });
    $(".io").click(function(){
    $(".alls").hide();
    $(".io").hide();
    })

    $(function(){
   $(".hh").click(function(){
    $(".hh").addClass("animate__animated animate__backInLeft"); 
   });
   $(".hh").on("Animation",function(){
    $(this).removeClass('animate__animated animate__backInLeft');
   })
})

$(function(){
$(".om").click(function(){
$(".om").addClass( "animate__animated animate__rubberBand")
});
$(".om").on("Animation",(function(){
  $(this).removeClass("animate__animated animate__rubberBand")
})) 

});

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      
    });

});





 

console.log(localStorage.getItem("noodle"));
 
let noodle = JSON.parse(  localStorage.getItem("noodle"));

if(noodle === null){
 noodle = {
nameAll:0,
money:0,


noodle1 :{
name:"醬油拉麵",
money1:0,
number:0,

},

noodle2:{
name:"味噌拉麵",
money2:0,
number:0,

},

noodle3:{
name:"豚骨拉麵",
money3:0,
number:0,

},

noodle4:{
name:"鹽味拉麵",
money4:0,
number:0,

},

noodle5:{
name:"海鮮拉麵",
money5:0,
number:0,
},

noodle6:{
name:"沾麵",
money6:0,
number:0,
},

noodle7:{
name:"雞白湯拉麵",
money7:0,
number:0,
},

noodle8:{
name:"油拌麵",
money8:0,
number:0,
},

noodle9:{
name:"可樂餅",
money9:0,
number:0,
},

noodle10:{
name:"叉燒",
money10:0,
number:0,
},

noodle11 :{
name:"糖心蛋",
money11:0,
number:0,
},

noodle12:{
name:"加湯",
money12:0,
number:0,
},

noodle13:{
name:"蔥末",
money13:0,
number:0,
},

noodle14:{
name:"加麵",
money14:0,
number:0,
},

noodle15:{
name:"海苔",
money15:0,
number:0,
},

noodle16 :{
name:"黑木耳",
money16:0,
number:0,
},

noodle17:{
name:"可樂",
money17:0,
number:0,
},

noodle18:{
name:"雪碧",
money18:0,
number:0,
},

noodle19:{
name:"檸蒙汽水",
money19:0,
number:0,
},

noodle20:{
name:"果汁",
money20:0,
number:0,
},

noodle21 :{
name:"綠茶",
money21:0,
number:0,
},

noodle22:{
name:"紅茶",
money22:0,
number:0
},

noodle23:{
name:"烏龍茶",
money23:0,
number:0,
},

noodle24:{
name:"菊花茶",
money24:0,
number:0,
}
}
};
function JSONA(){
let  sd =  JSON.stringify(noodle);
localStorage.setItem("noodle",sd);}

function noodleMaxNum(){
document.querySelector('.number').innerHTML
=`${noodle.noodle1.number}`;
 
document.querySelector('.number1').innerHTML
=`${noodle.noodle2.number}`;

document.querySelector('.number2').innerHTML
=`${noodle.noodle3.number}`;

document.querySelector(".number3").innerHTML
=`${noodle.noodle4.number}`;

document.querySelector(".number4").innerHTML
=`${noodle.noodle5.number}`;

document.querySelector(".number5").innerHTML
=`${noodle.noodle6.number}`;

document.querySelector(".number6").innerHTML
=`${noodle.noodle7.number}`;

document.querySelector(".number7").innerHTML
=`${noodle.noodle8.number}`;

document.querySelector(".number8").innerHTML
=`${noodle.noodle9.number}`;

document.querySelector(".number9").innerHTML
=`${noodle.noodle10.number}`;

document.querySelector(".number10").innerHTML
=`${noodle.noodle11.number}`;

document.querySelector(".number11").innerHTML
=`${noodle.noodle12.number}`;

document.querySelector(".number12").innerHTML
=`${noodle.noodle13.number}`;

document.querySelector(".number13").innerHTML
=`${noodle.noodle14.number}`;

document.querySelector(".number14").innerHTML
=`${noodle.noodle15.number}`;

document.querySelector(".number15").innerHTML
=`${noodle.noodle16.number}`;

document.querySelector(".number16").innerHTML
=`${noodle.noodle17.number}`;

document.querySelector(".number17").innerHTML
=`${noodle.noodle18.number}`;

document.querySelector(".number18").innerHTML
=`${noodle.noodle19.number}`;

document.querySelector(".number19").innerHTML
=`${noodle.noodle20.number}`;

document.querySelector(".number20").innerHTML
=`${noodle.noodle21.number}`;

document.querySelector(".number21").innerHTML
=`${noodle.noodle22.number}`;

document.querySelector(".number22").innerHTML
=`${noodle.noodle23.number}`;

document.querySelector(".number23").innerHTML
=`${noodle.noodle24.number}`;

};  

function bodytextc(){
    document.querySelector(".alls").innerHTML=
   
 `<p>目前商品:${noodle.noodle1.name}數量:${noodle.noodle1.number} 金額:${noodle.noodle1.money1}</p>

<p>目前商品:${ noodle.noodle2.name}數量:${noodle.noodle2.number} 金額:${noodle.noodle2.money2}</p>

<p>目前商品:${noodle.noodle3.name}數量:${noodle.noodle3.number} 金額:${noodle.noodle3.money3}</p>

<p>目前商品:${noodle.noodle4.name}數量:${noodle.noodle4.number} 金額:${noodle.noodle4.money4}</p>

<p>目前商品:${noodle.noodle5.name}數量:${noodle.noodle5.number} 金額:${noodle.noodle5.money5}</p>

<p>目前商品:${noodle.noodle6.name}數量:${noodle.noodle6.number} 金額:${noodle.noodle6.money6}</p>

<p>目前商品:${noodle.noodle7.name}數量:${noodle.noodle7.number} 金額:${noodle.noodle7.money7}</p>

<p>目前商品:${noodle.noodle8.name}數量:${noodle.noodle8.number} 金額:${noodle.noodle8.money8}</p>

<p>目前商品:${noodle.noodle9.name}數量:${noodle.noodle9.number} 金額:${noodle.noodle9.money9}</p>

<p>目前商品:${noodle.noodle10.name}數量:${noodle.noodle10.number} 金額:${noodle.noodle10.money10}</p>

<p>目前商品:${noodle.noodle11.name}數量:${noodle.noodle11.number} 金額:${noodle.noodle11.money11}</p>

<p>目前商品:${noodle.noodle12.name}數量:${noodle.noodle12.number} 金額:${noodle.noodle12.money12}</p>

<p>目前商品:${noodle.noodle13.name}數量:${noodle.noodle13.number} 金額:${noodle.noodle13.money13}</p>

<p>目前商品:${noodle.noodle14.name}數量:${noodle.noodle14.number}金額:${noodle.noodle14.money14}</p>

<p>目前商品:${noodle.noodle15.name}數量:${noodle.noodle15.number}金額:${noodle.noodle15.money15}</p>

<p>目前商品:${noodle.noodle16.name}數量:${noodle.noodle16.number}金額:${noodle.noodle16.money16}</p>

<p>目前商品:${noodle.noodle17.name}數量:${noodle.noodle17.number}金額:${noodle.noodle17.money17}</p>

<p>目前商品:${noodle.noodle18.name}數量:${noodle.noodle18.number}金額:${noodle.noodle18.money18}</p>

<p>目前商品:${noodle.noodle19.name}數量:${noodle.noodle19.number}金額:${noodle.noodle19.money19}</p>

<p>目前商品:${noodle.noodle20.name}數量:${noodle.noodle20.number}金額:${noodle.noodle20.money20}</p>

<p>目前商品:${noodle.noodle21.name}數量:${noodle.noodle21.number}金額:${noodle.noodle21.money21}</p>

<p>目前商品:${noodle.noodle22.name}數量:${noodle.noodle22.number}金額:${noodle.noodle22.money22}</p>

<p>目前商品:${noodle.noodle23.name}數量:${noodle.noodle23.number}金額:${noodle.noodle23.money23}</p>

<p>目前商品:${noodle.noodle24.name}數量:${noodle.noodle24.number}金額:${noodle.noodle24.money24}</p>

 <p>目前商品共${noodle.nameAll}樣目前金額共$${noodle.money}</p>
`;
}





function textsheep(){
let jk = document.querySelector(".pkl");
jk.innerHTML === "查看訂單"? (jk.innerHTML = "已查看過訂單"):(jk.innerHTML = "查看訂單");
};

function textsheep2(){
  let zx = document.querySelector(".pko");
  zx.innerHTML ==="送出訂單"?(zx.innerHTML = "已送出訂單"):(zx.innerHTML = "已送出訂單")  
}






