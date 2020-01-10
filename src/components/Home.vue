<template>
  <v-content>
    <v-container fluid justify-center grid-list-xs text-xs-center fill-height>
      <v-layout
        align-center justify-center row wrap
      >
        <v-flex xs12>
          <v-avatar
            :tile="false"
            :size="256"
            color="grey lighten-4"
          >
            <img src="https://avatars3.githubusercontent.com/u/26390780?v=4" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex xs12>
          <h2 class="display-2 font-weight-condensed-light mb-3">
            Germano Barcelos
          </h2>
          <p class="headline font-weight-thin">
            {{ $t("home.description") }}
          </p>
        </v-flex>
        <v-flex xs2 sm1>
          <v-tooltip bottom>
            <v-btn slot="activator" href="https://www.linkedin.com/in/germano-b-534b6a138/" icon large target="_blank">
              <i class="fab fa-linkedin-in fa-2x"></i>
            </v-btn>
            <span>LinkedIn</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs2 sm1>
          <v-tooltip bottom>
            <v-btn slot="activator" href="https://github.com/gegen07" icon large target="_blank">
              <i class="fab fa-github fa-2x"></i>
            </v-btn>
            <span>Github</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs2 sm1>
          <v-tooltip bottom>
            <v-btn slot="activator" href="https://twitter.com/gegen07" icon large target="_blank">
              <i class="fab fa-twitter fa-2x"></i>
            </v-btn>
            <span>Twitter</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data () {
    return {
      //
    }
  }
}
</script>

<style>

</style>
