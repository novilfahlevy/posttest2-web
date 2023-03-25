const loginForm = document.getElementById('loginForm')
const key = loginForm.querySelector('input[name=key]')
const pin = loginForm.querySelector('input[name=pin]')

loginForm.addEventListener('submit', event => {
  event.preventDefault()

  const keysets = localStorage.getItem('keysets')
    ? JSON.parse(localStorage.getItem('keysets'))
    : []
  
  const keysetIndex = keysets.findIndex(keyset => keyset.key == key.value && keyset.pin == pin.value)
  if (keysetIndex >= 0) {
    localStorage.setItem('key-logged-in-index', keysetIndex)
    window.location.href = 'messages.html'
  } else {
    alert('Keyset does not match any record')
  }
})

const showPINToggle = document.getElementById('showPINToggle')

showPINToggle.addEventListener('click', function() {
  const i = this.querySelector('i')

  if (i.classList.contains('fa-eye')) {
    i.classList.add('fa-eye-slash')
    i.classList.remove('fa-eye')
    pin.type = 'text'
  } else if (i.classList.contains('fa-eye-slash')) {
    i.classList.add('fa-eye')
    i.classList.remove('fa-eye-slash')
    pin.type = 'password'
  }
})