$(document).ready(function() {

  //Selecciona todas las etiquetas 'a' con el name que corresponda
  $('a[name=infomoron]').click(function(e) {

    e.preventDefault();
    var id = $(this).attr('href');

    //Guarda en variables la anchura de la ventana y altura del documento para la "mask"
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    //Realiza en CSS una pantalla negra
    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });

    //Efecto de transición del fondo oscuro
    $('#mask').fadeIn(100);
    $('#mask').fadeTo("slow", 0.8);

    //Guarda la anchura y la altura de la ventana donde se este viendo
    var winH = $(window).height();
    var winW = $(window).width();

    //Coloca en CSS la posicion de la ventana POP-UP en el centro del documento
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);

    //Efecto de transición de la ventana POP-UP
    $(id).fadeIn(850);

  });

  //Si el botón CERRAR se presiona
  $('.window .close').click(function(e) {
    e.preventDefault();

    $('#mask').hide();
    $('.window').hide();
  });

  //Si el fondo oscuro se presiona
  $('#mask').click(function() {
    $(this).hide();
    $('.window').hide();
  });

  $(window).resize(function() {

    var box = $('#boxes .window');

    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });

    var winH = $(window).height();
    var winW = $(window).width();

    box.css('top', winH / 2 - box.height() / 2);
    box.css('left', winW / 2 - box.width() / 2);

  });



  $('a[name=modal]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');

    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });

    $('#mask').fadeIn(100);
    $('#mask').fadeTo("slow", 0.8);

    var winH = $(window).height();
    var winW = $(window).width();

    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);

    $(id).fadeIn(850);

  });

  $('.window .close').click(function(e) {
    e.preventDefault();

    $('#mask').hide();
    $('.window').hide();
  });

  $('#mask').click(function() {
    $(this).hide();
    $('.window').hide();
  });

  $(window).resize(function() {

    var box = $('#boxes .window');

    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });

    var winH = $(window).height();
    var winW = $(window).width();

    box.css('top', winH / 2 - box.height() / 2);
    box.css('left', winW / 2 - box.width() / 2);

  });
});
