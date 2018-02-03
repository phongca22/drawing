import {EventBus} from '../bus/bus.js'

export default {
  name: 'collectionUpdater',
  data() {
    return {
      dialog: false,
      collection: null,
      hasCollection: false,
      title: '',
      des: ''
    }
  },
  methods: {
    create: function() {
      EventBus.$emit('paper.create', {
        title: this.title,
        des: this.des
      });

      this.dialog = false;
    },
    update: function() {
      EventBus.$emit('paper.update');
    }
  },
  created: function() {
    EventBus.$on("paper.load", (collection) => {
      this.hasCollection = collection ? true : false;
      this.collection = collection;
    });
  }
}
