<template>
  <v-content>
    <v-container justify-center grid-list-xs fill-height>
      <v-layout justify-center row wrap>
        <v-flex xs12 lg8 class="mt-5" id="blog-post">
          <h1 class="display-">{{ post.data.title }}</h1>
          <v-spacer></v-spacer>
          <p> Posted on: {{ parseDate(post.data.published) }} </p>
          <v-divider></v-divider>
          <div class="mt-5" v-html="post.data.body"></div>
          <router-link
            v-if="post.meta.previous_post"
            :to="/blog/ + post.meta.previous_post.slug"
            class="button">
            {{ post.meta.previous_post.title }}
          </router-link>
          <router-link
            v-if="post.meta.next_post"
            :to="/blog/ + post.meta.next_post.slug"
            class="button">
            {{ post.meta.next_post.title }}
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { butter } from '@/buttercms'
export default {
  name: 'blog-post',
  data () {
    return {
      post: {}
    }
  },
  methods: {
    getPost () {
      butter.post.retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data
        }).catch(res => {
          console.log(res)
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
  watch: {
    $route: {
      immediate: true,
      handler (to, from) {
        this.getPost()
      }
    }
  },
  created () {
    this.getPost()
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Lato:900&display=swap');

</style>
