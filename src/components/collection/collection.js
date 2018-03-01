import {EventBus} from '../bus/bus.js'
import CollectionService from './collectionService.js'

export default {
    name: 'collection',
    data() {
        return {
            open: false,
            selectedCollection: null,
            list: [],
            emptyList: []
        }
    },
    created: function() {
        EventBus.$on("collection.data", (co) => {
            if (this.selectedCollection) {
                this.updateCollection(co);
            } else {
                this.createCollection(co);
            }
        });

        this.fetch();
    },
    methods: {
        selectCollection: function(collection) {
            console.log(collection)
            this.open = false;
            this.selectedCollection = collection;
            if (collection._loaded) {
                EventBus.$emit("paper.load", collection);
            } else {
                CollectionService.getPage(collection, response => {
                    collection.page = response;
                    collection._loaded = true;
                    EventBus.$emit("paper.load", collection);
                });
            }
        },
        createCollection: function(co) {
            co.flex = 4;
            this.list.push(co);
            this.emptyList = [];
            for (var i = 0; i < 3 - this.list.length; i++) {
                this.emptyList.push(i);
            }
            // CollectionService.createCollection(co, response => {
            // });
        },
        updateCollection: function(co) {
            this.selectedCollection.page.content = co.content;
            if (co.image) {
                this.selectedCollection.image = co.image;
            }

            // CollectionService.updateCollection(this.selectedCollection.page, response => {
            //     this.$toasted.global.appSuccess({message: "Saved"});
            // });
        },
        deleteCollection: function(co) {
            var list = [];
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].id != co.id) {
                    list.push(this.list[i]);
                }
            }

            this.list = list;
            this.emptyList = [];
            for (var i = 0; i < 3 - this.list.length; i++) {
                this.emptyList.push(i);
            }

            if (this.selectedCollection && co.id == this.selectedCollection.id) {
                EventBus.$emit("paper.clean");
            }

            this.selectCollection = null;
        },
        fetch: function() {
            CollectionService.getAll(response => {
                this.list = response.data.map(function(c){
                    // c.title = c.collectionName;
                    return c;
                });
            });

            for (var i = 0; i < 3 - this.list.length; i++) {
                this.emptyList.push(i);
            }
        },
        fetchPages: function() {
            axios.get('http://localhost:8081/api/pages')
            .then(response => {
                this.list = this.list.map(c => {
                    for (var i = 0; i < response.data.length; i++) {
                        if (response.data[i].collectionId == c.collectionId) {
                            c.page = response.data[i];
                            c.page.data = c.page.drawFileContentType;
                            break;
                        }
                    }

                    return c;
                });
            })
            .catch(e => {
                console.log(e);
            })
        }
    },
}
