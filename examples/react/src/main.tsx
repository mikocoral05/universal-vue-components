import React, {useEffect,useRef} from 'react'
import {createRoot} from 'react-dom/client'
import {registerAll} from '@universal-vue/elements'
import '@universal-vue/elements/style.css'
registerAll()
function App(){const button=useRef<HTMLElement>(null);useEffect(()=>{const handler=()=>console.log('Custom Element click');const el=button.current;el?.addEventListener('click',handler);return()=>el?.removeEventListener('click',handler)},[]);return <main><h1>React fixture</h1><uv-alert title="Framework-independent">Rendered inside React.</uv-alert><uv-input label="Project name"></uv-input><uv-button ref={button} variant="primary">Save</uv-button></main>}
createRoot(document.getElementById('root')!).render(<App/>)
