class StackXAdapter
{
  // const CLIENT_ID = 11539
  // const CLIENT_SECRET_KEY = "WKM9bfwN8CnsG3Ag*cruoA(("
  // const KEY = "9Zi7FOM4BG)czMpaX*PchA(("
  static getStackDataAPI(searchTerm){
    let encodedTerm = encodeURI(searchTerm)
    return fetch(`https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=activity&tagged=${encodedTerm}&site=stackoverflow&filter=!-*f(6rf)cxA5`).then(resp => resp.json())
    // fetch(`https://api.stackexchange.com/2.2/questions?pagesize=10&answers=1&order=desc&sort=activity&tag=sql&site=stackoverflow&filter=!-*f(6rf)cxA5`).then(resp => resp.json())
  }

}
