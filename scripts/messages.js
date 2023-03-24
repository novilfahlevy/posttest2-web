const messagesContainer = document.getElementById('messages')
const messages = localStorage.getItem('messages')
  ? JSON.parse(localStorage.getItem('messages'))
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
