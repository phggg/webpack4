console.log('hello')

if('serviceWorker' in navigator){
  window.addEventListener('load',() => {
    navigator.serviceWorker.register('../service-worker.js')
      .then(registration => {
        console.log('Service-Worker registed');
      })
      .catch((e) => {
        console.log('Service-Worker Error');
      })
  })
}