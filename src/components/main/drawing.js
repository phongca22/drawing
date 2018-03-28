import {EventBus} from '../bus/bus.js'
import firebase from 'firebase'

import Palette from '../editor/palette/Palette.vue'
import Paper from '../editor/paper/Paper.vue'
import Collection from '../collection/Collection.vue'
import Redo from '../editor/redo/Redo.vue'
import Undo from '../editor/undo/Undo.vue'
import UserMenu from '../panel/UserMenu.vue'

export default {
    name: 'drawing',
    data: function() {
        return {
            color: {value: "#000"},
            disableUndo: true,
            disableRedo: true,
            showMenuBtn: true
        }
    },
    components: {
        Palette,
        Paper,
        Collection,
        Redo,
        Undo,
        UserMenu
    },
    created: function() {
        EventBus.$on('user-menu.closed', () => {
            this.showMenuBtn = true;
        });

        EventBus.$on('user-menu.opened', () => {
            this.showMenuBtn = false;
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
            EventBus.$emit('paper.undo');
        },
        makeRedo: function() {
            EventBus.$emit('paper.redo');
        },
        openMenu: function() {
            EventBus.$emit('user-menu.open');
        }
    }
}
