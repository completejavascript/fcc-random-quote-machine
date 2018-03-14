$(document).ready(function(){
  let requestURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
  requestRandomQoute();

  $(".btn-newquote").click(function(){
    requestRandomQoute();
  });

  function requestRandomQoute() {
    $.getJSON(requestURL, function(data) {
      $("#qoute-text").text(data.quoteText);
      $("#qoute-name").text(data.quoteAuthor);
    });
  }
});
