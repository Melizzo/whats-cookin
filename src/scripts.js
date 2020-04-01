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
        <button class="recipe-button fav"><img src="assets/unfavorited.svg" alt="unfilled in heart"></button>
        <button class="recipe-button cook"><img src="assets/not_added_to_cook.svg" alt="unfilled in silverware"></button>
      </section>
    </div>`


  })
}

const load = () => {
  loadUser();
  displayRecipes();
}

const addToFavorites = (e) => {
  console.log(e.target)
  // if (e.target.closest('.recipe-button'))
  // e.target === recipe-button
  //closest section with buttons (traverse up and then back down). closest recipe buttons class and then back down
}

recipesContainer.addEventListener('click', addToFavorites)






window.onload = load();
