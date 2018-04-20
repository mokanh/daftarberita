<template>

  	<div class="news">
		<v-layout row>
			<v-flex xs12 sm8 offset-sm2>
				<v-card class="bg-primary list-wrapper">
					<v-expansion-panel>
						<v-expansion-panel-content v-for="news in news" :key="">
						<div slot="header" class="news-wrapper">
							<div >
								<img class="img-news" :src="news.urlToImage" alt="">
							</div>
							<div>
								<div class="news-title">{{ news.title }}</div>
								<div class="news-source">{{ news.source.name }}</div>
							</div>
						</div>
						<v-card>
							<v-card-text>
								{{ news.description }} <br> <br>
								<a target="_blank" :href="news.url"> Lihat Selengkapnya </a>
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
import axios from 'axios'
// import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'

	export default {
		data () {
			return {
				// show: false,
				news: [],
				random: [],

			}
		},
		created: function() {
			this.loadNewsTech();
			// this.loadNewsRandom();
		},
		methods: {
			loadNewsTech: function () {
				// this.status = 'Loading...';
				var news = this;
				axios.get('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=c86a9b8048f5437b80f5041873522a45')
				.then(function (response) {
					news.news = response.data.articles;
					// console.log(response.data.articles);
				})
				.catch(function (error) {
					news.news = 'An error occured' + error;
				});
			},
			// loadNewsRandom: function () {
			// 	// this.status = 'Loading...';
			// 	var news = this;
			// 	axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c86a9b8048f5437b80f5041873522a45')
			// 	.then(function (response) {
			// 		news.random = response.data.articles;
			// 		// console.log(response.data.articles);
			// 	})
			// 	.catch(function (error) {
			// 		news.random = 'An error occured' + error;
			// 	});
			// },
		}
	}

</script>
