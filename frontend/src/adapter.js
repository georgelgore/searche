class Adapter{

  static getUserDataAPI(userName){
    return fetch(`http://localhost:3000/api/v1/users?username=${userName}`).then(resp => resp.json())
  }

  static createUserAPI(userName){
    return fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: userName})
    }).then(resp => resp.json())
  }

}
