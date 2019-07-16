// alert("connected");
$("ul").on("click","li",function(){
    $(this).toggleClass("selected");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); //to stop the line-through operation and color change
});

$('input[type="text"]').keypress(function(event){
    if(event.which=== 13){
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+$(this).val()+"</li>");
        $(this).val("");
    }
});

$(".fa-edit").click(function(){
    $('input[type="text"]').fadeToggle();
});