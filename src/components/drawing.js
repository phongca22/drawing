import {EventBus} from './bus/bus.js'
import firebase from 'firebase'

import Palette from './editor/palette/Palette.vue'
import Paper from './editor/paper/Paper.vue'
import Login from './auth/Login.vue'
import Uploader from './file/Uploader.vue'
import Collection from './collection/Collection.vue'
import CollectionUpdater from './collection/Updater.vue'
import Redo from './editor/redo/Redo.vue'
import Undo from './editor/undo/Undo.vue'

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
        Login,
        Uploader,
        Collection,
        CollectionUpdater,
        Redo,
        Undo
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
            EventBus.$emit('paper.undo');
        },
        makeRedo: function() {
            EventBus.$emit('paper.redo');
        }
    }
}
