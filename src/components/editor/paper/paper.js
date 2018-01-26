import paper from 'paper'
import {EventBus} from '../../bus/bus.js'

export default {
  name: 'white-paper',
  props: ['getColor', 'makeUndo'],
  data: function() {
    return {
      currentPath: null,
      paper: null,
      image: null,
      imageLayer: null,
      allPaths: [],
      redoList: []
    }
  },
  created: function () {
    EventBus.$on('makeUndo', () => {
      var p = this.allPaths.pop();
      p.remove();
      this.redoList.push(p);
      if (this.redoList.length == 3) {
        this.disableUndo();
      }

      this.enableRedo();
    });

    EventBus.$on('makeRedo', () => {
      var p = this.redoList.pop();
      var layer = this.paper.project.layers[0];
      layer.addChild(p);
      this.allPaths.push(p);

      if (this.redoList.length == 0) {
        this.disableRedo();
      }

      this.enableUndo();
    });

    EventBus.$on("file.upload", (files) => {
      this.initFileLayer(files[0]);
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
        thiz.redoList = [];
        thiz.disableRedo();
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
    },
    enableRedo: function() {
      EventBus.$emit('enableRedo');
    },
    disableRedo: function() {
      EventBus.$emit('disableRedo');
    },
    initFileLayer: function(f) {
      if (!f) return;
      var url = window.URL || window.webkitURL;
      var src = url.createObjectURL(f);
      if (this.imageLayer) {
        this.imageLayer.remove();
        this.image.remove();
      }

      this.imageLayer = new this.paper.Layer();
      this.paper.project.addLayer(this.imageLayer);
      this.image = new this.paper.Raster(src);
      this.image.position = this.paper.view.center;
      this.imageLayer.addChild(this.image);
      this.imageLayer.sendToBack();
    }
  }
}
