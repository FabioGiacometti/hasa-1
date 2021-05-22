
export function validateForm(form){ 
    const allFieldsAreDirty = checkIsDirt(form)
    const isValid = (value)=>(value !== undefined && value !=="")
     
    if(allFieldsAreDirty){
      return Object.keys(form).every(item=>{
        return isValid(form[item])
    })
  }
    return false;
  }

  const checkIsDirt = (form)=>{
      const fieldsAreReady = form.nombre && form.email && form.mensaje;
      if(fieldsAreReady) return form.email.length && form.mensaje.length
      else false;
  }

//Modal//
  let form =document.getElementById('form');
  let spinner =document.getElementById("form-spinner")
  let message = document.getElementById("message");
  let modal = document.getElementById("confirmacion");
  let confirmModalBtn = document.getElementById("confirmModalBtn");

  
  export const handleModal = {
        displayModal:()=>{
            const spinner = document.getElementById("form-spinner")
            spinner.style = "display: inline-block"
        },
      
        success:()=>{
            modal.classList.add("center")
            message.innerText = "Tu mensaje se envio correctamente";
        },
        failure:(error)=>{
            message.innerText = `"Ha ocurrido un error, por favor intenta nuevamente, mensaje de error: "${error}`;
        },
        confirmBtn:()=>{
            modal.classList.remove("center");
            form.reset();
        }
    
  }
  //Modal//

  export const apiSentMessage = (url,formData) =>{

    fetch(url, { method: 'POST', body: new FormData(formData) })
    .then(response => {
      console.log('Success!', response)
      handleModal.success()
      spinner.style = "display: none"
    })
    .catch(error => {
      console.error('Error!', error.message)
      handleModal.failure(error.message)
    })
  }
    
  confirmModalBtn.addEventListener('click', function(){
    handleModal.confirmBtn()
  })