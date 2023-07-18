const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const formData = new FormData(form)
  const formValues = Object.fromEntries(formData.entries())

  console.log(formValues)
})