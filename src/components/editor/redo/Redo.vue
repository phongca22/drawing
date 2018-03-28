<template>
    <div>
        <v-btn icon v-on:click="makeRedo()" :disabled="disableRedo">
            <v-icon class="grey--text text--darken-1">redo</v-icon>
        </v-btn>
    </div>
</template>

<script src="./redo.js"></script>
