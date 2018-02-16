$(document).ready(function() {

  //traer elementos del HTML
  var $exampleFormControlTextarea1 = $('#exampleFormControlTextarea1');
  var $commentPreview = $("#comment-preview");
  var $sendButton = $("#send-button");
  var $changeSizeLarge = $("#change-size-large");
  var $changeSizeMedium = $("#change-size-medium");
  var $changeSizeSmall = $("#change-size-small");
  var $changeAlignLeft = $("#change-align-left");
  var $changeAlignMiddle = $("#change-align-middle");
  var $changeAlignRight = $("#change-align-right");
  var $changeTextColor = $("#change-text-color");
  var $changeBackgroundColor = $("#change-background-color");

  //funcion que pinta lo que escribo en el textarea
  $exampleFormControlTextarea1.on("keyup", function() {
    $commentPreview.text($exampleFormControlTextarea1.val());
  });

  //funcion que da estilos segun el boton seleccionado
  $changeSizeLarge.on("click", function() {
  	       $("#comment-preview").css("fontSize","33px");
  });

  $changeSizeMedium.on("click", function() {
        	  $("#comment-preview").css("fontSize","28px");
  });

  $changeSizeSmall.on("click", function() {
        	  $("#comment-preview").css("fontSize","23px");
  });
});
