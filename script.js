function toggleMode() {
//pegando o html
  const html = document.documentElement

  //trocando as classes
  if(html.classList.contains('light')) {
    html.classList.remove('light')} 
  else {
    html.classList.add('light')
  }

// pegando a tag img
  const img = document.querySelector('#profile img')
  if(html.classList.contains('light')) {
// com light mode
   img.setAttribute('src', './assets/avatar.png')
  } 
 //sem light mode
  else {
    img.setAttribute('src', './assets/avatar.night.png')
  }
}