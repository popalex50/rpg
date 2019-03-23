import fightMonster from './assets/fightMonster.vue'
import mainpage from './assets/mainpage.vue'
import characterCreate from './assets/characterCreate.vue'
import accountCreate from './assets/accountCreate.vue'

export const routes=[
            {path:'', component: accountCreate},
            {path:'/characterCreate', component: characterCreate},
            {path:'/fightmonster/', component : fightMonster },
            {path:'/mainpage', component : mainpage },
            {path:'*', redirect:"/mainpage" }
            
     ];  