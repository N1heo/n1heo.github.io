// function loadData() {  
// 	fetch('https://api.waifu.im/random/')
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data); 
// 		document.getElementById("data").innerHTML = data.message;
// 		document.getElementById("image").src = data.source;
//         console.log(data.source)
// 	});
// 	}

function loadData() {  
    fetch('https://nekos.best/api/v2/waifu')
    .then(response => response.json())
    .then(json => {
		document.getElementById("image").src = json.results[0].url;
    })
    
}

function loadPage() {
    $("#background").animate({}, 800, function() {
        $("#clickbtn").animate({height: "200px", width: "200px"}, 850, function() {
        $("#clickbtn").animate({fontSize: "30px"}, 850, function() {
        $("#score").animate({fontSize: "25px"}, 850, function() {
        })
        })
        })
    })
    }

function loadAll(){
    loadPage();
    loadData();
}