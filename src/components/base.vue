<template>
  <v-app id="inspire" class="main-news">
    <v-navigation-drawer fixed clipped class="white" app v-model="drawer">
      <v-list dense class="white">
        <div>
          <v-layout row v-if="heading" align-center>
            <v-flex xs6>
              <v-subheader v-if="heading">{{ heading }}</v-subheader>
            </v-flex>
          </v-layout>
        </div>
        <div v-for="(nav, n) in navs" :key="n">
          <router-link :to="nav.url" class="link-menu">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>{{ nav.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ nav.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </div>
        <v-divider light class="my-3"></v-divider>
        <div class="made">
          Dibuat dengan
          <v-icon class="made-ic">keyboard</v-icon>oleh
          <a target="_blank" href="https://github.com/mokanh">@mokanh</a>.
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark app fied clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">DaftarBerita</span>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    search: "",
    drawer: null,
    heading: "Kategori",
    divider: true,
    titlePage: "Terbaru",
    navs: [
      { icon: "sort", text: "Berita Terbaru", url: "/" },
      { icon: "business", text: "Bisnis", url: "/business" },
      { icon: "memory", text: "Teknologi", url: "/technology" },
      { icon: "theaters", text: "Hiburan", url: "/entertainment" },
      { icon: "directions_run", text: "Olahraga", url: "/sports" },
      { icon: "nature_people", text: "Sains", url: "/science" },
      { icon: "fitness_center", text: "Kesehatan", url: "/health" }
    ],
    news: [],
    dialog: false,
    result: false
  }),
  methods: {}
};
</script>

<style>
.wp-result-d {
  width: 50%;
  position: relative;
}
.list-result-d {
  position: absolute !important;
  width: 100% !important;
  background: #fff !important;
  color: rgba(0, 0, 0, 0.87) !important;
}
.list-result-d .list__tile {
  height: 70px;
  border-bottom: 1px solid #eee;
}
.list-result-d .avatar {
  border-radius: 0 !important;
  width: 85px !important;
  height: 55px !important;
}
.list-result-d .avatar img {
  border-radius: 0 !important;
}
.list-result-d a {
  color: rgba(0, 0, 0, 0.87);
}
#keep main .container {
  height: 660px;
}
.navigation-drawer__border {
  display: none;
}
.text {
  font-weight: 400;
}
.main-news a {
  text-decoration: none;
}
.main-news .dialog__container {
  margin-right: 5px !important;
}
.made {
  font-size: 12px;
  margin-left: 15px;
  color: #757575;
}
.made-ic {
  font-size: 20px !important;
}
.made a {
  color: #757575;
  text-decoration: underline;
}
.made a:hover {
  color: #3f51b5;
}
.s-result {
  padding: 10px 25px;
  background: #fff;
  font-size: 12px;
  color: #757575;
}
span.highlight {
  color: #3f51b5;
}
</style>