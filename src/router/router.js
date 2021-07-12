import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Layers/Home';
import Users from '@/components/Templates/Users';
import Books from '@/components/Templates/Books';
Vue.use(Router);
let router = new Router({
    routes : [
        { path : '/', component : Home, name:'home'},
        { path : '/home', component : Home},
        { path : '/loading', component : Loading},
        { path : '/users', component : Users },
        { path : '/books', component : Books }
    ]
}); 
export default router;
