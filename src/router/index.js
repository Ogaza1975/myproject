import { createRouter, createWebHistory } from 'vue-router';
import AllProduct from '../components/AllProduct.vue';
import ProductDetails from '../components/ProductDetails.vue';
import BasketView from '../components/BasketView.vue';

const routes = [
  { path: '/', component: AllProduct },
  { path: '/product/:id', component: ProductDetails, props: true },
  { path: '/basket', component: BasketView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;