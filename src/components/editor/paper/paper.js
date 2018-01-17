import paper from 'paper';
export default {
  name: 'white-paper',
  props: ['getColor'],
  data: function() {
    return {
      currentPath: null,
      paper: null
    }
  },
  mounted: function() {
    this.paper = paper.setup(document.getElementById('canvas'));
    var thiz = this;
    this.paper.view.onMouseDown = function(ev) {
      thiz.currentPath = new paper.Path({strokeColor: thiz.getColor().value});
    }

    this.paper.view.onMouseDrag = function(ev) {
      thiz.currentPath.add(ev.point);
    }
  }
}
