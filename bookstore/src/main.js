import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements
} from '@aws-amplify/ui-components/loader';

import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives
});

applyPolyfills().then(() => {
  defineCustomElements(window);
});

Amplify.configure(awsExports);
createApp(App).use(vuetify).mount('#app');
