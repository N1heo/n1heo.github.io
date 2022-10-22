var score = 0;

function clickBtn() {
  score++;
  console.log(score);
  document.getElementsByClassName("score_text_js")[0].firstChild.data = "Clicks: " + score;
//   document.getElementById("score")[0].firstChild.data = "Clicks: " + score;

}

function loadPage() {
  $("#background").animate({}, 800, function() {
    $("#clickbtn").animate({height: "250px", width: "250px"}, 850, function() {
      $("#clickbtn").animate({fontSize: "45px"}, 850, function() {
      $("#score").animate({fontSize: "40px"}, 850, function() {
      })
      })
    })
  })
}