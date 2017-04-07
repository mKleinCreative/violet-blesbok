function fetchRequest() {
  const method = document.getElementById('urlMethod').value
  const host = document.getElementById('basic-url').value
  const responseBox = document.getElementsByClassName('response-box')[0]

  const requestBox = document.getElementsByClassName('request-box')[0]
  requestBox.innerText = `
    ${method}
    ${host}
  `
  const headers = new Headers()
  headers.append("Content-Type", "application/json")

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({method, host})
  }

  return fetch( 'http://localhost:3001/construct_request', options )
    .then(response => response.json())
    .then(response => responseBox.innerText = response)
    .catch(error => console.error({error}))
}
