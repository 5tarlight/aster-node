$(() => {
  $('.signup').on('click', event => {
    event.preventDefault()
    console.log('Checking session')
    let email = $('.input-email').val()
    let pw = $('.input-pw').val()
    let repw = $('.input-pw-re').val()
  
    if(!email) {
      alert('이메일을 입력해 주십시오.')
      return
    }
  
    if(!pw) {
      alert('비밀번호를 입력해 주십시오.')
      return
    }
  
    if(!repw) {
      alert('비밀번호를 다시 입력해 주십시오.')
      return
    }
  })

  email = email.trim()
  pw = pw.trim()
  repw = repw.trim()
})