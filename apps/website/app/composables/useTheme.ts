export function useTheme(){
 const theme=useState<'light'|'dark'>('uv-theme',()=> 'light')
 function apply(value:'light'|'dark'){theme.value=value;if(import.meta.client){document.documentElement.dataset.uvTheme=value;localStorage.setItem('uv-theme',value)}}
 function toggle(){apply(theme.value==='light'?'dark':'light')}
 onMounted(()=>{const saved=localStorage.getItem('uv-theme') as 'light'|'dark'|null;const preferred=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';apply(saved??preferred)})
 return {theme,toggle,apply}
}
