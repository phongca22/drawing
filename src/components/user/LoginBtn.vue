<script src="./login-btn.js"></script>
<template>
  <div>
    <v-menu
      offset-x
      :close-on-content-click="false"
      :nudge-width="200"
      v-model="menu"
      v-if="auth"
    >
      <v-avatar size="36px" class="mr-3" slot="activator">
        <img :src="auth.photoURL" alt="">
      </v-avatar>
      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="auth.photoURL" alt="">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{auth.displayName}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="signout">Sign Out</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
    <v-menu
      offset-x
      :close-on-content-click="false"
      :nudge-width="200"
      v-model="menu"
      v-if="!auth"
    >
      <v-btn icon slot="activator">
        <v-icon class="grey--text text--darken-1">account_circle</v-icon>
      </v-btn>
      <v-card>
        <v-list>
          <v-list-tile v-for="item in providers" :key="item.id" @click="selectProvider(item)">
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
