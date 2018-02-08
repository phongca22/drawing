import {EventBus} from '../bus/bus.js'
import CollectionService from './collectionService.js'

export default {
  name: 'collection',
  data() {
    return {
      open: false,
      selectedCollection: null,
      list: [{
        title: 'Pre-fab homes',
        image: 'https://img1.etsystatic.com/000/0/5288420/il_fullxfull.26058231.jpg',
        flex: 4
      }, {
        title: 'Favorite road trips',
        image: 'https://orig00.deviantart.net/cdb3/f/2014/002/6/9/pencil_drawing_mash_up_by_art_by_doc-d70hvyg.jpg',
        flex: 4
      }]
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
      CollectionService.createCollection(co, response => {

      });
    },
    updateCollection: function(co) {
      this.selectedCollection.page.drawFileContentType = co.drawFileContentType;
      if (co.image) {
        this.selectedCollection.image = co.image;
      }

      CollectionService.updateCollection(this.selectedCollection.page, response => {
        this.$toasted.global.appSuccess({message: "Saved"});
      });
    },
    fetch: function() {
      CollectionService.getAll(response => {
        this.list = response.data.map(function(c){
          c.title = c.collectionName;
          return c;
        });
      });
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
