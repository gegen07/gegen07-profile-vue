import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
// import '../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#795548',
    secondary: '#009688',
    accent: '#ff9800'
  },
  iconfont: 'fa4'
})
