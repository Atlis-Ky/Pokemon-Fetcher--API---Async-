async function fetchData() {
  const errorElement = document.getElementById("error");
  const successMessageElement = document.getElementById("successMessage");
  const imgElement = document.getElementById("pokemonSprite");


  errorElement.style.display = "none";
  successMessageElement.style.display = "none";
  imgElement.style.display = "none";

  try {
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

      if (!response.ok) {
          throw new Error("Pokemon not found");
      }

      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;


      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";

     
      const capitalizedPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

      
      successMessageElement.textContent = `Gotcha! ${capitalizedPokemonName} was caught!`;
      successMessageElement.style.display = "block";

  } catch (error) {
      console.error(error);

  
      errorElement.textContent = error.message;
      errorElement.style.display = "block";
  }
}