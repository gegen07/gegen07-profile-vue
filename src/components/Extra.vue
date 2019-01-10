<template>
  <v-content>
    <v-container>
      <p class="display-2" color="brown">Formação Extra</p>
      <v-container>
        <p class="headline font-weight-regular">Cursos com Certificado</p>
        <v-container>
          <v-card class="elevation-2">
            <v-container>
              <v-layout row>
                <v-card-title class="headline font-weight-light">M101J: MongoDB for Java Developers</v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn flat target="_blank" href="https://university.mongodb.com/course_completion/6c178ebb-0cb6-4eb1-988a-114b219d/printable">Ver Certificado</v-btn>
                  <v-btn flat target="_blank" href="https://github.com/gegen07/Blog-M101J">Github</v-btn>
                </v-card-actions>
              </v-layout>
            </v-container>
          </v-card>
        </v-container>
        <v-container>
          <v-card class="elevation-2">
            <v-container>
              <v-layout row>
                <v-card-title class="headline font-weight-light">SQL</v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn flat target="_blank" href="https://drive.google.com/open?id=1iV0L7V5XUAJossLjwt4kI7oU_dqAnSAn">Ver Certificado</v-btn>
                </v-card-actions>
              </v-layout>
            </v-container>
          </v-card>
        </v-container>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <p class="headline font-weight-regular">Cursos sem Certificado</p>
        <v-container>
          <v-card class="elevation-2">
            <v-container>
              <v-layout row>
                <v-card-title class="headline font-weight-light">Especialização em Estruturas de Dados e Algoritmos
                - Universidade da Califórnia, San Diego & National Research University Higher School of Economics</v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn flat target="_blank" href="https://github.com/gegen07/DSA-UCS">Github</v-btn>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-layout>
            </v-container>
          </v-card>
          <v-slide-y-transition>
            <v-container v-show="show">
              <v-card class="elevation-2">
                <v-container>
                  <v-layout row>
                    <v-card-title class="headline font-weight-light">Algorithmic Toolbox</v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn flat target="_blank" href="https://github.com/gegen07/DSA-UCS/tree/master/Algorithmic%20Toolbox">Github</v-btn>
                    </v-card-actions>
                  </v-layout>
                </v-container>
              </v-card>
            </v-container>
          </v-slide-y-transition>
        </v-container>
      </v-container>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'Extra',
  data: () => ({
    show: false
  })
}
</script>

<style>

</style>
