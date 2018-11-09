<template>
  <div>
    <!-- <div class="disclaimer" v&#45;if="!closedDisclaimer"> -->
    <!--   <router&#45;link :to="{name: 'about&#45;en'}">Learn more about this project in English</router&#45;link> -->
    <!--   <a class="close&#45;disclaimer pull&#45;right" href="#" @click="closeDisclaimer">&#38;times;</a> -->
    <!-- </div> -->
    <nav class="navbar navbar-default"><div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><img src="/img/logo.svg"></a>
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
              <router-link :to="{name:'about'}" class="menuitem">Acerca</router-link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data: function () {
    return {
      closedMessage: false
    }
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
