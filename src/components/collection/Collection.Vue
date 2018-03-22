<script src="./collection.js"></script>
<template>
    <div>
        <v-layout row>
            <v-dialog v-model="dialog" persistent max-width="80%" :hideOverlay="true"
                title="Collection">
                <v-btn icon slot="activator">
                    <v-icon>view_module</v-icon>
                </v-btn>
                <v-card>
                    <v-card-title style="background: #E0E0E0" class="elevation-1">
                        <v-layout row>
                            <v-layout column>
                                <div class="title"><strong>ALBUMS</strong></div>
                                <div class="caption">
                                    Select album to work !
                                </div>
                            </v-layout>
                            <v-btn icon @click="dialog = false">
                                <v-icon>close</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-card-title>
                    <div>
                        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
                            <v-layout row wrap>
                                <v-flex v-for="n in 5" :key="n">
                                    <v-layout column style="height: 150px; padding: 8px">
                                        <div style="border: 2px solid rgb(218, 218, 218)" class="flex">

                                        </div>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <div class="ml-3">
                            New Album
                        </div>
                        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
                            <v-layout row wrap>
                                <v-flex
                                  v-for="n in 5"
                                  :key="n"
                                >
                                  <v-card flat tile>
                                    <v-card-media
                                      :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                                      height="150px"
                                    >
                                    </v-card-media>
                                  </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </div>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>
