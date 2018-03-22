import {EventBus} from '../bus/bus.js'
import CollectionService from './collection.service.js'
import PageService from './page.service.js';

export default {
    name: 'collection',
    data() {
        return {
            dialog: false,
            size: 'lg'
        }
    },
    created: function() {
        EventBus.$on("collection.data", (co) => {
            if (this.selectedCollection) {
                this.updateCollection(co);
            } else {
                this.createCollection(co);
            }
        });
    },
    methods: {

    }
}
