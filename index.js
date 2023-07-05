function showCountries() {
    let xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open("GET", `https://restcountries.net/v3.1/all`, true);

    xhr.onload = function() {
        if(xhr.status == 200) {
            console.log("Success");
            let countries = JSON.parse(this.response);
            console.log(countries);
            // const countryWithMapCard = document.createElement("div");
            // countryWithMapCard.style.width = "auto";
            // countryWithMapCard.style.height = "auto";
            // countryWithMapCard.style.backgroundColor = "teal";
            // countryWithMapCard.style.border = "1px solid black";
            // countryWithMapCard.style.color = "white";
            // countryWithMapCard.style.textAlign = "center";
            // countryWithMapCard.style.padding = "15px";
            // countryWithMapCard.innerHTML = `${countries[0].name.common}; <div><iframe width="600px" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${countries[0].maps.googleMaps}"><a href="http://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>`;
            // document.getElementById("feed").appendChild(countryWithMapCard);


            countries.forEach(country => {
                // let commons = [];
                // this.commons.push(country.name.common);
                // console.log(country.name.common);
                const countryCard = document.createElement("div");
                // const countryName = document.createElement("div");
                // const countryCapital = document.createElement("div");
                countryCard.style.width = "auto";
                countryCard.style.height = "auto";
                countryCard.style.backgroundColor = "teal";
                countryCard.style.border = "1px solid black";
                countryCard.style.color = "white";
                countryCard.style.textAlign = "center";
                countryCard.style.padding = "15px"
                // document.getElementsByTagName("div").style.width("200px").style.height("500px");
                countryCard.innerHTML = `<img style="width:200px; height:150px" src="${country.flags.png}"> <br><br> Country: ${country.name.common}; <br><br> Capital: ${country.capital}; <br><br> Continent: ${country.continents}; <br><br> Population: ${country.population}; <br><br> Language: ${country.languages}; <br><br> Emblem: <br> <img style="border:1px solid black; border-radius: 50%; width:50px; height:50px" src="${country.coatOfArms.png}">`;
                document.getElementById("feed").appendChild(countryCard);
                // document.getElementsByName("countryCard").appendChild(countryName);
                // document.getElementsByName("countryCard").appendChild(countryCapital);
                document.getElementById("feed").style = "display: flex; flex-direction: row; gap: 2px; flex-wrap: wrap;";

            })
        }
    }

    xhr.send();
}