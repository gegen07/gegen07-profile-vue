import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
// import '../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#18298C',
    secondary: '#04BF8A',
    accent: '#F29F05'
  },
  iconfont: 'fa || md'
})
