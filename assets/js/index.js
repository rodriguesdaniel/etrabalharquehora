let folder = 'assets/images/';

let messages  = [
  ['E trabalhar que hora?', 'cj-01.jpg'],
  ['Vexatório', 'cj-02.gif'],
  ['Ok!', 'cj-03.gif'],
  ['Hello fellows', 'cj-04.gif'],
  ['Bóra galera', 'cj-05.gif'],
  ['Certo', 'cj-06.gif'],
];

// Create a array to get all images for preload function.
let imageList = [];
for (var imageTotal = 0; imageTotal < messages.length; imageTotal++) {
  imageList.push(messages[imageTotal][1]);
}

/**
 * Preload all images to fast loading page.
 * @param {imageList}
 */
function preLoadImages() {
  let images = [];
  for (var i = 0; i < preLoadImages.arguments.length; i++) {
    images[i] = [];
    images[i].src = preLoadImages.arguments[i];
  }
}

/**
 * Show a random message and background when the page goes loaded or refreshed.
 * @return {image} The image for background.
 * @return {message} Random message for html.
 */
function randomContent() {
  let i = Math.floor(messages.length * Math.random());
  document.getElementById("message").innerHTML = '<h1 class="message">' + messages[i][0] + '</h1>';

  let image = messages[i][1];
  document.body.style.backgroundImage = "url(" + folder + image +")";
}

preLoadImages(imageList);
randomContent();