import {EventBus} from '../bus/bus.js'
import CollectionService from './collection.service.js'
import PageService from './page.service.js';

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
        selectCollection: function(co) {
            this.open = false;
            this.selectedCollection = co;
            if (co._loaded) {
                EventBus.$emit("paper.load", co);
            } else {
                PageService.getPage(co.collectionId, response => {
                    co._page = response.data[0];
                    co._content = response.data[0].drawFileContentType;
                    co._loaded = true;
                    EventBus.$emit("paper.load", co);
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

            CollectionService.createCollection(co, response => {
                this.createPage(co);
            });
        },
        updateCollection: function(co) {
            // this.selectedCollection.page.content = co.content;
            if (co.image) {
                this.selectedCollection.image = co.image;
            }

            var page = this.selectedCollection._page;
            page.drawFileContentType = co.content;
            page.drawFile = co.image;

            PageService.updatePage(page, response => {
                this.$toasted.global.appSuccess({message: "Updated"});
            });
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

            CollectionService.deleteCollection(co.id, response => {
                if (this.selectedCollection && co.id == this.selectedCollection.id) {
                    EventBus.$emit("paper.clean");
                    this.selectCollection = null;
                }

                this.$toasted.global.appSuccess({message: "Deleted"});
            });
        },
        fetch: function() {
            CollectionService.getAll(response => {
                this.list = response.data.map(co => {
                    co.name = co.collectionName;
                    return co;
                });
            });

            for (var i = 0; i < 3 - this.list.length; i++) {
                this.emptyList.push(i);
            }
        },
        createPage: function(co) {
            PageService.createPage({
                collectionId: co.collectionId,
                pageId: co.collectionId + new Date().getTime()
            }, response => {
                console.log(repsonse)
            });
        }
    },
}
