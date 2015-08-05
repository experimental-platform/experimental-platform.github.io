$(function() {
  $(".tech-chooser li").click(function(event) {
    $(".tech-chooser li").removeClass("selected");
    $(event.currentTarget).addClass("selected");
    $(".tech-section").removeClass("selected");
    var lang = $(event.currentTarget).data("lang");
    $(".tech-" + lang).addClass("selected");
  });
  
  function nextInGallery() {
    var $current = $(".gallery figure:visible");
    var $next = $current.next("figure");
    
    if (!$next.length) {
      $next = $current.parent().children("figure").first();
    }
    $current.removeClass("selected");
    $next.addClass("selected").css("display", "none").fadeIn();
    return false;
  }

  function previousInGallery() {
    var $current = $(".gallery figure:visible");
    var $previous = $current.prev("figure");
    if (!$previous.length) {
      $previous = $current.parent().children("figure").last();
    }
    $current.removeClass("selected");
    $previous.addClass("selected").css("display", "none").fadeIn();
    return false;
  }

  $(".gallery .next").click(nextInGallery);
  $(".gallery .previous").click(previousInGallery);
  $(".gallery img").click(nextInGallery);
});