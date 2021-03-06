import axios from 'axios';

function Service () {
    Service.prototype.getAll = function (callback) {
        // eslint-disable-next-line
        // callback({
        //     data: [{
        //         id: 1,
        //         title: 'Pre-fab homes',
        //         image: 'https://img1.etsystatic.com/000/0/5288420/il_fullxfull.26058231.jpg',
        //         flex: 4
        //     }, {
        //         id: 2,
        //         title: 'Favorite road trips',
        //         image: 'https://orig00.deviantart.net/cdb3/f/2014/002/6/9/pencil_drawing_mash_up_by_art_by_doc-d70hvyg.jpg',
        //         flex: 4
        //     }, {
        //         id: 3,
        //         title: 'abc',
        //         image: 'https://cdn.lynda.com/course/485650/485650-636413478194188790-16x9.jpg',
        //         flex: 4
        //     }]
        // })

        axios.get('http://localhost:8081/api/collections')
        .then(response => {
            callback(response);
        })
        .catch(e => {
            console.log(e);
        });
    };

    Service.prototype.createCollection = function (data, callback) {
        axios.post('http://localhost:8081/api/collections', {
            collectionName: data.name,
            collectionId: data.collectionId
        })
        .then(response => {
            callback(response);
        })
        .catch(e => {
            console.log(e);
        });
    };

    Service.prototype.updateCollection = function (data, callback) {
        axios.put('http://localhost:8081/api/pages', data)
        .then(response => {
            callback(response);
        })
        .catch(e => {
            console.log(e);
        });
    };

    Service.prototype.deleteCollection = function (id, callback) {
        axios.delete('http://localhost:8081/api/collections/' + id)
        .then(response => {
            callback(response);
        })
        .catch(e => {
            console.log(e);
        });
    };
}

var CollectionService = new Service();
export default CollectionService;
