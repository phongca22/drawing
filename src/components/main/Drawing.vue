<template>
    <v-app>
        <v-layout row>
            <UserMenu />
            <v-layout column class="drawing-main-sct">
                <div class="drawing-overlay" v-if="!showMenuBtn"></div>
                <v-toolbar dark color="primary">
                    <v-toolbar-side-icon v-show="showMenuBtn" @click="openMenu"></v-toolbar-side-icon>
                    <v-toolbar-title class="white--text">New Album</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <Collection/>
                </v-toolbar>
                <v-layout column flex class="drawing-paper-w">
                    <v-layout flex column class="ma-3 elevation-2 drawing-paper-panel">
                        <v-layout column flex>
                            <div>
                                <v-layout row align-center justify-end>
                                    <Undo></Undo>
                                    <Redo></Redo>
                                </v-layout>
                            </div>
                            <div>
                                <v-divider></v-divider>
                            </div>
                            <v-layout flex>
                                <Paper :getColor="getColor"></Paper>
                            </v-layout>
                        </v-layout>
                    </v-layout>
                </v-layout>
            </v-layout>
        </v-layout>
    </v-app>
</template>

<script src="./drawing.js"></script>
<style src="./drawing.css"></style>
