<template>
<v-app>
  <v-layout column>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_horiz</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>gesture</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>fullscreen</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>tonality</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>photo</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
      <Uploader/>
      <v-btn icon>
        <v-icon>view_module</v-icon>
      </v-btn>
    </v-toolbar>
    <v-flex style="background: #EBE7E4" class="layout column">
      <div class="ma-3 elevation-2 flex layout column" style="background: #fff">
        <v-layout column flex>
          <Paper :getColor="getColor"></Paper>
        </v-layout>
        <div>
          <v-divider></v-divider>
          <v-layout row>
            <v-layout row flex>
              <Palette :colorChanged="colorChanged" :makeUndo="makeUndo"/>
            </v-layout>
            <div>
              <v-btn icon v-on:click="makeUndo()" :disabled="disableUndo">
                <v-icon class="grey--text text--darken-1">undo</v-icon>
              </v-btn>
              <v-btn icon v-on:click="makeRedo()" :disabled="disableRedo">
                <v-icon class="grey--text text--darken-1">redo</v-icon>
              </v-btn>
            </div>
            <v-layout row class="flex" align-center justify-end>
              <LoginBtn />
            </v-layout>
          </v-layout>
        </div>
      </div>
    </v-flex>
  </v-layout>
</v-app>
</template>

<script src="./drawing.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
