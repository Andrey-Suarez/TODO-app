import './TODOS/apps.css';
import { Apps } from './TODOS/apps.js'
import store from './store/TODO.store.js';
store.init_store();
console.log('Hello TODO-app!');


Apps('#app');
