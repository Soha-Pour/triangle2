$(document).ready(function() {
  $("form#compare").submit(function (event) {

    var AA = parseInt($("#A").val());
    var BB = parseInt($("#B").val());
    var CC = parseInt($("#C").val());

  if (AA + BB <= CC || BB + CC <= AA || AA + CC <= BB) {
    $("#not").show();
  } else if (AA === BB && AA === CC) {
    $("#equ").show();
  } else if (AA !== BB && AA !== CC) {
    $("#sca").show();
  } else {
    $("#iso").show();
  }

  event.preventDefault();
  console.log()
  });
});
