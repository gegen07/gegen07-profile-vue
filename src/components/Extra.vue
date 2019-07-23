<template>
  <v-content>
    <v-layout>
      <v-flex xs12>
        <v-container>
          <p class="display-1" color="brown">{{ $t("education.extra.description") }}</p>
          <v-container>
            <p class="headline font-weight-regular">{{ $t("education.extra.with-certificate")  }}</p>
            <v-card class="elevation-2">
              <v-container>
                <v-layout>
                  <v-flex xs12>
                    <v-card-title class="headline font-weight-light">M101J: MongoDB for Java Developers</v-card-title>
                    <v-card-actions>
                      <v-layout row wrap>
                        <v-btn xs12 sm1 flat target="_blank" href="https://university.mongodb.com/course_completion/6c178ebb-0cb6-4eb1-988a-114b219d/printable">{{ $t("education.extra.btn1-see")  }}</v-btn>
                      </v-layout>
                    </v-card-actions>
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
                    <v-card-title class="headline font-weight-light">SQL</v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn flat target="_blank" href="https://drive.google.com/open?id=1iV0L7V5XUAJossLjwt4kI7oU_dqAnSAn">{{ $t("education.extra.btn1-see")  }}</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="headline font-weight-regular">{{ $t("education.extra.no-certificate.description")  }}</p>
            <v-card class="elevation-2">
              <v-container>
                <v-layout>
                  <v-flex xs12>
                    <v-card-title class="headline font-weight-light">{{ $t("education.extra.no-certificate.c1-specialization-DSA")  }}</v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-layout row wrap>
                        <v-btn flat target="_blank" href="https://github.com/gegen07/DSA-UCS">{{ $t("education.extra.btn2-github")  }}</v-btn>
                        <v-btn flat @click="show = !show">
                          <span>
                            {{show ? $t("education.extra.btn4-less") : $t("education.extra.btn3-more") }}
                          </span>
                          <v-icon>
                            {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
                          </v-icon>
                        </v-btn>
                      </v-layout>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-slide-y-transition>
              <v-container v-show="show">
                <v-card class="elevation-2">
                  <v-container>
                    <v-layout>
                      <v-flex xs12>
                        <v-card-title class="headline font-weight-light text-xs-justify">Algorithmic Toolbox</v-card-title>
                        <v-card-actions>
                          <v-btn flat target="_blank" href="https://github.com/gegen07/DSA-UCS/tree/master/Algorithmic%20Toolbox">{{ $t("education.extra.btn2-github")  }}</v-btn>
                        </v-card-actions>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-container>
            </v-slide-y-transition>
          </v-container>
        </v-container>
      </v-flex>
    </v-layout>
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
