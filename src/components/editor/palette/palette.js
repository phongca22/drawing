import COLORS from 'vuetify/es5/util/colors'

export default {
  name: 'palette',
  data () {
    return {
      drawer: false,
      colorNames: [{
        name: '50',
        pick: 'lighten5'
      }, {
        name: '100',
        pick: 'lighten4'
      }, {
        name: '200',
        pick: 'lighten3'
      }, {
        name: '300',
        pick: 'lighten2'
      }, {
        name: '400',
        pick: 'lighten1'
      }, {
        name: '500',
        pick: 'base'
      }, {
        name: '600',
        pick: 'darken1'
      }, {
        name: '700',
        pick: 'darken2'
      }, {
        name: '800',
        pick: 'darken3'
      }, {
        name: '900',
        pick: 'darken4'
      }, {
        name: 'A100',
        pick: 'accent1',
        isAccent: true
      }, {
        name: 'A200',
        pick: 'accent2'
      }, {
        name: 'A400',
        pick: 'accent3'
      }, {
        name: 'A700',
        pick: 'accent4'
      }]
    }
  },
  computed: {
    colors: function() {
      var order = ['red'];
      var map = this.colorNames;
      var result = [];
      var id = 1;
      for (var i = 0; i < order.length; i++) {
        for (var key in COLORS) {
          if (key == order[i]) {
            var c = {id: id++, name: key, list: []};
            for (var k = 0; k < map.length; k++) {
              c.list.push({
                name: map[k].name,
                value: COLORS[key][map[k].pick]
              });
            }

            result.push(c)
            break;
          }
        }
      }

      console.log(result)
      return result;
    }
  }
}
