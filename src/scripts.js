let user;
let recipesContainer = document.querySelector('.recipes-container');

const loadUser = () => {
  let randomNumber = Math.floor((Math.random() * 49));
  user = new User(usersData[randomNumber].name, usersData[randomNumber].id, usersData[randomNumber].pantry);
  const welcomeMessage = document.querySelector('.welcome-message');
  welcomeMessage.innerHTML = `Welcome ${user.name}!`;
  console.log(user);
  return user;
}

const displayRecipes = () => {
  recipeData.map(recipe => {
    recipesContainer.innerHTML += `
    <div class="recipe-card">
      <section class="recipe-title-container">
        <h4 class="recipe-title">${recipe.name}</h4>
      </section>
      <section class="recipe-image-container">
        <img class="recipe-image" src="${recipe.image}" />
      </section>
      <section class="recipe-buttons">
        <button data-id="${recipe.id}" "class="recipe-button fav"><img data-id="${recipe.id}" class="empty-heart filled-heart" src="assets/unfavorited.svg" alt="unfilled in heart"></button>
        <button class="recipe-button cook"><img data-id="${recipe.id}" class="toCook" src="assets/not_added_to_cook.svg" alt="unfilled in silverware"></button>
        </section>
        </div>`    
      })
     
    }
    
const load = () => {
  loadUser();
  displayRecipes();
}

// const addToFavorites = (e) => {
//   console.log(e.target)
  // if (e.target.closest('.recipe-button'))
  // e.target === recipe-button
  //closest section with buttons (traverse up and then back down). closest recipe buttons class and then back down
  // }

recipesContainer.addEventListener('click', addToFavorites)
  
function addToFavorites(event) {
  let recipeCard = event.target.dataset.id
  const currentRecipe = recipeData.find(recipe => recipe.id == recipeCard)
  console.log('before', user.favoriteRecipes)
  user.toggleFavoriteRecipe(currentRecipe)
  console.log('after', user.favoriteRecipes)
  addUnfavoritedIcon(recipeCard)
  recipeData.forEach(recipe => {
    user.favoriteRecipes.forEach(favRecipe => {
      if(recipe.id = favRecipe.id) {
        addFavedIcon(recipeCard)
      }
      
    });

  })
}

function addFavedIcon(recipeCard) {
  const photo = document.querySelector(`.empty-heart[data-id="${recipeCard}"]`)
  photo.src="assets/favorited.svg"
}  

function addUnfavoritedIcon(recipeCard) {
  const photo = document.querySelector(`.filled-heart[data-id="${recipeCard}"]`)
  photo.src="assets/unfavorited.svg"
}
// recipesContainer.addEventListener('click', removeFromFavorites)

// function removeFromFavorites(event) {
//   let recipeCard = event.target.dataset.id
//   const currentRecipe = recipeData.find(recipe => recipe.id == recipeCard)
//   user.toggleFavoriteRecipe(currentRecipe)
//   addUnfavoritedIcon(recipeCard)
//   // addFavedIcon(recipeCard)
//   // if(user.favoriteRecipes.includes(recipeCard)) {
//   // } 
// }


window.onload = load();
