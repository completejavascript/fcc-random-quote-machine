$(document).ready(function(){
  let requestURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

  updateShares();
  requestRandomQoute();

  $(".btn-newquote").click(function(){
    requestRandomQoute();
  });

  function updateShares(qoute, author) {
    let currentQuote = qoute || $("#quote-text").text();
    let currentAuthor = author || $("#quote-name").text();

    let twitterShareURL = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + 
                            encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
    $("#share-twitter").attr("href", twitterShareURL);

    let tumblrShareURL = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + 
                            encodeURIComponent(currentAuthor) + '&content=' + 
                            encodeURIComponent(currentQuote) + 
                            '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
    $("#share-tumblr").attr("href", tumblrShareURL);
  }

  function requestRandomQoute() {
    $.getJSON(requestURL, function(data) {
      animateText("#quote-text", data.quoteText);
      animateText("#quote-name", '-- ' + data.quoteAuthor);
      animateText("#quote-symbol");
      updateShares(data.quoteText, data.quoteAuthor);
    });
  }

  function animateText(element, content) {
    $(element).animate({opacity: 0}, 500, function() {
      $(this).animate({opacity: 1}, 500);
      if(content) $(this).text(content);
    });
  }
});
