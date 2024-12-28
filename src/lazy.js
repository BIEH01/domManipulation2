// Intersection observer

const isIntersecting = (entry) => {
  return entry.isIntersecting; // true (into screen)
};

const loadImage = (entry) => {
  const container = entry.target; // container (DIV)
  const image = container.firstChild;
  const url = image.dataset.src;

  // Add url to src
  image.src = url;

  console.log("hola");
  // stop listening
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});
// Function
export const registerImage = (image) => {
  // Observer -> image
  observer.observe(image);
};
