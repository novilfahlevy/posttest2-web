const keysets = localStorage.getItem('keysets')
  ? JSON.parse(localStorage.getItem('keysets'))
  : []
const loggedInKey = document.getElementById('loggedInKey')
const loggedInKeyIndex = localStorage.getItem('key-logged-in-index')

// Check user is logged in
if (loggedInKeyIndex && keysets[loggedInKeyIndex]) {
  loggedInKey.textContent = keysets[loggedInKeyIndex].key
} else {
  window.location.href = 'login.html'
  alert('You are not authrized to enter this page')
}

const messagesContainer = document.getElementById('messages')
const messages = sessionStorage.getItem('messages')
  ? JSON.parse(sessionStorage.getItem('messages'))
  : []

if (messages.length) {
  messages.forEach(message => {
    let days = ''
    message.days.forEach(day => days += `<li>${day}</li>`)
  
    messagesContainer.innerHTML += `
      <div class="card">
        <h2 class="card-title">
          ${message.name}
        </h2>
        <p>Email: ${message.email}</p>
        <p>Subject: ${message.subject}</p>
        <p>Occupation: ${message.occupation}</p>
        <p>Message: <br> ${message.message}</p>
        <ul class="days">
          ${days}
        </ul>
      </div>
    `
  })
} else {
  messagesContainer.innerHTML = '<p class="no-message">There is no message yet</p>'
}

document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('key-logged-in-index')
  window.location.href = 'login.html'
})