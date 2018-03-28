<template>
    <div>
        <v-btn icon v-on:click="makeUndo()" :disabled="disableUndo">
            <v-icon class="grey--text text--darken-1">undo</v-icon>
        </v-btn>
    </div>
</template>

<script src="./undo.js"></script>
