import {EventBus} from '../bus/bus.js'

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
  },
  methods: {
    selectCollection: function(collection) {
      this.open = false;
      this.selectedCollection = collection;
      EventBus.$emit("collection.load", collection);
    },
    createCollection: function(co) {
      co.flex = 4;
      this.list.push(co);
    },
    updateCollection: function(co) {
      this.selectedCollection.data = co.data;
      if (co.image) {
        this.selectedCollection.image = co.image;
      }
      this.$toasted.global.appSuccess({message: "Saved"});
    }
  },
}
