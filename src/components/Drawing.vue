<template>
    <v-app>
        <v-layout column>
            <v-toolbar dark color="primary">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title class="white--text">New Album</v-toolbar-title>
                <v-spacer></v-spacer>
                <Collection/>
            </v-toolbar>
            <v-flex style="background: #EBE7E4" class="layout column">
                <div class="ma-3 elevation-2 flex layout column" style="background: #fff">
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
                </div>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script src="./drawing.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
