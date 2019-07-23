import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
// import '../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#9E9E9E',
    secondary: '#536DFE',
    accent: '#ff9800'
  },
  iconfont: 'fa || md'
})
