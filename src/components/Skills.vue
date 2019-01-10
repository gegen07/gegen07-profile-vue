<template>
  <v-content>
    <v-container>
      <v-card>
        <v-container>
          <v-card-title class="display-2" color="brown">Habilidades</v-card-title>
          <v-flex
            v-for="(item, i) in items"
            :key="i"
            align-center justify-center
          >
            <v-container fill-height>
              <v-layout align-center>
                <v-flex xs1>
                  <i :class="item.icon" class="icon"></i>
                </v-flex>
                <v-flex xs2>
                  <span class="font-weight-light title">{{ item.skill }}</span>
                </v-flex>
                <v-list v-for="x in 10" :key="x">
                  <i v-if="x <= item.star" class="fas fa-circle point"></i>
                  <i v-else class="far fa-circle point"></i>
                </v-list>
              </v-layout>
            </v-container>
            <v-divider v-if="i < items.length-1"></v-divider>
          </v-flex>
        </v-container>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'skills',
  data: () => ({
    items: [
      { skill: 'Android/Java', star: 8, icon: 'fab fa-android' },
      { skill: 'SQL', star: 8, icon: 'fas fa-database' },
      { skill: 'Docker', star: 7, icon: 'fab fa-docker' },
      { skill: 'Javascript', star: 7, icon: 'fab fa-js' },
      { skill: 'Php', star: 7, icon: 'fab fa-php' },
      { skill: 'Golang', star: 6, icon: 'fas fa-terminal' },
      { skill: 'MongoDB', star: 6, icon: 'fas fa-database' },
      { skill: 'C', star: 6, icon: 'fas fa-terminal' }
    ]
  })
}
</script>

<style>
.icon {
  color: #303F9F;
  font-size: 25px;
}
.point {
  color: #303F9F;
  font-size: 18px;
  margin: 0% 1% 0% 1%;
}
</style>
