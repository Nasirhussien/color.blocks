var redCount = 0
var yellowCount = 0
var greenCount = 0 
var blueCount = 0

$( document ).ready(function() {

    $('#redButton').click(function(){
        $('#blockDiv').append("<div class ='redbox'> </div>")
        $('#redCounter').html("<p = '#redCounter'> Red Counter: " + redCount + "</p>");
        redCount++

    })
    $('#yellowButton').click(function(){
        
        $('#blockDiv').append("<div class ='yellowbox'> </div>")
        $('#yellowCounter').html("<p = '#yellowCounter'> Yellow Counter: " + yellowCount + "</p>");
        yellowCount++

    })

    $('#greenButton').click(function(){ 
        $('#blockDiv').append("<div class ='greenbox'></div>")
        $('#greenCounter').html("<p = '#greenCounter'> Green Counter: " + greenCount + "</p>");
        greenCount++

    
    console.log( "jquery!" );

    
})

$('#blueButton').click(function(){ 
    $('#blockDiv').append("<div class ='bluebox'></div>")

    $('#blueCounter').html("<p = '#yellowwCounter'> Blue Counter: " + blueCount + "</p>");
    blueCount++

})


})
