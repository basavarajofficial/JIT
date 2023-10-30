
function gallary(){
    
    fetch('data.json')  // fetch keyword used to fetch data from api's or json files
    .then(res => res.json()) // then methods to access the response which we get in json format
    .then(data => {  
        let allData = data.Data;

        console.log(allData);

        let cards = ""; // it will be empty string initially

        allData?.forEach((element) => { // element is iterating over each data in which we storing data in allData variable, so element will be holding each element value from data.
            // now we will add store each data in cards variable by usning forEach method
            cards += `
            <div class="images">
            <h1>${element.name}</h1>
                <img src=${element.url} alt="">
            </div>
            `
        })
        // once we finish functionality inside forEach, we need to render data inside html by using DOM
        document.getElementById("main").innerHTML = cards;
    })  
}

gallary();
