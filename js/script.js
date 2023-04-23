var popoverTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

var toastTriggerEjUno = document.getElementById('liveToastBtnEjUno')
var toastLiveExampleEjUno = document.getElementById('liveToastEjUno')
if (toastTriggerEjUno) {
  toastTriggerEjUno.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleEjUno)

    toast.show()
  })
}

var toastTriggerEjDos = document.getElementById('liveToastBtnEjDos')
var toastLiveExampleEjDos = document.getElementById('liveToastEjDos')
if (toastTriggerEjDos) {
  toastTriggerEjDos.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleEjDos)

    toast.show()
  })
}

var toastTriggerEjTres = document.getElementById('liveToastBtnEjTres')
var toastLiveExampleEjTres = document.getElementById('liveToastEjTres')
if (toastTriggerEjTres) {
  toastTriggerEjTres.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleEjTres)

    toast.show()
  })
}

var toastTriggerEjCuatro = document.getElementById('liveToastBtnEjCuatro')
var toastLiveExampleEjCuatro = document.getElementById('liveToastEjCuatro')
if (toastTriggerEjCuatro) {
  toastTriggerEjCuatro.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleEjCuatro)

    toast.show()
  })
}

var toastTriggerEjCinco = document.getElementById('liveToastBtnEjCinco')
var toastLiveExampleEjCinco = document.getElementById('liveToastEjCinco')
if (toastTriggerEjCinco) {
  toastTriggerEjCinco.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleEjCinco)

    toast.show()
  })
}

var toastTriggerEjSeis = document.getElementById('liveToastBtnEjSeis')
var toastLiveExampleEjSeis = document.getElementById('liveToastEjSeis')
if (toastTriggerEjSeis) {
  toastTriggerEjSeis.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleEjSeis)

    toast.show()
  })
}

var toastTriggerEj = document.getElementById('liveToastBtnEj')
var toastLiveExampleEj = document.getElementById('liveToastEj')
if (toastTriggerEj) {
  toastTriggerEj.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExampleEj)

    toast.show()
  })
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

