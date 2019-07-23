<template>
  <v-content>
    <v-container class="hidden-xs-only">
      <p class="display-1" color="brown">{{ $t("experience.description") }}</p>
      <v-timeline>
        <v-timeline-item
          color="indigo lighten-2"
          medium
        >
          <span class="headline" slot="opposite">{{ $t("experience.exp1.time") }}</span>
          <v-card class="elevation-2">
            <v-container>
              <v-card-title class="headline">{{ $t("experience.exp1.name") }}</v-card-title>
              <v-card-text class="text-xs-justify">
                {{ $t("experience.exp1.description") }}
              </v-card-text>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>

    <v-container class="hidden-sm-and-up">
      <p class="display-1">Experiência Profissional</p>
      <v-card class="elevation-2">
        <v-container>
          <v-layout row wrap>
            <v-card-title class="headline">{{ $t("experience.exp1.name") }}</v-card-title>
            <v-card-text class="body-1 font-weight-light">{{ $t("experience.exp1.time") }}</v-card-text>
            <v-card-text class="text-xs-justify">
              {{ $t("experience.exp1.description") }}
            </v-card-text>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'experience'
}
</script>

<style>

</style>
