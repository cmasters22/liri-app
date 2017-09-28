
	
	var twitter = require("twitter");
	var Spotify = require("node-spotify-api");
	var request = require('request');
	var fs = require("fs");

	var nodeArg = process.argv[2];

	for (var i=3; i < process.argv.length; i++){
			var nodeArg2 = process.argv[i] + " ";
     }
	//nodeArg2 = nodeArg2.split(" ");

	var tkey = 	"wOI8wPO1OXrRScQzeTRA8JdIm";
	var tsecret  = "W4XKO9hkEZKiOqXY1DSVJ1tyTL9fheICPFLS43CAitUCem3API";
	var taccessKey = "350698858-MpNvBVQO6m4YfoY08WAHvYxESS79xm70QCoJ9Pmk";
	var ttokenSecret = "IhgvnX1d6D3qqwVYbbzoPy6ItKfpcrIv45g0qkYr0QZE4";

	var client = new twitter({
	  consumer_key: tkey,
	  consumer_secret: tsecret,
	  access_token_key: taccessKey,
	  access_token_secret: ttokenSecret
   });

	var spotify = new Spotify ({
		id: "261eb375ed174dcd8372d7049859660a",
		secret: "c6b1d8beb0f14345940c66ff45c34e89"
	})
	

	module.exports = client;
if(nodeArg === "my-tweets"){
	var params = {screen_name: 'cumorahm', count: 20};
	client.get('statuses/user_timeline', params, function(error, data, tweets){
		if (error){
			return console.log(error);
	    }
	    
	    fs.appendFile("random.txt", "\n");
	    fs.appendFile('random.txt', nodeArg + "\n");
	    for (var i = 0; i < data.length; i++) {
	    	console.log("Tweets: " + data[i].text);
	    	fs.appendFile('random.txt', data[i].text + "\n");
	    }
	});
	}

else if(nodeArg==="spotify-this-song"){
	
	var search = 'The Sign';
	if (nodeArg2 !== undefined){
	    search = nodeArg2;
	}	
	
	spotify.search({ type: "track", query: search}, function(err, data){

	if (err){
		return console.log(err);
	}
	
	console.log("Album name: " + data.tracks.items[0].album.name);
	console.log("Song name: " + data.tracks.items[0].name);
	console.log("Artists name: " + data.tracks.items[0].artists[0].name);
	console.log("Preview Link: " + data.tracks.items[0].href);

	fs.appendFile("random.txt", "\n");
	fs.appendFile("random.txt", nodeArg + "\n");
	fs.appendFile("random.txt", "Album Name: " + data.tracks.items[0].album.name + "\n");
	fs.appendFile("random.txt", "Song name: " + data.tracks.items[0].name + "\n");
	fs.appendFile("random.txt", "Artists name: " + data.tracks.items[0].artists[0].name + "\n");
	fs.appendFile("random.txt", "Preview Link: " + data.tracks.items[0].href + "\n");


	});	
	
	
}
else if(nodeArg=== "movie-this"){ 

	var search2 = "Mr. Nobody";
	if (nodeArg2 !== undefined){
	    search2 = nodeArg2;
	}	
    request("http://www.omdbapi.com/?t=" + search2 + "&y=&plot=short&tomatoes=true&r=json&apikey=40e9cece", function (error, response, body, data) {
        
        if (error){
        console.log('error:', error); // Print the error if one occurred
  	    }

  	    var json = JSON.parse(body);
  		console.log("Movie Title: " + json.Title);
  		console.log("Year: " + json.Year);
  		console.log("Rated: " + json.Rated);
  		console.log("Rotten Tomatoes Rating: " + json.tomatoRating);
  		console.log("Country: " + json.Country);
  		console.log("Language: " + json.Language);
  		console.log("Plot: " + json.Plot);
  		console.log("Actors: " + json.Actors);

  		fs.appendFile("random.txt", "\n");
  		fs.appendFile('random.txt', nodeArg + "\n"); // Print the HTML for the OMDB homepage.
  		fs.appendFile('random.txt', "Movie Title: " + json.Title + "\n");
  		fs.appendFile('random.txt', "Year: " + json.Year + "\n");
  		fs.appendFile('random.txt', "Rated: " + json.Rated + "\n");
  		fs.appendFile('random.txt', "Rotten Tomatoes Rating: " + json.tomatoRating + "\n");
  		fs.appendFile('random.txt', "Country: " + json.Country + "\n");
  		fs.appendFile('random.txt', "Language: " + json.Language + "\n");
  		fs.appendFile('random.txt', "Plot: " + json.Plot + "\n");
  		fs.appendFile('random.txt', "Actors: " + json.Actors + "\n");
  		
	});
		
} 
else
		console.log("Wrong!");

