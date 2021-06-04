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
                <v-select
                  v-model="selectedItems"
                  :items="categories"
                  item-text="name" item-value="slug"
                  prepend-icon="filter_list"
                  small-chips
                  label="Tags"
                  persistent-hint
                  clearable
                >
                  <template v-slot:selection="data">
                    <v-chip
                      :selected="data.selected"
                      :key="JSON.stringify(data.item)"
                      @input="data.item"
                    >
                      <strong>{{ data.item.name }}</strong>&nbsp;
                    </v-chip>
                  </template>
                </v-select>
              </v-flex>
              <v-flex xs2>
                <v-btn @click="filterCategories()">{{ $t("blogHome.buttonFilter") }}</v-btn>
              </v-flex>
            <!-- TODO: Create a search for keywords. -->
              <v-flex xs12
                class="mx-auto mt-0 mb-3"
                v-for="(post,index) in posts"
                :key="post.slug + '_' + index">
                <router-link style="display: inline-block;text-decoration:none;" :to="'/blog/' + post.slug">
                    <v-flex class="mb-3">
                      <p class="font-weight-black headline text--primary">{{ post.title }}</p>
                      <p class="subtitle-1 font-weight-light text--primary">{{ post.summary }}</p>
                      <p class="caption font-italic font-weight-light">  {{ $t("blog.posted") }} {{ parseDate(post.published) }} </p>
                    </v-flex>
                </router-link>
                <v-divider></v-divider>
              </v-flex>
              <v-flex class="text-xs-center">
                <v-pagination
                  v-model="pagination.page"
                  :length="Math.ceil(pagination.total/pagination.perpage)"
                ></v-pagination>
              </v-flex>
            </v-layout>
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
      metadata: {},
      page_title: 'Blog',
      posts: [],
      categories: [],
      selectedItems: [],
      pagination: {
        page: 1,
        total: 1,
        perpage: 10
      }
    }
  },
  methods: {
    filterCategories: function () {
      if (this.selectedItems === undefined || this.selectedItems.length === 0) {
        butter.post.list({
          page: this.pagination.page,
          page_size: this.pagination.perpage
        }).then(res => {
          this.pagination.total = res.data.meta.count
          this.posts = res.data.data
        })
      } else {
        let filterType = this.selectedItems
        console.log(filterType)
        butter.post.list({
          page: this.pagination.page,
          page_size: this.pagination.perpage,
          category_slug: filterType
        }).then(res => {
          this.pagination.total = res.data.meta.count
          this.posts = res.data.data
          console.log(filterType)
        })
      }
    },
    getPosts () {
      butter.post.list({
        page: this.pagination.page,
        page_size: this.pagination.perpage
      }).then(res => {
        this.pagination.total = res.data.meta.count
        this.posts = res.data.data
      })
    },
    getCategories () {
      butter.category.list()
        .then(res => {
          this.categories = res.data.data
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
  mounted: function () {
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
