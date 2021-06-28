import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    fr: {
        message: {
            hello: 'bonjour'
        }
    }
}

const i18n = createI18n({
    messages,
    locale : 'fr'
})

const app = createApp(App);


app.use(i18n)
app.mount('#app');


