const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    /* const countriesDiv = document.getElementById('countries');
    FOR LOOP
    for (const country of countries) {
        console.log(country);
    } */

    //FOREACH
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        // const h3 = document.createElement('h3');
        // const p = document.createElement('p');
        // h3.innerText = country.name;
        // p.innerText = country.capital;
        // div.appendChild(h3);
        // div.appendChild(p)
        // countriesDiv.appendChild(div, p);
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <h4>Name : ${country.name}</h5>
    <p>Capital : ${country.capital}</p>
    <img width="200px" src="${country.flag}">
    `;
}