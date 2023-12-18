const form = document.getElementById('ebac_htmljs')



form.addEventListener('submit', function(e) {
    var formularioValido = document.getElementById('CampoA').value < document.getElementById('CampoB').value ? true:false
    e.preventDefault();
    document.querySelector('.valido').style.display = ('none')
    document.querySelector('.invalido').style.display = ('none')
    if (formularioValido) {
        document.querySelector('.valido').style.display = ('block')
    
       } else {
        document.querySelector('.invalido').style.display = ('block')
       }

})


