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