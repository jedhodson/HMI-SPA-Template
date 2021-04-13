import { createApp, h } from 'vue'
import App from './App.vue'
import NotFound from './NotFound.vue'
import './index.css'

const routes = {
  '/': App,
  '/about': NotFound
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')