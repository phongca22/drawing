import paper from 'paper'
import {EventBus} from '../../bus/bus.js'

export default {
  name: 'white-paper',
  props: ['getColor', 'makeUndo'],
  data: function() {
    return {
      currentPath: null,
      paper: null,
      allPaths: [],
      undoCount: 0
    }
  },
  created: function () {
    EventBus.$on('makeUndo', () => {
      this.undoCount++;
      if (this.undoCount > 3) {
        return
      }

      if (this.allPaths.length > 0) {
        this.allPaths.pop().remove();
      }

      if (this.allPaths.length == 0 || this.undoCount == 3) {
        this.disableUndo();
      }
    });
  },
  mounted: function() {
    this.paper = paper.setup(document.getElementById('canvas'));
    var thiz = this;
    this.paper.view.onMouseDown = function(ev) {
      thiz.currentPath = new paper.Path({strokeColor: thiz.getColor().value});
    };

    this.paper.view.onMouseDrag = function(ev) {
      thiz.currentPath.add(ev.point);
    };

    this.paper.view.onMouseUp = function(ev) {
      if (thiz.currentPath.length > 0) {
        thiz.allPaths.push(thiz.currentPath);
        thiz.enableUndo();
        thiz.undoCount = 0;
      } else {
        thiz.disableUndo();
      }
    };
  },
  methods: {
    disableUndo: function() {
      EventBus.$emit('disableUndo');
    },
    enableUndo: function() {
      EventBus.$emit('enableUndo');
    }
  }
}
