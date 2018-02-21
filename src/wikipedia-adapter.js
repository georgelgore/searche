class WikipediaAdapter {
  static getWikiDataAPI(searchInput) {
    return fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchInput}&format=json&origin=*`).then(resp => resp.json())

  }
}
