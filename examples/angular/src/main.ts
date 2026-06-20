import {CUSTOM_ELEMENTS_SCHEMA,Component} from '@angular/core'
import {bootstrapApplication} from '@angular/platform-browser'
import {registerAll} from '@universal-vue/elements'
registerAll()
@Component({selector:'app-root',standalone:true,schemas:[CUSTOM_ELEMENTS_SCHEMA],template:`<main><h1>Angular fixture</h1><uv-alert title="Custom Elements">Registered once during bootstrap.</uv-alert><uv-button variant="primary">Continue</uv-button></main>`,styles:[`main{display:grid;gap:1rem;max-width:600px;margin:4rem auto;font-family:system-ui}`]})
class AppComponent{}
bootstrapApplication(AppComponent).catch(console.error)
