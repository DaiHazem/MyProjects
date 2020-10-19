$("document").ready(function(){
    
$("ul").on('mouseenter','li',function(){
    $(this).children(".trash").addClass("show");
});
$("ul").on('mouseleave','li',function(){
    $(this).children(".trash").removeClass("show");
});









/*$("ul").on('click','span:not(.finished)',function(evt){
var txt=$(this).parent().html();

$(this).parent().addClass("undo").html("UNDO <span class='trash'><i class='fas fa-trash-alt'></i></span> "
);
$(".undo").on('click',function(){
    isFinished=false;

    $(this).removeClass("undo").html(txt);
    
});

setTimeout(function(){
    $('.undo').remove();

},3000);

evt.stopPropagation();
  
});
        

$("ul").on('click','li',function(){





    if(isFinished){
    $(this).fadeTo(1000,0.4,function(){
        $(this).addClass("done");
        
        $(this).children(".finished").addClass("show");

    });
}else{
    isFinished=true;
}


});*/

var content;
//var theVar;


$('ul').on('click','.trash',function(evt){
    content=$(this).parent().html();
    $(this).parent().html('<span id="chance">UNDO</span>/<span id="suredelete">DELETE</span>');
    
   //theVar=setTimeout(function(){
     //   $(this).parent().remove();
    
   // },3000);
    
    
    evt.stopPropagation();
    
$('ul').on('click',"#chance",function(event){
    //clearTimeout(theVar);


    $(this).parent().html(content);
    event.stopPropagation();

});

$('ul').on('click','#suredelete',function(e){
$(this).parent().remove();
e.stopPropagation();
});

});


$("ul").on('click','li',function(){
    $(this).fadeTo(1000,0.4,function(){
       // $(this).addClass("done");
        
        $(this).children(".finished").addClass("show");
});
});





    $("#one").on('click',function(){
        $("input").slideToggle("slow");
    });
    
    $("input").on("keypress",function(event){
        if($(this).val()==="  "){
            $(this).val("");
        }
         if(event.which===13 & $(this).val()!==" " & $(this).val()!==''){ 
            var newitem= $(this).val();
             $(this).val("");          
           $("ul").append("<li><span class='trash'><i class='fas fa-trash-alt'></i></span> "+ newitem +" <span class='finished'><i class='fas fa-check-square'></i></span></li>");
         }
        });
    });


