var gem01 = Math.floor(Math.random() * 10 + 1);
var gem02 = Math.floor(Math.random() * 10 + 1);
var gem03 = Math.floor(Math.random() * 10 + 1);
var gem04 = Math.floor(Math.random() * 10 + 1);

var wins = 0;
var losses = 0;
var sumScore = 0;
var targetScore = Math.floor(Math.random() * 10 + 1);



$('#targetScore').each(function() {
    var targetScore = Math.floor(Math.random() * 120 + 1);
    $(this).text(targetScore);
    
});




var sumScore = 0;
$('#gem01').click(function(){

   targetScore = Number(gem01) + Number($(this).val());
    $('#sumScore').text(" " + gem01); 
    console.log(targetScore);       
});

$('#gem02').click(function(){

   targetScore = Number(gem02) + Number($(this).val());
    $('#sumScore').text(" " + gem02); 
    console.log(targetScore);       
});

$('#gem03').click(function(){

   targetScore = Number(gem03) + Number($(this).val());
    $('#sumScore').text(" " + gem03); 
    console.log(targetScore);       
});

$('#gem04').click(function(){

   targetScore = Number(gem04) + Number($(this).val());
    $('#sumScore').text(" " + gem04); 
    console.log(targetScore);       
});
















