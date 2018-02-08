import axios from 'axios'
function Service () {
  Service.prototype.getAll = function (callback) {
    axios.get('http://localhost:8081/api/collections')
    .then(response => {
      callback(response)
    })
    .catch(e => {
      console.log(e)
    })
  }

  Service.prototype.createCollection = function (data, callback) {
    axios.post('http://localhost:8081/api/collections', {
      collectionName: data.title
    })
    .then(response => {
      callback(response)
    })
    .catch(e => {
      console.log(e)
    })
  }

  Service.prototype.getPage = function (data, callback) {
    axios.get('http://localhost:8081/api/pages')
    .then(response => {
      var pages = response.data
      var page = {}
      for (var i = 0; i < pages.length; i++) {
        if (pages[i].collectionId === data.collectionId) {
          page = (pages[i])
          break
        }
      }

      callback(page)
    })
    .catch(e => {
      console.log(e)
    })
  }

  Service.prototype.updateCollection = function (data, callback) {
    axios.put('http://localhost:8081/api/pages', data)
    .then(response => {
      callback(response)
    })
    .catch(e => {
      console.log(e)
    })
  }
}

var CollectionService = new Service()
export default CollectionService
