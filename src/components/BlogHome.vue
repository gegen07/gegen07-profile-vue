<template>
  <v-content>
    <v-container justify-center grid-list-xs fill-height>
      <v-layout align-center justify-center row wrap>
        <h1> Opps... Blog? </h1>
        <!-- Cria `v-for` e aplica um `key`, usando uma combinação do slug e index. -->
        <v-flex xs12
          v-for="(post,index) in posts"
          :key="post.slug + '_' + index">
          <router-link :to="'/blog/' + post.slug">
            <v-card
              class="mx-auto"
              max-width="600"
              :elevation="6">
                <!-- Vincula results usando um `:` -->
                <!-- Usa um `v-if`/`else` caso seja `featured_image` -->
                <v-container>
                  <v-img
                    v-if="post.featured_image"
                    :src="post.featured_image"
                    max-height="200"
                    alt="">
                  </v-img>
                </v-container>
                <!-- <v-img
                  v-else
                  src="http://via.placeholder.com/250x250"
                  alt=""> -->
                  <v-card-title class="headline">{{ post.title }}</v-card-title>
              <v-card-text class="subtitle-1 font-weight-regular text--primary">{{ post.summary }}</v-card-text>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'blog-home',
  data () {
    return {
      page_title: 'Blog',
      posts: []
    }
  },
  methods: {
    getPosts () {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then(res => {
        this.posts = res.data.data
      })
    }
  },
  created () {
    this.getPosts()
  }
}
</script>

<style>

a {
    text-decoration: none
}

</style>
