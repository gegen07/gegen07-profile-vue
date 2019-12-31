<template>
  <v-content>
    <v-container>
      <div id="blog-home">
        <h1>{{  }}</h1>
        <!-- Cria `v-for` e aplica um `key`, usando uma combinação do slug e index. -->
        <div
          v-for="(post,index) in posts"
          :key="post.slug + '_' + index">
          <router-link :to="'/blog/' + post.slug">
            <v-card
              class="mx-auto"
              max-width="400">
                <!-- Vincula results usando um `:` -->
                <!-- Usa um `v-if`/`else` caso seja `featured_image` -->
                <v-img
                  v-if="post.featured_image"
                  :src="post.featured_image"
                  alt="">
                </v-img>
                <!-- <v-img
                  v-else
                  src="http://via.placeholder.com/250x250"
                  alt=""> -->
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-text class="text--primary">{{ post.summary }}</v-card-text>
            </v-card>
          </router-link>
        </div>
      </div>
    </v-container>
  </v-content>
</template>

<script>
  import { butter } from '@/buttercms'

  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
  }
</script>

<style>

</style>