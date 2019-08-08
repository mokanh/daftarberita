<template>
  <div class="news">
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-card class="bg-primary list-wrapper">
          <h2
            class="content-title"
            v-if="titlePage"
          >{{titlePage.charAt(0).toUpperCase() + titlePage.slice(1)}}</h2>
          <h2 class="content-title" v-else>Terbaru</h2>

          <v-expansion-panel>
            <v-expansion-panel-content v-for="n in news" :key="n.id">
              <div slot="header" class="news-wrapper">
                <div
                  class="news-img"
                  v-bind:style="{ backgroundImage: 'url(' + n.urlToImage + ')' }"
                ></div>
                <div class="news-headline">
                  <div class="news-title">{{ n.title }}</div>
                  <div class="news-source">
                    {{ n.source.name }} |
                    {{ n.publishedAt | moment("from") }}
                  </div>
                </div>
              </div>
              <v-card>
                <v-card-text>
                  <p>{{ n.description }}</p>
                  <div class="text-right">
                    <a class="link-next" target="_blank" :href="n.url">
                      Lihat Selengkapnya >
                      <!-- <v-icon style="color: #3f51b5;">arrow_right_alt</v-icon> -->
                    </a>
                  </div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      news: [],
      titlePage: "",
      search: ""
    };
  },
  created: function() {
    this.loadNews();
  },
  watch: {
    $route: ["loadNews", "pageTitle"]
  },
  methods: {
    loadNews: function() {
      let news = this;
      let api = "https://newsapi.org/v2/top-headlines";
      let paramCat = this.$route.params.category;
      axios
        .get(api, {
          params: {
            apiKey: "c86a9b8048f5437b80f5041873522a45",
            country: "id",
            category: paramCat
          }
        })
        .then(function(response) {
          news.news = response.data.articles;
        })
        .catch(function(error) {
          news.news = "An error occured" + error;
        });
    },
    pageTitle: function() {
      this.titlePage = this.$route.params.category;
    },
    readRef: function() {
      console.log(this.$refs.inputSearch);
    }
  },
  filters: {
    removeChars: function(string) {
      var indexChar = string.indexOf("chars]");
      return string.substring(0, indexChar);
    },
    lastWordRmv: function(string) {
      var lastIndex = string.lastIndexOf(" ");
      return string.substring(0, lastIndex);
    }
  }
};
</script>
<style>
@media (max-width: 568px) {
  .news {
    padding: 0 1rem;
  }
  .news .expansion-panel__header {
    padding: 0 !important;
    padding-right: 1rem !important;
  }
  .news-img {
    min-width: 8rem;
    height: auto;
  }
  .news-title {
    font-size: 13px;
  }
  .news-source {
    font-size: 11px !important;
  }
  .card__text {
    margin-top: 1rem;
    padding: 0 1rem;
    padding-top: 0;
    padding-bottom: 0;
    padding-bottom: 1rem;
    font-size: 13px;
  }
}
</style>
