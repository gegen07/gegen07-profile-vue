<template>
  <v-content>
    <v-layout>
      <v-flex xs12>
        <v-container>
          <p class="display-1" color="brown">{{ $t("education.languages.description") }}</p>
          <v-container>
            <v-card class="elevation-2">
              <v-container>
                <v-layout>
                  <v-flex xs12>
                    <v-card-title class="headline font-weight-light">{{ $t("education.languages.pt_br") }}</v-card-title>
                    <v-card-text>{{ $t("education.languages.text") }}</v-card-text>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-container>
          <v-container>
            <v-card class="elevation-2">
              <v-container>
                <v-layout>
                  <v-flex xs12>
                    <v-card-title class="headline font-weight-light">{{ $t("education.languages.en_US") }}</v-card-title>
                    <v-card-text>{{ $t("education.languages.text") }}</v-card-text>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-container>
        </v-container>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  name: 'languages'
}
</script>

<style>

</style>
