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
      <v-btn icon>
        <v-icon>file_upload</v-icon>
      </v-btn>
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
              <Palette :callback="colorChanged"/>
              <v-menu :nudge-width="100">
                <v-toolbar-title slot="activator" style="margin-left: 0px">
                  <v-btn icon>
                    <v-icon class="grey--text text--darken-1">mode_edit</v-icon>
                  </v-btn>
                  <v-icon style="margin-left: -24px;
                                margin-top: 6px;">arrow_drop_down</v-icon>
                </v-toolbar-title>
              </v-menu>
            </v-layout>
            <div class="flex">
              <v-btn icon>
                <v-icon class="grey--text text--darken-1">undo</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon class="grey--text text--darken-1">redo</v-icon>
              </v-btn>
            </div>
            <div class="flex">
              <v-btn icon>
                <v-icon class="grey--text text--darken-1">account_circle</v-icon>
              </v-btn>
            </div>
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
