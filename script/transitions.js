function toggleBar(toggleTransition) {
  toggleTransition.classList.toggle("toggleTransitionAction");
  document.getElementById("sideNavigationContentWrapper").classList.toggle("toggleSlidePannel");
  document.getElementById("contentContainerWrapper").classList.toggle("toggleMoveContent");
}

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("lightTheme", themeToggle.checked);
});

themeToggle.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    themeToggle.checked = !themeToggle.checked;
    themeToggle.dispatchEvent(new Event("change"));
  }
});
