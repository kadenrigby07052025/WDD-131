const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");
const gallery = document.querySelector(".gallery");
const modal = document.querySelector("#modal");
const modalImg = modal.querySelector("img");
const closeBtn = modal.querySelector(".close-viewer");

menuButton.setAttribute("aria-expanded", "false");

function toggleMenu() {
  nav.classList.toggle("open");
  const expanded = nav.classList.contains("open");
  menuButton.setAttribute("aria-expanded", expanded);
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false"); 
  }
}

window.addEventListener("resize", handleResize);

function viewHandler(event) {
  if (event.target.tagName === "IMG") {
    const src = event.target.getAttribute("src");
    const fullSrc = src.replace("-sm", "-full");

    const altText = event.target.alt || "Full-size image";

    modalImg.src = fullSrc;
    modalImg.alt = altText;

    modal.showModal();
  }
}

gallery.addEventListener("click", viewHandler);

closeBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
