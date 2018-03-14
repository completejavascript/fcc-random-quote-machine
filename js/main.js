$(document).ready(function(){
  let requestRandomQoute = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

  $(".btn-newquote").click(function(){
    $.getJSON(requestRandomQoute, function(data) {
      $("#qoute-text").text(data.quoteText);
      $("#qoute-name").text(data.quoteAuthor);
    });
  });
});
