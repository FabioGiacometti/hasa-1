const scriptURL = 'https://script.google.com/macros/s/AKfycbyvh82dsESxCZqr82t_EHpn6s2gmTzxKrzJT-2krZA3fVPl0klB/exec'
    const form = document.forms['submit-to-google-sheet']
    const submit = document.getElementById("submit")

    form.addEventListener('submit', e => {
      const spinner = document.getElementById("form-spinner")
      spinner.style = "display: inline-block"
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          console.log('Success!', response)
          handleModal("success")
          spinner.style = "display: none"
        })
        .catch(error => {
          console.error('Error!', error.message)
          handleModal("failure")
        })
    })