<template>
  <div>
    <v-btn flat icon @click="drawer = !drawer">
      <v-icon class="grey--text text--darken-1">palette</v-icon>
    </v-btn>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      absolute
      hide-overlay
      width="500"
      >
      <div>
        <v-layout row v-for="color in colors" :key="color.id">
          <div class="color-name">
            {{color.name}}
          </div>
          <div v-for="c in color.list" class="color-box"
            v-bind:style="{background: c.value}">
            &nbsp;
          </div>
        </v-layout>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script src="./palette.js"></script>
<style>
  .color-box {
    color: #fff;
    cursor: pointer;
    margin: .5px;
    outline: 0;
    height: 33px;
    width: 33px;
    text-align: center;
  }

  .color-name {
    width: 85px;
  }
</style>
