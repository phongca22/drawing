<template>
    <div class="user-menu-w" v-bind:class="{'is-open': isOpen}">
        <v-layout column>
            <v-layout row align-center>
                <v-avatar size="56px" class="ma-2">
                    <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                        alt="">
                </v-avatar>
                <div class="title flex">Solution Ent</div>
                <v-btn icon v-on:click="close()">
                    <v-icon color="grey">mdi-chevron-left</v-icon>
                </v-btn>
            </v-layout>
            <v-divider></v-divider>
            <v-layout flex>

            </v-layout>
        </v-layout>
    </div>
</template>

<script src="./user-menu.js"></script>
<style src="./user-menu.css"></style>
