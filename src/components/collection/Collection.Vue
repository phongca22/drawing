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
        v-bind:style="{width: list.length * 250 + 'px'}">
        <v-layout row wrap>
          <v-flex
            v-for="card in list"
            :key="card.title" xs4>
            <v-card>
              <v-card-media
                :src="card.image"
                height="140px">
              </v-card-media>
              <div class="grey--text caption ma-2"
                style="text-align: right">1/3</div>
              <v-card-title style="padding-top: 0px; padding-bottom: 0px">
                <div>
                  <h3 class="mb-0">{{card.title}}</h3>
                  <div class="grey--text caption">Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn icon @click="selectCollection(card)">
                  <v-icon color="grey">edit</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="grey">delete</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="grey">share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <!-- <v-layout xs4 column flex align-center>
            <v-btn fab color="primary">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
            <div class="title mt-3 grey--text text--darken-1">
              Create Collection
            </div>
          </v-layout> -->
        </v-layout>
      </v-container>
    </v-menu>
  </div>
</template>
