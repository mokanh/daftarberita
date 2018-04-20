<template>  
  <div>
    <v-layout class="mt-5" transition="scale-transition" origin="center center">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            src="https://images.unsplash.com/photo-1500531279542-fc8490c8ea4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=add00823c6d712c149aa86c82f02c21e&auto=format&fit=crop&w=3451&q=80"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br> 
              <p>Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit</p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
</script>

<style scoped>
.mt-5{
  margin-top: 5em;
}
</style>