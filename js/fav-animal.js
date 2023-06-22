function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
  }

  function callFavAnimal() {
   let favAnimal = prompt("What is your favourite animal?");
      if (favAnimal === '') {
          alert(`Please try again`);
          let favAnimal = prompt("What is your favourite animal?");   
      }
   console.log(favoriteAnimal(`${favAnimal}`));
   alert(favoriteAnimal(`${favAnimal}`));
  }
  
  const button = document.querySelector("button");
  button.addEventListener("click", callFavAnimal);