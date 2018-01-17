import Palette from './editor/palette/Palette.vue'
import Paper from './editor/paper/Paper.vue'
export default {
  name: 'drawing',
  data: function() {
    return {
      color: {value: "#000"}
    }
  },
  components: {
    Palette,
    Paper
  },
  methods: {
    colorChanged: function(c) {
      this.color = c;
    },
    getColor: function() {
      return this.color;
    }
  }
}
