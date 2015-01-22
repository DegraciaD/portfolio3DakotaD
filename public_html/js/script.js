
$("document").ready(function(){
     $('.bruh').css('background-color','yellow');    
    
    $('#superHumans').accordion({header: "h3"});
    
    $('p:last').css("background-color",'green');
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('#show').css('visibility', 'hidden');

$('#hide').bind('click', hideThepage);
    
    $('#show').bind('click', showThepage);
    
    $('h1').bind('click',mouseClick);
    
    $('#replaceWtext').bind('click',replaceWtext);
    
    $("#randPara").bind('click',addAPara);
    
    $('#removePara').bind('click', removeAPara);
});
function hideThepage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $("#show").show('fold', {}, 2500);
//this is were when you click on the last word you  see the page going away
}

function showThepage(){
    $('div').show('fold', {}, 2500);
    $('#show').show('puff', {}, 2500);
    //this when you press a button that make you see the page
}

function removeAPara(){
    $('#randPara p:last').remove();
    //hen you click on the line above  the line that adds the paragraph you delete that the word added
}


function addAPara(){
    $('#randPara').append('<p>ADDED</P>');
    //when you click on the third line you see the word added keep on poping up
}
function replaceWtext(){
 
    $('#replaceWtext').text("<h1> hi my name is bob</h1>");
 
}
function mouseOutMe(){

 
    ('h1').html("I am the best");
  }
  
  function mouseOverMe(){
      
      $('p').html('My Clash of clans base is the best');
  //when you  put the mouse over I am th e best you see My Clash of clans base is the best
  }
  
  

function mouseClick(){
    
    $('p').html('<img src="http://1.media.dorkly.cvcdn.com/79/63/a3a9376f5bb246e91388c75a82e53996.gif"/> ');
}      // when you click I am the best you see this picture        