<script src="./collection.js"></script>
<template>
    <div>
        <v-menu
            v-model="open"
            :close-on-content-click="false"
            bottom
            offset-y>
            <v-btn flat icon slot="activator">
                <v-icon>view_module</v-icon>
            </v-btn>
            <v-container fluid grid-list-md class="grey lighten-4"
                style="width: 750px">
                <v-layout row wrap>
                    <v-flex v-for="card in list" :key="card.id" xs4>
                        <v-card>
                            <v-card-media :src="card.image" height="140px"></v-card-media>
                            <div class="grey--text caption ma-2"
                                style="text-align: right">1/3</div>
                            <v-card-title style="padding-top: 0px; padding-bottom: 0px">
                                <div>
                                    <h3 class="mb-0">{{card.name}}</h3>
                                    <div class="grey--text caption">Southern Highlands of New South Wales, ...</div>
                                </div>
                            </v-card-title>
                            <v-card-actions class="white">
                                <v-spacer></v-spacer>
                                <v-btn icon @click="selectCollection(card)">
                                    <v-icon color="grey">edit</v-icon>
                                </v-btn>
                                <v-btn icon @click="deleteCollection(card)">
                                    <v-icon color="grey">delete</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    <v-flex v-for="card in emptyList" xs4 :key="card">
                        <v-btn icon>
                            <v-icon color="grey">add</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-menu>
    </div>
</template>
