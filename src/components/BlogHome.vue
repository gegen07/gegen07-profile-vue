<template>
  <v-layout>
    <v-content>
      <v-container justify-center grid-list-xs fill-height>
        <v-layout justify-center row wrap>
          <v-flex xs12 lg7>
            <v-flex lg12 class="mx-auto mt-5 mb-3 justify-center">
              <p class="display-2 justify-center"> {{ $t("blog.head") }} </p>
            </v-flex>
            <v-divider></v-divider>
            <v-layout row wrap>
              <v-flex xs10>
                <v-combobox
                  v-model="selectedItems"
                  :items="categories"
                  item-text="name" item-value="name"
                  label="Tags"
                  chips
                  clearable
                  prepend-icon="filter_list"
                  solo
                  single  
                >
                  <template v-slot:selection="data">
                    <v-chip
                      :selected="data.selected"
                      :key="JSON.stringify(data.item)"
                      close
                      @input="remove(data.item)"
                    >
                      <strong>{{ data.item.name }}</strong>&nbsp;
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
              <v-flex xs2>
                <v-btn @click="filterCategories()">Filter</v-btn>
              </v-flex>
            </v-layout>
            <!-- TODO: Create a search for keywords. -->
            <v-flex xs12
              class="mx-auto mt-5 mb-3"
              v-for="(post,index) in posts"
              :key="post.slug + '_' + index">
              <router-link :to="'/blog/' + post.slug">
                  <v-flex class="mb-3">
                    <p class="font-weight-black headline text--primary">{{ post.title }}</p>
                    <p class="subtitle-1 font-weight-light text--primary">{{ post.summary }}</p>
                    <p class="caption font-italic font-weight-light">  {{ $t("blog.posted") }} {{ parseDate(post.published) }} </p>
                  </v-flex>
              </router-link>
              <v-divider></v-divider>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-layout>
  
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'blog-home',
  data () {
    return {
      page_title: 'Blog',
      posts: [],
      categories: [],
      selectedItems: []
    }
  },
  methods: {
    remove (item) {
      this.categories.splice(this.categories.indexOf(item), 1)
      this.categories = [...this.categories]
    },
    filterCategories: function () {
      console.log(this.selectedItems)
      if (this.selectedItems == undefined || this.selectedItems.length==0) {
        butter.post.list({
          page: 1,
          page_size: 5
        }).then(res => {
          this.posts = res.data.data
        })
      } else {
        let filterType = this.selectedItems.slug
        butter.post.list({
          page: 1,
          page_size: 5,
          category_slug: filterType
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    getPosts () {
      butter.post.list({
        page: 1,
        page_size: 5
      }).then(res => {
        this.posts = res.data.data
      })
    },
    getCategories() {
      butter.category.list()
        .then(res => {
          console.log('List of Categories:')
          this.categories=res.data.data
          console.log(this.categories)
        })
    },
    getPostsByCategory(category) {
      butter.category.retrieve(category, {
          include: 'recent_posts'
        })
        .then(res => {
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
    this.getCategories()
  }
}
</script>

<style>

a {
    text-decoration: none
}

</style>
