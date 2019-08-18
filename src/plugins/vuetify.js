import '@mdi/font/css/materialdesignicons.css' ;
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
   
    iconfont: 'mdi',
    values: {
      product: 'mdi-dropbox',
      support: 'mdi-lifebuoy',
      steam: 'mdi-steam-box',
      pc: 'mdi-desktop-classic',
      xbox: 'mdi-xbox',
      playstation: 'mdi-playstation',
      switch: 'mdi-nintendo-switch',
      lock: "mdi-lock",
      person: 'mdi-account'
    },
  },
})