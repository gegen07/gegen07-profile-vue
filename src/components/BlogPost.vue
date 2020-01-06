<template>
  <v-content>
    <v-container>
      <div id="blog-post">
        <h1 class="font-title">{{ post.data.title }}</h1>
        <p>Posted by {{ post.data.author.first_name }} {{ post.data.author.last_name }} on {{ parseDate(post.data.published) }} </p>
        <div v-html="post.data.body"></div>
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
      </div>
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
      var dateParsed = new Date(date).toLocaleDateString('pt-BR', {
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

@import url('https://fonts.googleapis.com/css?family=Lato:900&display=swap')

.font-title {
  font-family: 'Lato', sans-serif
}

</style>
