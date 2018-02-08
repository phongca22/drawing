import paper from 'paper'
import {EventBus} from '../../bus/bus.js'

export default {
  name: 'white-paper',
  props: ['getColor', 'makeUndo'],
  data: function() {
    return {
      currentPath: null,
      paper: null,
      project: null,
      image: null,
      imageLayer: null,
      editorLayer: null,
      allPaths: [],
      redoList: [],
      imageUploaded: false
    }
  },
  created: function () {
    EventBus.$on('paper.undo', () => {
      var p = this.allPaths.pop();
      p.remove();
      this.redoList.push(p);
      if (this.redoList.length == 3) {
        this.disableUndo();
      }

      this.enableRedo();
    });

    EventBus.$on('paper.redo', () => {
      var p = this.redoList.pop();
      var layer = this.paper.project.layers[0];
      layer.addChild(p);
      this.allPaths.push(p);

      if (this.redoList.length == 0) {
        this.disableRedo();
      }

      this.enableUndo();
    });

    EventBus.$on("paper.upload", (files) => {
      this.initFileLayer(files[0]);
    });

    EventBus.$on("paper.load", (c) => {
      this.loadCollection(c);
    });

    EventBus.$on("paper.create", (data) => {
      this.createCollection(data);
    });

    EventBus.$on("paper.update", () => {
      this.updateCollection();
    });
  },
  mounted: function() {
    this.paper = paper.setup(document.getElementById('canvas'));
    this.project = this.paper.project;
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

    this.editorLayer = new this.paper.Layer({name: "editorLayer"});
    this.project.addLayer(this.editorLayer);
    this.editorLayer.activate();
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
      this.imageUploaded = true;
      var url = window.URL || window.webkitURL;
      var src = url.createObjectURL(f);
      if (!this.imageLayer) {
        this.imageLayer = new this.paper.Layer({name: "bg"});
        this.project.addLayer(this.imageLayer);
      } else {
        this.imageLayer.removeChildren();
      }

      this.image = new this.paper.Raster(src);
      this.image.position = this.paper.view.center;
      this.imageLayer.addChild(this.image);
      this.imageLayer.sendToBack();
    },
    loadCollection: function(collection) {
      this.imageUploaded = false;
      if (collection.image) {
        if (!this.imageLayer) {
          this.imageLayer = new this.paper.Layer({name: "bg"});
          this.project.addLayer(this.imageLayer);
        } else {
          this.imageLayer.removeChildren();
        }

        this.image = new this.paper.Raster(collection.image);
        this.image.position = this.paper.view.center;
        this.imageLayer.addChild(this.image);
        this.imageLayer.sendToBack();
      } else {
        if (this.imageLayer) {
          this.imageLayer.removeChildren();
        }
      }

      if (collection.page.drawFileContentType) {
        this.project.activeLayer.importJSON(collection.page.drawFileContentType);
      } else {
        this.project.activeLayer.removeChildren();
      }
    },
    createCollection: function(collection) {
      var data = this.project.activeLayer.exportJSON();
      var image = null;
      if (this.imageUploaded) {
          collection.image = this.image.toDataURL();
      }

      collection.data = data;
      EventBus.$emit("collection.data", collection);
    },
    updateCollection: function() {
      var data = this.project.activeLayer.exportJSON();
      var image = null;
      if (this.imageUploaded) {
          image = this.image.toDataURL();
      }

      EventBus.$emit("collection.data", {
        drawFileContentType: data,
        image: image
      });
    }
  }
}
