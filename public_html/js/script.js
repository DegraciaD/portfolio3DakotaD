
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
    $('show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $("#show").show('fold', {}, 2500);
}

function showThepage(){
    $('div').show('fold', {}, 2500);
    $('show').show('puff', {}, 2500);
    
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</P>');
}
function replaceWtext(){
 
    $('#replaceWtext').text("<h1> hi my name is bob</h1>");
 
}
function mouseOutMe(){

 
    ('h1').html("I am the best");
  }
  
  function mouseOverMe(){
      
      $('p').html('My Clash of clans base is the best');
  }

