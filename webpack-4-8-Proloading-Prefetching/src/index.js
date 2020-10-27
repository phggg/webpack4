document.addEventListener('click', async () => {
  import(
    /* webpackPrefetch: true */
    /* webpackChunkName:"click" */
    './click').then(({ default: _ }) => {
      _()
    })
})