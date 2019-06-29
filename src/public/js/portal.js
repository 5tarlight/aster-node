$(() => {
  $('.btn-start').on('click', (event) => {
    event.preventDefault()
    console.log('Start Game')
    window.location.href = '/game'
  })
})