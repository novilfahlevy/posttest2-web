const registerForm = document.getElementById('registerForm')
const key = registerForm.querySelector('input[name=key]')
const pin = registerForm.querySelector('input[name=pin]')

registerForm.addEventListener('submit', event => {
  event.preventDefault()

  const keysets = localStorage.getItem('keysets')
    ? JSON.parse(localStorage.getItem('keysets'))
    : []
  
  const isKeyAlreadyExists = keysets.some(keyset => keyset.key == key.value)
  if (isKeyAlreadyExists) {
    alert('Key already exists')
    return
  }

  const newKeysets = [{ key: key.value, pin: pin.value }, ...keysets]
  localStorage.setItem('keysets', JSON.stringify(newKeysets))

  window.location.reload()

  // Ini ceritanya aja
  alert('Keyset has already sent to the email')
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