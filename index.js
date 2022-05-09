$(document).ready(function(){
var number=120;
var intervalid;
var correct=0;
var incorrect=0;
var unanswered=0;
alert("Zehmet olmasa Start duymesini basin!")
function run(){
     intervalid=setInterval(f1,1000)
    }
     $(window).on("load", hide);
 $('#start').on('click', function(){
  $(this).hide();
    show();
    run();
});

$('#done').on('click', function(){
    $('#start').hide();
    hide();
    f2();
    stop();
});
function f2(){
        var alldone = $('<h2>').html('All Done!');
        var canswers = $('<p>').html('Correct answers: ' +  correct);
        var wanswers = $('<p>').html('Incorrect answers: ' + incorrect);
        var cunanswered = $('<p>').html('Unanswered: ' + unanswered);
        var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
        newclass.append(alldone);
        newclass.append(canswers);
        newclass.append(wanswers);
        newclass.append(cunanswered); 
        $('.row:nth(2)').append(newclass);
    }
function f1(){
 number--;
    $("#timer").html(" " + number + " seconds");
    if (number === 1) {
        $("#timer").html(" " + number + " second");
    }
    else if (number === 0) {
        
        $('#start').hide();
        hide();
     f2();
        stop();
    }
}
function stop() {
    clearInterval(intervalid);
}

function hide(){
    $('.form-group').hide();
    $('#time').hide();
    $('#done').hide();
   
}

function show() {
    
    $('.form-group').show();
    $('#time').show();
    $('#done').show();
}
$('input[type=radio]').on("change", function() {
    correct =  $('input[value=goodanswer]:checked').length;
    incorrect = $('input[value=wrong]:checked').length;
    unanswered = (8-(correct + incorrect));
 });
 
});