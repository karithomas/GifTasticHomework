$("button").on("click", function(){
    var x= $(this).data("name");
    console.log(x);
    var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=jJpxREKFGNaVmCpQ6zR7Zm20ODVVzoCO&limit=10";
    $.ajax({url: queryURL, 
        method: "GET"}).done(function(response){
        console.log(response);
        for(var i = 0; i < response.data.length; i++){
            var nameDiv= $("<div>");
            var p= $("<p>").text("Rating: " + response.data[i].rating);
            var nameImage= $("<img>");
            nameImage.attr("src", response.data[i].images.fixed_height.url);
            nameDiv.prepend(p);
            nameDiv.prepend(nameImage);
            $("#gifsHere").prepend(nameDiv);
        }
    });
});