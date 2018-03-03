import {EventBus} from '../bus/bus.js'

export default {
    name: 'uploader',
    methods: {
        selectFile: function() {
            this.$refs.inputElement.click();
        },
        processFile: function(event) {
            EventBus.$emit("paper.upload", event.target.files);
            this.$refs.inputElement.value = '';
        }
    }
}
