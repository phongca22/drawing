import axios from 'axios';

function Service () {
    Service.prototype.createPage = function (page, callback) {
        axios.post('http://localhost:8081/api/pages', page)
        .then(response => {
            callback(response);
        })
        .catch(e => {
            console.log(e);
        });
    };

    Service.prototype.getPage = function (id, callback) {
        axios.get(`http://localhost:8081/api/pages/collection/${id}`)
        .then(response => {
            callback(response);
        })
        .catch(e => {
            console.log(e);
        });
    };

    Service.prototype.updatePage = function (page, callback) {
        axios.put('http://localhost:8081/api/pages', page)
        .then(response => {
            callback(response);
        })
        .catch(e => {
            console.log(e);
        });
    };
}

var PageService = new Service();
export default PageService;
