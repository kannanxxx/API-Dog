const apiUrl =
 "https://random.dog/woof.json";

const imageArea = document.getElementById("cat-image");

const overlayElement = document.getElementById("overlay");

const loaddogImage = ({ url }) => {
  // replace the entire image element or tag
  // imageArea.innerHTML = "";
  // const imgElement = document.createElement("img");
  // imgElement.src = image;
  // imageArea.appendChild(imgElement);

  // changing only the src of the img element
  const imgElement = document.getElementById("img-element");
  imgElement.src = url;
};

const sleepTime = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });

const getRandomdog= async () => {
  overlayElement.style.display = "flex";
  const response = await fetch(apiUrl);
  const data = await response.json();

  loaddogImage(data);
  overlayElement.style.display = "none";
};

getRandomCat();