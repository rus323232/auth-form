import Vue from 'vue';
import App from './components/Application/index.vue';
import 'bootstrap';

new Vue({
        el: '#application',
        render: h => h(App)
});