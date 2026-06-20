export function useSearch(){const open=useState('search-open',()=>false);return{open,show:()=>open.value=true,hide:()=>open.value=false}}
