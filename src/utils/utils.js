export const simulateRequest = data => {
  var promise = new Promise(function(resolve) {
    window.setTimeout(function() {
      resolve({ data })
    }, 3000)
  })
  return promise
}
