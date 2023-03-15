const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=[API-KEY]&location=-33.8670522,151.1957362&radius=5000&type=restaurant&pagetoken=CqQCFQEAAKQ48fsO4kjIu"
    ;

fetch(URL).then(data => {
    return data.json()
}).then(jsonData => {
    console.log(jsonData.results)
}).catch(error => {
    console.log(error);
}) 
