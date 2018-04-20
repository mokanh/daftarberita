<template>
  	<v-app id="inspire" class="main-news">
		<v-navigation-drawer
		fixed
		clipped
		class="white"
		app
		v-model="drawer"
		>
			<v-list
				dense
				class="white"
			>
				<template v-for="(item, i) in items">
					<v-layout
						row
						v-if="item.heading"
						align-center
						:key="i"
					>
						<v-flex xs6>
							<v-subheader v-if="item.heading">
								{{ item.heading }}
							</v-subheader>
						</v-flex>
						<!-- <v-flex xs6 class="text-xs-right">
						<v-btn small flat>edit</v-btn>
						</v-flex> -->
					</v-layout>
					<v-divider
						light
						v-else-if="item.divider"
						class="my-3"
						:key="i"
					></v-divider>
					<router-link :to="item.url" class="link-menu">
						<v-list-tile
						>
							<v-list-tile-action>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-tile-action>
							<v-list-tile-content>
								<v-list-tile-title>
									{{ item.text }}
								</v-list-tile-title>
							</v-list-tile-content>
						</v-list-tile>
					</router-link>
				</template>
				<div class="made"> Dibuat dengan  <v-icon class="made-ic">keyboard</v-icon> oleh <a target="_blank" href="https://github.com/mokanh">@mokanh</a>. </div>
				
			</v-list>
		</v-navigation-drawer>
		<v-toolbar color="indigo" dark app fied clipped-left>
			<v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
			<span class="title ml-3 mr-5">Terbaru</span>
			<v-text-field
				class="d-search"
				solo
				light
				flat
				label="Search"
			></v-text-field>
			<v-spacer></v-spacer>
			
			<v-dialog v-model="dialog" fullscreen transition="slide-x-reverse-transition" :overlay="false">
				<v-btn class="m-search" icon dark slot="activator">
					<v-icon>search</v-icon>
				</v-btn>
				<v-card>
					<v-toolbar light color="transparent">
						<v-btn icon @click.native="dialog = false" light>
							<v-icon>arrow_back</v-icon>
						</v-btn>
						<v-text-field solo flat label="Cari...." autofocus v-model="search"></v-text-field>
					</v-toolbar>
					<v-layout row>
						<v-flex xs12 sm8 offset-sm2>
							<v-card class="bg-primary list-wrapper">
								<v-expansion-panel>
									<v-expansion-panel-content v-for="news in filteredList" :key="">
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
							<!-- <vue-content-loading :width="700" :height="70" class="wrapper-skeleton" v-for="n in 10" :key="n">
								<rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
								<rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
								<rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
							</vue-content-loading> -->
						</v-flex>
					</v-layout>

						<!-- <v-tabs
							light
							color="transparent"
							show-arrows
						>
							<v-tabs-slider color="primary"></v-tabs-slider>
							<v-tab
							v-for="i in 8"
							:key="i"
							:href="'#tab-' + i"
							>
							Item {{ i }}
							</v-tab>
						</v-tabs>
						<v-tabs-items>
							<v-tab-item
								v-for="i in 8"
								:key="i"
								:id="'tab-' + i"
							>
							<v-card flat>
							<v-card-text></v-card-text>
							</v-card>
						</v-tab-item>
					</v-tabs-items> -->
				</v-card>
    		</v-dialog>
		</v-toolbar>
		<v-content>
			<router-view/>
		</v-content>
  	</v-app>
</template>

<script>

import axios from 'axios'

	export default {
		data: () => ({
		search: '',
		drawer: null,
		items: [
        	{ heading: 'Kategori' },
			{ icon: 'sort', text: 'Berita Terbaru', url: '/' },
			{ icon: 'language', text: 'Internasional', url: '/internasional'  },
			{ icon: 'business', text: 'Bisnis', url: '/bisnis'  },
			{ icon: 'memory', text: 'Teknologi', url: '/teknologi'  },
			{ icon: 'theaters', text: 'Hiburan', url: '/hiburan'  },
			{ icon: 'directions_run', text: 'Olahraga', url: '/olahraga'  },
			{ icon: 'nature_people', text: 'Sains', url: '/sains'  },
			{ icon: 'fitness_center', text: 'Kesehatan', url: '/kesehatan'  },
        	{ divider: true },
		],
		news: [],
		dialog: false,
		}),
		// props:['news','query','selected'],
		created: function(){
			this.loadNewsTech();
		},
		methods: {
			loadNewsTech: function () {
				// this.status = 'Loading...';
				var news = this;
				axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=c86a9b8048f5437b80f5041873522a45')
				.then(function (response) {
					news.news = response.data.articles;
					// console.log(response.data.articles);
				})
				.catch(function (error) {
					news.news = 'An error occured' + error;
				});
			},
		},
		computed: {
			filteredList() {
				return this.news.filter(news => {
					return news.title.toLowerCase().includes(this.search.toLowerCase())
				})
			}
		}
	}
</script>

<style>
	#keep main .container {
		height: 660px;
	}
	.navigation-drawer__border {
		display: none;
	}
	.text {
		font-weight: 400;
	}
	.main-news
	a{
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
	.made a{
		color: #757575;
		text-decoration: underline;
	}
	.made a:hover{
		color: #3f51b5;
	}
</style>