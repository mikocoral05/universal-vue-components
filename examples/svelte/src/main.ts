import {mount} from 'svelte'
import {registerAll} from '@universal-vue/elements'
import '@universal-vue/elements/style.css'
import App from './App.svelte'
registerAll()
mount(App,{target:document.getElementById('app')!})
