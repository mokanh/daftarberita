// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import 	{
	Vuetify,
	VApp,
	VNavigationDrawer,
	VFooter,
	VList,
	VBtn,
	VCard,
	VIcon,
	VDivider,
	VGrid,
	VToolbar,
	VTabs,
	VTextField,
	VDialog,
	VSubheader,
	VExpansionPanel,
	transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
	components: {
		VApp,
		VNavigationDrawer,
		VFooter,
		VList,
		VBtn,
		VCard,
		VIcon,
		VDivider,
		VGrid,
		VToolbar,
		VTabs,
		VTextField,
		VDialog,
		VSubheader,
		VExpansionPanel,
		transitions
	},
	theme: {
		primary: '#3f51b5',
		secondary: '#424242',
		accent: '#82B1FF',
		error: '#FF5252',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FFC107'
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */


// const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c86a9b8048f5437b80f5041873522a45";

new Vue({
    el: '#app', 
    router, 
    components: { App }, 
	template: '<App/>' ,
	// data: {
	// 	news: 'hello'
	// }
});


// new Vue({
// 	el: '#app',
// });

// var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
// $.getJSON( flickerAPI, {
// 	tags: "mount rainier",
// 	tagmode: "any",
// 	format: "json"
// })
// .done(function( data ) {
// 	$.each( data.items, function( i, item ) {
// 		$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
// 		if ( i === 3 ) {
// 			return false;
// 		}
// 	});;
// });
