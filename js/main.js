$(document).ready(function(){
  let requestURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
  requestRandomQoute();

  $(".btn-newquote").click(function(){
    requestRandomQoute();
  });

  function requestRandomQoute() {
    $.getJSON(requestURL, function(data) {
      animateText("#quote-text", data.quoteText);
      animateText("#quote-name", data.quoteAuthor);
      animateText("#quote-symbol", "");
    });
  }

  function animateText(element, content) {
    $(element).animate({opacity: 0}, 500, function() {
      $(this).animate({opacity: 1}, 500);
      if(content != "") $(this).text(content);
    });
  }
});
