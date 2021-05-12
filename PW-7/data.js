getUserName = document.querySelector(".userName");
getUserAge = document.querySelector(".userAge");
getButton = document.querySelector(".submit");

getButton.addEventListener('click', function(){
  getNameDisplay = document.querySelector(".displayName");
  getAgeDisplay = document.querySelector(".displayAge");

  getNameDisplay.innerHTML = getUserName.value;
  getAgeDisplay.innerHTML = getUserAge.value;
})
