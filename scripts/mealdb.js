const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    //clear data
    searchField.value = '';

    // home page er search button click korle onek gullo product show kore. oi gulo je na show kore tar jonno code koro. jeno button e click korle show kore "write something to display"
    /* if( searchText == ''){
       // Please right something to the display
   }
   else{

   } 
   */

    //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    //clear data
    // searchResult.innerHTML = '';    //Maximum People do not recommand this 2 methods
    searchResult.textContent = '';

    /* if( meals.length == 0){
        // show no result found. its a homework
    } */


    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}
{/* <a onclick="mealDetail()" class="btn btn-primary">View Details</a> */ }
const loadMealDetails = mealId => {
    // console.log(mealId);
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    fetch(url)
        .then(res => res.json())
        .then(data => mealDetail(data.meals[0]))
}

const mealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-detals');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <div class="card-body">
            <img width="200px", src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Watch Now</a>
        </div>
    `;
    mealDetails.appendChild(div);
}

