<template>
  <div>
    <div class="disclaimer" v-if="!closedDisclaimer">
      <router-link :to="{name: 'about-en'}">Learn more about this project in English</router-link>
      <a class="close-disclaimer pull-right" href="#" @click="closeDisclaimer">&times;</a>
    </div>
    <div class="cascade"></div>
    <nav class="navbar navbar-default"><div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><img src="/img/logo-beta.png"></a>
        </div>
        <div id="main-menu" class="collapse navbar-collapse" aria-expanded="false">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link :to="{name:'search'}" class="menuitem">Buscar</router-link>
            </li>
            <li>
              <router-link :to="{name:'topics'}" class="menuitem">Temáticas</router-link>
            </li>
            <li>
              <router-link :to="{name:'dashboard'}" class="menuitem">Métricas</router-link>
            </li>
            <li>
              <router-link :to="{name:'scanner'}" class="menuitem">Scanner</router-link>
            </li>
            <li v-show="config.USE_ALERTS">
              <router-link :to="{name:'alerts'}" class="menuitem">Alertas</router-link>
            </li>
            <li>
              <router-link :to="{name:'about'}" class="menuitem">Acerca</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import config from '@/config';

export default {
  name: 'navbar',
  data: function () {
    return {
      closedMessage: false,
      config: config
    }
  },
  mounted: function () {
    let hamburger = document.querySelector('.navbar-toggle');
    let menu = document.querySelector(hamburger.dataset.target);

    function collapseMenu(e) {
      e.preventDefault();
      menu.classList.toggle('in');
    }

    hamburger.addEventListener('click', collapseMenu);
  },
  computed: {
    closedDisclaimer: function () {
      return window.sessionStorage.getItem('closedDisclaimer') || this.closedMessage ? true : false;
    }
  },
  methods: {
    closeDisclaimer: function() {
      window.sessionStorage.setItem('closedDisclaimer', true);
      this.closedMessage = true;
    }
  }
}
</script>
