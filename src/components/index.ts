import SvgIcon from '@/components/SvgIcon/index.vue';
import type { App, Component } from 'vue';

const components: { [name: string]: Component } = { SvgIcon };

export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
        })
        // console.log(Object.keys(components));
    }
}

