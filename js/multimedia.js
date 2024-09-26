function openModal(videoUrl) {
  document.getElementById("videoIframe").src = videoUrl; // Establece la URL del video
  document.getElementById("videoModal").style.display = "block"; // Muestra el modal
}

function closeModal() {
  document.getElementById("videoIframe").src = ""; // Limpia la URL del iframe
  document.getElementById("videoModal").style.display = "none"; // Oculta el modal
}

function openPodcastModal(podcastUrl) {
  document.getElementById("podcastIframe").src = podcastUrl; // Establece la URL del podcast
  document.getElementById("podcastModal").style.display = "block"; // Muestra el modal
}

function closePodcastModal() {
  document.getElementById("podcastIframe").src = ""; // Limpia la URL del iframe
  document.getElementById("podcastModal").style.display = "none"; // Oculta el modal
}