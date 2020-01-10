<template>
  <v-content>
    <v-container justify-center grid-list-xs fill-height>
      <v-layout justify-center row wrap>
        <v-flex xs12 lg7>
          <v-flex lg12 class="mx-auto mt-5 mb-3 justify-center">
            <p class="display-2 justify-center"> Notes </p>
          </v-flex>
          <v-divider></v-divider>
                <!-- Cria `v-for` e aplica um `key`, usando uma combinação do slug e index. -->
          <v-flex xs12
            class="mx-auto mt-5 mb-3"
            v-for="(post,index) in posts"
            :key="post.slug + '_' + index">
            <router-link :to="'/blog/' + post.slug">
                <v-flex class="mb-3">
                  <p class="font-weight-black headline text--primary">{{ post.title }}</p>
                  <p class="subtitle-1 font-weight-light text--primary">{{ post.summary }}</p>
                  <p class="caption font-italic font-weight-light"> Posted on: {{ parseDate(post.published) }} </p>
                </v-flex>
            </router-link>
            <v-divider></v-divider>
          </v-flex>
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
    },
    parseDate: function (date) {
      var dateParsed = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
      return dateParsed
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
