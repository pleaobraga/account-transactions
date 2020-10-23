export const simulateRequest = data => {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      data
        ? resolve({ data })
        : reject({
          error: 'Error'
        })
    )
  })
}
