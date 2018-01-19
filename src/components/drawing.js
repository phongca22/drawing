import Palette from './editor/palette/Palette.vue'
import Paper from './editor/paper/Paper.vue'
import {EventBus} from './bus/bus.js'
import LoginBtn from './user/LoginBtn.vue'
import firebase from 'firebase'

export default {
  name: 'drawing',
  data: function() {
    return {
      color: {value: "#000"},
      disableUndo: true,
      disableRedo: true,
    }
  },
  components: {
    Palette,
    Paper,
    LoginBtn
  },
  created: function() {
    EventBus.$on('disableUndo', () => {
      this.disableUndo = true;
    });

    EventBus.$on('enableUndo', () => {
      this.disableUndo = false;
    });

    EventBus.$on('disableRedo', () => {
      this.disableRedo = true;
    });

    EventBus.$on('enableRedo', () => {
      this.disableRedo = false;
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
    },
    makeRedo: function() {
      EventBus.$emit('makeRedo');
    }
  }
}
