function fetchRequest() {
  const method = document.getElementById('urlMethod').value
  const host = document.getElementById('basic-url').value
  const Query_Key1 = document.getElementById('Query_Key1').value
  const Query_Key2 = document.getElementById('Query_Key2').value
  const Query_Key3 = document.getElementById('Query_Key3').value
  const Query_Value1 = document.getElementById('Query_Value1').value
  const Query_Value2 = document.getElementById('Query_Value2').value
  const Query_Value3 = document.getElementById('Query_Value3').value
  const responseBox = document.getElementsByClassName('response-box')[0]
  const requestBox = document.getElementsByClassName('request-box')[0]
  requestBox.innerText = `
    ${method}
    ${host}
    ${Query_Key1}
    ${Query_Value1}
    ${Query_Key2}
    ${Query_Value2}
    ${Query_Key3}
    ${Query_Value3}
  `
  const headers = new Headers()
  headers.append("Content-Type", "application/json")

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      method,
      host,
      Query_Key1,
      Query_Value1,
      Query_Key2,
      Query_Value2,
      Query_Key3,
      Query_Value3
    })
  }

  return fetch( 'http://localhost:3001/construct_request', options )

    .then(response => response.json())
    .then(response => responseBox.innerText = response)
    .catch(error => console.error({error}))
}

$("#resp-button").click(function(event){
  fetchRequest()
  event.preventDefault()
  // if (loc.indexOf("?") === -1){
  //   loc += "?"
  // }else{
  //   loc += "&"
  // }
  // location.href = loc + "ts=true"
})
