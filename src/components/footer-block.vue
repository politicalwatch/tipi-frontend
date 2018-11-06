<template>
  <div>
    <div id="footer" class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="container">
            <div class="row">
              <div class="col-sm-4 text-center">
                <a href="/"><img src="/img/logo_big.svg" class="big" alt="Logo de TIPI Ciudadano"></a>
                <br/>
                <a href="http://politicalwatch.es" target="_blank"><img src="/img/politicalwatch-transparent-bg.png" class="small" alt="Logo de Political Watch"></a>
              </div>
              <div class="col-sm-7">
                <p>
                <strong>TIPI Ciudadano</strong> es un proyecto de <a href="http://politicalwatch.es" target="_blank">Political Watch</a>, plataforma que se inscribe dentro del think-and-do tank <a href="http://ciecode.es" target="_blank">CIECODE</a>.
                <br/>
                Todo el código fuente está disponible en <a href="https://github.com/politicalwatch" target=_blank>Github</a> con licencia <a href="https://www.gnu.org/copyleft/gpl.html" target="_blank">GNU/GPLv3</a>.
                <br/>
                Contáctanos en <a href="mailto:tipiciudadano@ciecode.es" target="_blank">tipiciudadano@ciecode.es</a>
                </p>
                <p>
                <a href="https://twitter.com/tipi_ciudadano">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x"></i>
                  </span>
                </a>
                <a href="https://facebook.com/tipiciudadano">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x"></i>
                  </span>
                </a>
                <a href="https://github.com/politicalwatch">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x"></i>
                  </span>
                </a>
                </p>
                
              </div>
              
            </div>
          </div>
        </div>  
      </div>
    </div>
    <div class="cascade"></div>
    <cookie-law theme="base" buttonText="Entendido" buttonClass="btn btn-custom" message="Este sitio usa cookies para asegurarte la mejor experiencia web."></cookie-law>
  </div>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    name: "footer-block",
    components: {CookieLaw}
  }
</script>

<style scoped lang="scss">
</style>
