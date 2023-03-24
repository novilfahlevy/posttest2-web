const subjectOptions = document.querySelectorAll('input[name="subject"]')
subjectOptions.forEach(subjectOption => {
  subjectOption.addEventListener('click', event => {
    const selectedSubject = document.querySelector('input[name="subject"]:checked').value
    const otherSubjectInput = document.getElementById('other_subject').parentElement

    if (selectedSubject == 'other') {
      otherSubjectInput.style.display = 'block'
    } else {
      otherSubjectInput.style.display = 'none'
    }
  })
})

const occupationSelectInput = document.querySelector('select#occupation')
occupationSelectInput.addEventListener('change', event => {
  const otherOccupationInput = document.getElementById('other_occupation').parentElement

  if (event.target.value == 'other') {
    otherOccupationInput.style.display = 'block'
  } else {
    otherOccupationInput.style.display = 'none'
  }
})

const contactMeForm = document.getElementById('contactMeForm')
contactMeForm.addEventListener('submit', event => {
  event.preventDefault()
  
  const name = document.querySelector('input[name=name]')
  const email = document.querySelector('input[name=email]')
  const subject = document.querySelector('input[name=subject]:checked')
  const otherSubject = document.querySelector('input[name=other_subject]')
  const occupation = document.querySelector('select[name=occupation]')
  const otherOccupation = document.querySelector('input[name=other_occupation]')
  const message = document.querySelector('textarea[name=message]')
  const days = Array.from(document.querySelectorAll('input[name=days]:checked')).map(day => day.value)

  const messages = localStorage.getItem('messages')
    ? JSON.parse(localStorage.getItem('messages'))
    : []

  const newMessage = {
    name: name.value,
    email: email.value,
    subject: subject.value == 'other' ? otherSubject.value : subject.value,
    occupation: occupation.value == 'other' ? otherOccupation.value : occupation.value,
    message: message.value,
    days
  }
  const newMessages = [newMessage, ...messages]
  localStorage.setItem('messages', JSON.stringify(newMessages))

  window.location.reload()

  alert('Your message has been sent, I will reply it soon')
})