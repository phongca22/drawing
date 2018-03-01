<template>
    <div>
        <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        v-model="open"
        top
        offset-y>
        <v-btn flat icon slot="activator">
            <v-icon v-bind:style="{color: getSelectedColor()}">palette</v-icon>
        </v-btn>
        <div style="background: #fff">
            <v-layout row class="mt-3">
                <div class="color-name ml-2"></div>
                <v-layout row v-for="cc in colorNames" :key="cc.name" class="color-box"
                style="color: #000" align-center justify-center>
                <div v-if="cc.accent">
                    <div>A</div>
                    <div>{{cc.accent}}</div>
                </div>
                <div v-else>
                    {{cc.name}}
                </div>
            </v-layout>
        </v-layout>
        <v-layout row v-for="color in colors" :key="color.id">
            <v-layout class="color-name" column align-start justify-center>
                <div class="ml-2">{{color.name}}</div>
            </v-layout>
            <div v-for="c in color.list" class="color-box"
            v-bind:style="{background: c.value}"
            v-bind:class="{selected: isSelectedColor(c)}"
            v-on:click="selectColor(c)">
        </div>
    </v-layout>
</div>
</v-menu>
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

.color-box:hover {
    border-radius: 8px;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
}

.color-box.selected {
    border-radius: 50% !important;
}

.color-name {
    width: 85px;
}
</style>
