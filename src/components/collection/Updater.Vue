<script src="./updater.js"></script>
<template>
    <div>
        <v-layout row>
            <div v-if="hasCollection">
                <span>{{collection.title}}</span>
                <v-btn icon @click="update()" title="Update">
                    <v-icon color="grey">save</v-icon>
                </v-btn>
            </div>
            <v-dialog v-model="dialog" persistent max-width="500px"
            title="Save">
            <v-btn icon slot="activator">
                <v-icon color="grey">add</v-icon>
            </v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline">Collection Info</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Title" v-model="title" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Description" v-model="des"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat @click.native="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="create()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</div>
</template>
