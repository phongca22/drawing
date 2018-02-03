import {EventBus} from '../bus/bus.js'
import axios from 'axios';

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
      console.log('event')
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
      EventBus.$emit("paper.load", collection);
    },
    createCollection: function(co) {
      co.flex = 4;
      this.list.push(co);
    },
    updateCollection: function(co) {
      this.selectedCollection.page.drawFileContentType = co.data;
      if (co.image) {
        this.selectedCollection.image = co.image;
      }

      axios.put('http://localhost:8081/api/pages', this.selectedCollection.page)
      .then(response => {
      })
      .catch(e => {
      })

      this.$toasted.global.appSuccess({message: "Saved"});
    },
    fetch: function() {
      axios.get('http://localhost:8081/api/collections')
      .then(response => {
        this.list = response.data.map(function(c){
          c.title = c.collectionName;
          return c;
        });

        this.fetchPages();
      })
      .catch(e => {
      })
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
        console.log(e)
      })
    }
  },
}
