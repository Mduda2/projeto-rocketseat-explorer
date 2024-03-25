function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


    //pegar a tag img
const imag = document.querySelector("#profile img")

    //substituir a imagem
     if(html.classList.contains('light')) {
       //se tiver light mode, adicionar a imagem light
      imag.setAttribute('src', './assets/avatar-light.png')

    } else {
       //se nao tiver, manter a imagem normal
       imag.setAttribute('src', './assets/avatar.png')
}

}