import {EventBus} from '../bus/bus.js'

export default {
    name: 'collectionUpdater',
    data() {
        return {
            dialog: false,
            collection: null,
            hasCollection: false,
            name: '',
            des: '',
            collectionId: ''
        }
    },
    methods: {
        create: function() {
            EventBus.$emit('paper.create', {
                name: this.name,
                des: this.des,
                collectionId: this.collectionId
            });

            this.dialog = false;
            this.name = '';
            this.des = '';
            this.collectionId = '';
        },
        update: function() {
            EventBus.$emit('paper.update');
        }
    },
    created: function() {
        EventBus.$on("paper.load", (collection) => {
            this.hasCollection = collection ? true : false;
            this.collection = collection;
        });

        EventBus.$on("paper.clean", (collection) => {
            this.hasCollection = false;
            this.collection = null;
        });
    }
}
