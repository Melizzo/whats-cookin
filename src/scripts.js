let user;
let recipesContainer = document.querySelector('.recipes-container');
let searchbar = document.querySelector('#searchbar');

const loadUser = () => {
  let randomNumber = Math.floor((Math.random() * 49));
  user = new User(usersData[randomNumber].name, usersData[randomNumber].id, usersData[randomNumber].pantry);
  const welcomeMessage = document.querySelector('.welcome-message');
  welcomeMessage.innerHTML = `Welcome ${user.name}!`;
  return user;
}

const displayRecipes = (recipeArray) => {
  recipeArray.map(recipe => {
    recipesContainer.innerHTML += `
    <div class="recipe-card">
      <section class="recipe-title-container">
        <h4 class="recipe-title">${recipe.name}</h4>
      </section>
      <section class="recipe-image-container">
        <img class="recipe-image" src="${recipe.image}" />
      </section>
      <section class="recipe-buttons">
        <button class="recipe-button fav"><img data-id="${recipe.id}" class="empty-heart filled-heart" src="assets/unfavorited.svg" alt="unfilled in heart"></button>
        <button class="recipe-button cook"><img data-id="${recipe.id}" class="toCook not-to-cook" src="assets/not_added_to_cook.svg" alt="unfilled in silverware"></button>
        </section>
        </div>`
  })
}

const load = () => {
  loadUser();
  displayRecipes(recipeData);
}

searchbar.addEventListener('keyup', searchAllRecipes);
recipesContainer.addEventListener('click', function() {
  addToFavorites(event)
  // addToMealsToCook(event)
})

function addToFavorites(event) {
  let recipeCard = event.target.dataset.id
  const currentRecipe = recipeData.find(recipe => recipe.id == recipeCard)
  user.toggleFavoriteRecipe(currentRecipe)
  toggleFavIcon(currentRecipe.isFavorited, recipeCard)
}

function toggleFavIcon(isFavorited, recipeCard) {
  if (isFavorited === true) {
    const photo = document.querySelector(`.empty-heart[data-id="${recipeCard}"]`)
    photo.src = "assets/favorited.svg"
  } else {
    const photo = document.querySelector(`.filled-heart[data-id="${recipeCard}"]`)
    photo.src = "assets/unfavorited.svg"
  }
}

// Ran out of time - wanted to target the other btn specifically.
//
// function addToMealsToCook(event) {
//   let recipeCard = event.target.dataset.id
//   console.log(event.target.dataset.id)
//   const currentRecipe = recipeData.find(recipe => recipe.id == recipeCard)
//   if (event.target.classList.contains("toCook")) {
//     user.toggleRecipeToCook(currentRecipe)
//     toggleRecipeIcon(currentRecipe.isSaved, recipeCard)
//   }
// }
//
// function toggleRecipeIcon(isSaved, recipeCard) {
//   if (isSaved === true) {
//     const photo = document.querySelector(`.toCook[data-id="${recipeCard}"]`)
//     photo.src = "assets/added_to_cook.svg"
//   } else {
//     const photo = document.querySelector(`.not-to-cook[data-id="${recipeCard}"]`)
//     photo.src = "assets/not_added_to_cook.svg"
//   }
// }

window.onload = load();

function searchAllRecipes() {
  let searchInput = searchbar.value
  let searchId;
  ingredientsData.forEach(ingredient => {
    if (ingredient.name === searchInput) {
      searchId = ingredient.id
    }
  })
  const matchedSearchRecipe = recipeData.filter(recipe => {
    let match = false;
    recipe.ingredients.forEach(recipeIngredient => {
      if (recipeIngredient.id === searchId) {
        match = true;
      }
    })
    if (match === true) {
      return recipe
    }
  })
  if (matchedSearchRecipe.length > 0) {
    recipesContainer.innerHTML = ''
    displayRecipes(matchedSearchRecipe)
  } else {
    recipesContainer.innerHTML = ''
    displayRecipes(recipeData)
  }
}
