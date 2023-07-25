// import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

//初始化样式文件
import '@/styles/common.scss'

// 引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'

// 注册持久化插件
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
//指定绑定的那个元素
//binding binging.value指定等于后面绑定的表达式的值 图片url
app.directive('m-lazy',{
    mounted(el, binding){
        el,([{isIntersecting}])=>{
            console.log(isIntersecting);
            if (isIntersecting){
                el.src=binding.value
            }
        }
    }
})