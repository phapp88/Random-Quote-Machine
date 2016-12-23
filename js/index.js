$(document).ready(function() {
  function getQuote() {
    var r =  Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var twitterUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="';
    var fadeTime = 600;
    $(".target1").animate({backgroundColor: "rgb(" + [r, g, b].join(',') + ")"}, fadeTime);
    $(".target2").animate({color: "rgb(" + [r, g, b].join(',') + ")"}, fadeTime);
    $.ajax({
      url: "http://quotes.stormconsultancy.co.uk/quotes/random.json",
      dataType: "jsonp",
      success: function(result) {
        $("#quote").hide().html('"' + result.quote).fadeIn(fadeTime);
        $("#author").hide().html('- ' + result.author).fadeIn(fadeTime);
        twitterUrl += result.quote + '" ' + result.author;
        $("#twitter").attr("href", twitterUrl);
      }
    });
  }
  getQuote();
  $('#newQuote').on('click', getQuote);
});