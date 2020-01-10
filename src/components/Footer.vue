<template>
  <v-footer
    color="primary"
    padless>
    <v-layout justify-center row wrap>
      <v-flex 
        xs6
        justify-center
        align-center>
        <v-layout row wrap>
          <v-flex
            xs12
          >
            <v-toolbar-items class="justify-center">

              <p class="grey--text text--lighten-3 my-auto text-xs-right">
                {{ $t("blog.sponsor") }}         
              </p>
              <v-btn flat color="primary" href="https://buttercms.com">
                <v-img
      height="150%"
      width="150%"
      class="my-auto mx-auto text-xs-left" 
      :src="require('@/assets/butter-y.png')"></v-img>
              </v-btn>
            </v-toolbar-items>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
