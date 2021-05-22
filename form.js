import {validateForm, handleModal, apiSentMessage}  from './form.resources.js'

const scriptURL = 'https://script.google.com/macros/s/AKfycbyvh82dsESxCZqr82t_EHpn6s2gmTzxKrzJT-2krZA3fVPl0klB/exec'
    const form = document.forms['submit-to-google-sheet']
    const submit = document.getElementById("submit")
    const nameInput = document.getElementById('nombre');
    const emailInput = document.getElementById("email")
    const msgInput = document.getElementById("mensaje");
    const formFields = {}

    const elementsToWatch = [nameInput, emailInput, msgInput]
      elementsToWatch.map((item)=>{
          return item.addEventListener('input', (event) => {
            const fieldName = event.target.name
            formFields[fieldName]=event.target.value
            chechkBtnState()
          });
        });
          
    form.addEventListener('change', (event)=>{
      chechkBtnState()
    })

function chechkBtnState(){
  const fieldsHaveContent = validateForm(formFields);
  fieldsHaveContent ? submit.disabled = false : submit.disabled = true;
}    

form.addEventListener('submit', e => {
  e.preventDefault()
  handleModal.displayModal();
  apiSentMessage(scriptURL, form);
})