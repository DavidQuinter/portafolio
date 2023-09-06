/* Posicion nombre de seccion */
document.querySelectorAll('.writing :is(input , textarea)').forEach(writinginput => {
  writinginput.addEventListener('input', () => {
    if (writinginput.value.trim() !== '') {
      writinginput.classList.add('has-text');
    } else {
      writinginput.classList.remove('has-text');
    }
  });
});


/* Alto de textarea */
document.querySelectorAll('.textarea textarea').forEach(textarea => {
  textarea.addEventListener('input', () => {
    textarea.style.height = '1em';
    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${scrollHeight}px`;
  });
});


/* Subir archivo */
function mostrarNombreArchivo(input) {
  let fileName = input.files[0].name;
  let archivoTexto = input.parentNode.querySelector('.text');
  archivoTexto.innerText = `${fileName}`;
  let viewElement = input.parentNode.querySelector('.view');
  viewElement.classList.add('file-select');
}
function seleccionarArchivo() {
  let archivoInput = document.querySelector('#archivo');
  if (archivoInput.value) {
    archivoInput.value = null;
    let archivoTexto = archivoInput.parentNode.querySelector('.text');
    archivoTexto.innerText = 'Añadir archivo';

    let viewElement = archivoInput.parentNode.querySelector('.view');
    viewElement.classList.remove('file-select');
  } else {
    archivoInput.click();
  }
}


/* Desplegable */
function applyOpenStyle(selectElement) {
  if (selectElement.classList.contains('select-open')) {
    selectElement.classList.remove('select-open');
  } else {selectElement.classList.add('select-open');}
}
function removeOpenStyle(selectElement) {
  selectElement.classList.remove('select-open');
}

