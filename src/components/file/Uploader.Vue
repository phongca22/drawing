<script src="./uploader.js"></script>
<template>
    <div>
        <v-btn icon @click="selectFile()">
            <v-icon>file_upload</v-icon>
        </v-btn>
        <input type="file" style="display: none" ref="inputElement"
        @change="processFile($event)"/>
    </div>
</template>
