export default {
  name: 'collection',
  data() {
    return {
      open: false,
      cards: [{
        title: 'Pre-fab homes',
        src: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg',
        flex: 4
      }, {
        title: 'Favorite road trips',
        src: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg',
        flex: 4
      }]
    }
  },
  methods: {
    showDialog: function() {},
  }
}
