import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'


const app = createApp(App)

//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
    locale: zhCn
})

//SVG插件需要的配置代码
import 'virtual:svg-icons-register'
import globalComponent from '@/components'
app.use(globalComponent)
import '@/styles/index.scss'
app.mount('#app')
