import Swal from "sweetalert2";

const img = document.getElementById("img");
const nome = document.getElementById("nome");
const button = document.getElementById("button");

const randomNumber = () => Math.floor(Math.random() * 731);

const fetchSuperHeroi = async () => {
  try {
    const response = await fetch(
      `https://akabab.github.io/superhero-api/api/id/${randomNumber()}.json`
    );
    const data = await response.json();
    img.src = data.images.lg;
    nome.innerText = data.name;
  } catch (e) {
    Swal.fire({
      title: "Error!",
      text: e.message,
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchSuperHeroi();
});
