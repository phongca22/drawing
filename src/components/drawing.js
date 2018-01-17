import Palette from './editor/palette/Palette.vue'
import Paper from './editor/paper/Paper.vue'
import {EventBus} from './bus/bus.js'

export default {
  name: 'drawing',
  data: function() {
    return {
      color: {value: "#000"},
      disableUndo: true
    }
  },
  components: {
    Palette,
    Paper
  },
  created: function() {
    EventBus.$on('disableUndo', () => {
      this.disableUndo = true;
    });

    EventBus.$on('enableUndo', () => {
      this.disableUndo = false;
    });
  },
  methods: {
    colorChanged: function(c) {
      this.color = c;
    },
    getColor: function() {
      return this.color;
    },
    makeUndo: function() {
      EventBus.$emit('makeUndo');
    }
  }
}
