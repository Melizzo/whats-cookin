let user;

const loadUser = () => {
  let randomNumber = Math.floor((Math.random() * 49));
  user = new User(usersData[randomNumber].name, usersData[randomNumber].id, usersData[randomNumber].pantry);
  const welcomeMessage = document.querySelector('.welcome-message');
  welcomeMessage.innerHTML = `Welcome ${user.name}!`;
  console.log(user);
  return user;
}

window.onload = loadUser()
