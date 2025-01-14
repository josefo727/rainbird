const images = [
  "./gallery/images/images-01.jpeg",
  "./gallery/images/images-02.jpeg",
  "./gallery/images/images-03.jpeg",
  "./gallery/images/images-04.jpeg",
  "./gallery/images/images-05.jpeg",
  "./gallery/images/images-06.jpeg",
  "./gallery/images/images-07.jpeg",
  "./gallery/images/images-08.jpeg",
  "./gallery/images/images-09.jpeg",
  "./gallery/images/images-10.jpeg"
];

let showImages = 4;
let imagesLoaded = false; // Variable para controlar si se deben ocultar las imágenes

// Cargar imágenes
function loadingImages() {
  const container = document.getElementById("container-gallery");

  // Solo agregar nuevas imágenes si hay más para cargar
  for (let i = container.children.length; i < showImages; i++) {
    const img = document.createElement("img");
    img.src = images[i];
    img.alt = "images " + (i + 1);
    img.classList.add("gallery-item-images");
    container.appendChild(img);
  }
}

// Manejar el botón de "Ver Más / Ocultar Imágenes"
document.getElementById("more-btn").addEventListener("click", function() {
  const container = document.getElementById("container-gallery");

  if (!imagesLoaded) {
    // Mostrar más imágenes si no se han mostrado todas
    showImages = Math.min(showImages + 4, images.length);
    loadingImages();
    // Cambiar el texto del botón cuando ya no haya más imágenes
    if (showImages === images.length) {
      this.textContent = "Ocultar Imágenes";
      imagesLoaded = true;
    }
  } else {
    // Volver a 4 imágenes
    showImages = 4;
    container.innerHTML = ""; // Limpiar el contenedor de imágenes
    loadingImages(); // Volver a cargar solo las 4 primeras imágenes
    this.textContent = "Ver Más";
    imagesLoaded = false;
  }
});

loadingImages();

const videos = [
  "./gallery/videos/video-01.mp4",
  "./gallery/videos/video-02.mp4",
  "./gallery/videos/video-03.mp4",
  "./gallery/videos/video-04.mp4",
  "./gallery/videos/video-05.mp4",
  "./gallery/videos/video-06.mp4",
  "./gallery/videos/video-07.mp4",
  "./gallery/videos/video-08.mp4",
  "./gallery/videos/video-09.mp4",
  "./gallery/videos/video-10.mp4",
  "./gallery/videos/video-11.mp4",
  "./gallery/videos/video-12.mp4",
  "./gallery/videos/video-13.mp4",
  "./gallery/videos/video-14.mp4",
  "./gallery/videos/video-15.mp4",
  "./gallery/videos/video-16.mp4",
  "./gallery/videos/video-17.mp4",
  "./gallery/videos/video-18.mp4",
  "./gallery/videos/video-19.mp4",
  "./gallery/videos/video-20.mp4",
  "./gallery/videos/video-21.mp4",
  "./gallery/videos/video-22.mp4",
  "./gallery/videos/video-23.mp4",
  "./gallery/videos/video-24.mp4",
  "./gallery/videos/video-25.mp4",
  "./gallery/videos/video-26.mp4",
  "./gallery/videos/video-27.mp4",
  "./gallery/videos/video-28.mp4",
];

let showVideos = 4;
let videosLoaded = false; // Variable para controlar si se deben ocultar los videos

// Cargar videos
function loadVideos() {
  const container = document.getElementById("container-videos");

  // Solo agregar nuevos videos si hay más para cargar
  for (let i = container.children.length; i < showVideos; i++) {
    const video = document.createElement("video");
    video.classList.add("gallery-item-videos");
    video.controls = true;

    const source = document.createElement("source");
    source.src = videos[i];
    source.type = "video/mp4";

    video.appendChild(source);
    container.appendChild(video);
  }
}

// Manejar el botón de "Ver Más / Ocultar Videos"
document.getElementById("more-videos-btn").addEventListener("click", function() {
  const container = document.getElementById("container-videos");

  if (!videosLoaded) {
    // Mostrar más videos si no se han mostrado todos
    showVideos = Math.min(showVideos + 4, videos.length);
    loadVideos();
    // Cambiar el texto del botón cuando ya no haya más videos
    if (showVideos === videos.length) {
      this.textContent = "Ocultar Videos";
      videosLoaded = true;
    }
  } else {
    // Volver a 4 videos
    showVideos = 4;
    container.innerHTML = ""; // Limpiar el contenedor de videos
    loadVideos(); // Volver a cargar solo los 4 primeros videos
    this.textContent = "Ver Más";
    videosLoaded = false;
  }
});

loadVideos();
