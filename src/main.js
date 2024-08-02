import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
// import translatePlugin from './translate.js'

// const ru = {
//     header:{
//         'disin':'',
//         'uzbek':'',
//     }
// }
// const uz = {
//     header:{
//         'disin':'Dizenfeksiya',
//         'uzbek':'Ozbekcha',
//         'russian':'Ruscha',
//     }
// }

createApp(App)
    .use(MotionPlugin)
    // .use(translatePlugin, {ru, uz})
    .mount('#app')
