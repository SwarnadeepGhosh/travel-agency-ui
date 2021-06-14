$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
      $('header').addClass('header-active');
    }else{
      $('header').removeClass('header-active');
    }

    $('section').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 200;
      var top = $(window).scrollTop();
      if(top >= offset && top < offset + height){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });

  });


});

function openpop() {
  $("#popmessg").slideToggle(500);
  $(".transprntbgpop").show();

}

function closetrnsblc() {
  $("#popmessg").slideToggle(500);
  $(".transprntbgpop").hide();

}

$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});

$(document).ready(function () {


  $('#saveCategories').click(function () {
    $(".input_fields_wrap").each(function () {
      var sum = 0;
      var kids = 0;
      $(this).find('span').each(function () {
        sum += +$(this).find('.useronename').val();
        kids += +$(this).find('.useronephone').val();

      })
      var totaloffqty = $('#totaloffqty').val();
      $('#actualresult').val('Rooms:' + totaloffqty + ', Adults:' + sum + ', Child:' + kids);
    })
  });



  $('#patbbtn').trigger('click');


  var max_fields = 10; //maximum input boxes allowed
  var wrapper = $(".input_fields_wrap"); //Fields wrapper
  var add_button = $(".add_field_button"); //Add button ID


  //var addingprice = 0;
  var x = 1; //initlal text box count
  $(add_button).click(function (e) { //on add input button click
    //alert(offerqty);
    var offerqty = $('#totaloffqty').val();
    $('#totaloffqty').val(parseFloat(offerqty) + parseFloat(1));

    e.preventDefault();
    if (x < max_fields) { //max input box allowed
      x++; //text box increment
      $(wrapper).append('<span><select class="form-control useronename"><option value="">-- Adult --</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select><select  class="form-control useronephone" ><option value="">-- Child --</option><option value="0">0</option><option value="1">1</option><option value="2">2</option></select><a href="javascript:void();" class="remove_field rmvbtn"><i class="far fa-times-circle"></i></a><div class="clearfix"></div></span>'); //add input box
    }
  });

  $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    var offerqty = $('#totaloffqty').val();
    $('#totaloffqty').val(parseFloat(offerqty) - parseFloat(1));

    e.preventDefault(); $(this).parent('span').remove(); x--;
  })


});

$(document).ready(function() {
  $('li.active').removeClass('active');
  $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
});


/********************* Search block in hotel starts *****************************************************/
flatpickr(".datepicker",
      {});

      const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      });