// API key pública de prueba (temporal)
const apiKey = "4a3b711b";

function buscarPelicula() {
  const query = document.getElementById("searchInput").value;
  const results = document.getElementById("results");
  results.innerHTML = "Cargando...";

  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "True") {
        results.innerHTML = "";
        data.Search.forEach(pelicula => {
          const movieHTML = `
            <div class="movie">
              <h3>${pelicula.Title} (${pelicula.Year})</h3>
              <img src="${pelicula.Poster !== "N/A" ? pelicula.Poster : 'https://via.placeholder.com/100x150'}" alt="Poster"/>
            </div>
          `;
          results.innerHTML += movieHTML;
        });
      } else {
        results.innerHTML = "No se encontraron resultados.";
      }
    })
    .catch(err => {
      console.error(err);
      results.innerHTML = "Error al buscar películas.";
    });
}
