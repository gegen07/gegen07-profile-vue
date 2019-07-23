<template>
  <v-content>
    <v-container class="hidden-xs-only">
      <p class="display-1" color="brown">{{ $t("education.academic.description")  }}</p>
      <v-timeline>
        <v-timeline-item
          color="indigo lighten-2"
          medium
        >
          <span class="headline" slot="opposite">{{ $t("education.academic.grade-course.time") }}</span>
          <v-card class="elevation-2">
            <v-container>
              <v-card-title class="headline">{{ $t("education.academic.grade-course.description")  }}</v-card-title>
            </v-container>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          color="indigo lighten-2"
          medium
        >
          <span class="headline" slot="opposite">2016-2018</span>
          <v-card class="elevation-2">
            <v-container>
              <v-card-title class="headline">{{ $t("education.academic.high-school-grade")  }}</v-card-title>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <v-container class="hidden-sm-and-up">
      <p class="display-1" color="brown">Formação Acadêmica</p>
      <v-container>
        <v-card class="elevation-2">
          <v-container>
            <v-layout row wrap>
              <v-card-title class="headline">{{ $t("education.academic.grade-course")  }}</v-card-title>
              <v-card-text class="body-1 font-weight-regular">2019 - 2023</v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-container>
      <v-container>
        <v-card class="elevation-2">
          <v-container>
            <v-layout row wrap>
              <v-card-title class="headline">{{ $t("education.academic.high-school-grade")  }}</v-card-title>
              <v-card-text class="body-1 font-weight-regular">2016 - 2018</v-card-text>
            </v-layout>
          </v-container>
        </v-card>
      </v-container>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'education'
}
</script>

<style>

</style>
