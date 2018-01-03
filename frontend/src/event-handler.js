class EventHandler{
  static userExists(){
  let userName = document.getElementsByName("username")[0].value
  let backendObj = Adapter.getUserDataAPI(userName).then(obj => {
    if (obj.length === 0){
      return false
    }
    else {
      return true
    }
  })
  return backendObj
}

static createNewUser(){
  let userName = document.getElementsByName("username")[0].value
  let userId;
  Adapter.createUserAPI(userName).then(obj =>{
    let newUser = new User(obj)
    userId = newUser.id
    // debugger
        // let makeBoard = Adapter.createBoardAPI(newUser.id).then(obj => {
        //   let newBoard = new Board(obj)
        // })
  })
  debugger
  return userId
}

static createNewBoard(userId){
  Adapter.createBoardAPI(userId).then(obj => {
    // debugger
    let newBoard = new Board()
  })
}

  static getExistingUser(){
    let userName = document.getElementsByName("username")[0].value
    let user;
    let backendObj = Adapter.getUserDataAPI(userName).then(obj => {
      debugger
        user = new User(obj[0])
    })
    return user
  }
}
