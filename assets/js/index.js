let folder = 'assets/images/';

let messages  = [
  ['E trabalhar que hora?', 'cj-01.jpg'],
  ['Vexatório', 'cj-02.gif'],
  ['Ok!', 'cj-03.gif'],
  ['Hello fellows', 'cj-04.gif'],
  ['Bóra galera', 'cj-05.gif'],
  ['Certo', 'cj-06.gif'],
];

function randomContent () {
  let i = Math.floor(messages.length * Math.random());
  document.getElementById("message").innerHTML = '<h1 class="message">' + messages[i][0] + '</h1>';

  let imagem = messages[i][1];
  document.body.style.backgroundImage = "url(" + folder + imagem +")";
}

randomContent();