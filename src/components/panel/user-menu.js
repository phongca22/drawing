import {EventBus} from '../bus/bus.js'

export default {
    name: 'user-menu',
    props: [],
    data () {
        return {
            isOpen: false
        }
    },
    methods: {
        close: function() {
            this.isOpen = false;
            EventBus.$emit("user-menu.closed");
        }
    },
    created: function() {
        EventBus.$on("user-menu.open", () => {
            this.isOpen = true;
            EventBus.$emit("user-menu.opened");
        });

        EventBus.$on("user-menu.close", () => {
            this.close();
        });
    }
}
