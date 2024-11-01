import { createRouter, createWebHistory } from 'vue-router';
import List from '../components/List.vue';
import CounterApp from '../views/exercise2/CounterApp.vue';
import ManageProduct from '../views/exercise3/manageProduct.vue';
import Register from '../views/exercise4/registerForm.vue';
import Countdown from '../views/exercise5/countdown.vue';
import Converter from '../views/exercise6/Converter.vue';
import News from '../views/exercise7/News.vue';
// import NewsDetail from '../views/exercise7/NewsDetail.vue';

const routes = [
  {
    path: '/',
    redirect: '/status'
  },
  {
    path: '/status',
    name: 'StatusChecker',
    component: List
  },
  {
    path: '/counter',
    name: 'ClickCounting',
    component: CounterApp
  },
  {
    path: '/manageProduct',
    name: 'manageProduct',
    component: ManageProduct
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/countdown',
    name: 'countdown',
    component: Countdown
  },
  {
    path: '/Converter',
    name: 'Converter',
    component: Converter
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;