$(document).ready(function(){
//fade out
    $('#btn').click(function(){
      $('#head1').fadeOut(2000)
     })
//fade in
     $('#btn1').click(function(){
        $('#head1').fadeIn(2000)
       })
//fade toggle
       $('#btn2').click(function(){
        $('#head1').fadeToggle(2000)
       })
//slide up 
       $('#slide').click(function(){
        $('#para').slideUp(2000)
       })

     //slide down first
       $('#sldown').click(function(){
        $('#para').slideDown(2000)
       })
   //slide up and down toggle
       $('#slud').click(function(){
         $('#para').slideToggle(2000)
       })

    //slide down second
    $('#idd').click(function(){
        $('#paa').slideDown(2000)
   })
})