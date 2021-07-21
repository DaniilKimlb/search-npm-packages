import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Components from "./components";

const app = createApp(App)

Components.forEach((el)=>{
    app.component(el.name, el)
})


app.use(vuetify)
app.use(router)
app.use(store)

app.mount('#app')
