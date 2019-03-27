<template>
  <div>
    <navbar></navbar>
    <div id="about">
      <page-header :title="'Acerca'"></page-header>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <p><strong>TIPI Ciudadano</strong> es una herramienta on-line de transparencia, acceso a información y rendición de cuentas. Nacida desde la sociedad civil, está focalizada en el seguimiento de la toda la actividad parlamentaria española relacionada con la pobreza, la justicia social y el desarrollo sostenible.</p>
            <h4>Objetivos de TIPI Ciudadano</h4>
            <p>El objetivo último de TIPI es promover políticas públicas orientadas a la lucha contra la pobreza y a la promoción de la justicia social y el desarrollo sostenible. Para ello, dos ingredientes son imprescindibles: una ciudadanía activa, informada y exigente y una clase política responsable y sometida al escrutinio público.</p>
            <p>Partiendo de esta visión, TIPI se propone tres objetivos concretos:</p>
            <ul>
              <li>Ofrecer a la sociedad civil española una herramienta que fortalezca su capacidad para participar e incidir en los procesos de toma de decisión política.</li>
              <li>Fomentar un debate público informado sobre la pobreza, la justicia social y el desarrollo sostenible.</li>
              <li>Generar un incentivo a las buenas prácticas políticas a través del acceso a la información y la rendición de cuentas.</li>
            </ul>
            <h4>¿Qué ofrece TIPI Ciudadano?</h4>
            <p>TIPI está diseñada para responder a las necesidades específicas de los usuarios, ya sean ciudadanos, periodistas, movimientos sociales o representantes políticos. Para ello:</p>
            <ul>
              <li>Escanea toda la actividad política del Congreso de los Diputados y la clasifica automáticamente según su relación con alguna de las 21 áreas temáticas prioritarias para la pobreza, la justicia social y el desarrollo sostenible.</li>
              <li>Clasifica la actividad parlamentaria a través de más de 3000 palabras clave propuestas por especialistas y organizaciones expertas en cada una de las temáticas.</li>
              <li>Dispone de un buscador con el que el usuario puede afinar su búsqueda en base a múltiples criterios (autor, fecha, tema, palabra clave, etc.).</li>
              <li>Ofrece un sistema personalizado de alertas que permite al usuario estar al día sobre las novedades políticas de sus temáticas de interés.</li>
              <li>Permite el acceso y descarga libre de toda la información disponible.</li>
            </ul>
            <h4>¿Quiénes somos?</h4>
            <p>TIPI es un proyecto promovido, financiado y ejecutado por CIECODE (Centro de Investigación y Estudios sobre Coherencia y Desarrollo), una organización española especializada en el análisis de políticas públicas, en la coherencia de políticas para el desarrollo y en proyectos de transparencia, rendición de cuentas y participación ciudadana.</p>
            <p>La primera versión de TIPI (mayo 2014 - septiembre 2015) fue financiada por el Programa de Ciudadanía Activa de los EEA Grants y tuvo como socios a UNICEF-comité español, EAPN España, EAPN Castilla la Mancha y Fundación porCausa.</p>
            <p>CIECODE es también la organización impulsora del <a href="https://ciecode.es/political-watch/proyecto-avizor/" target="_blank">Proyecto Avizor</a>, socia fundadora de <a href="http://www.poletika.org/" target="_blank">Polétika</a>, pertenece a la Red Española de Estudios de Desarrollo (<a href="http://www.reedes.es/" target="_blank">REEDES</a>) y a la <a href="http://www.proacceso.org/" target="_blank">Coalición ProAcceso</a> y ha publicado <a href="https://ciecode.es/investigacion/" target="_blank">numerosos informes</a> sobre coherencia de políticas, comercio y desarrollo, transparencia y ciudadanía activa.</p>
=======
            <p>Parlamento 2030 es un proyecto de <a href="http://politicalwatch.es" target="_blank">Political Watch</a>, la plataforma que se inscribe dentro de la estrategia del think tank <a href="http://ciecode.es" target="_blank">CIECODE</a> y que está formado por profesionales de distintas disciplinas como informáticos, periodistas y economistas. Nuestra misión es fomentar un debate público informado y basado en hechos sobre el desarrollo sostenible. Desarrollamos tecnologías innovadoras que automáticamente rastrean actividad relacionada con el desarrollo sostenible y que ofrecen acceso a esta información de forma pública, directa y gratuita a actores clave y ciudadanos.</p>
            <h4>¿De dónde venimos?</h4>
            <p>Parlamento 2030 es una adaptación de TiPi, una herramienta digital implementada en España desde 2015, que monitoriza toda la actividad parlamentaria de 21 temáticas relacionadas con la lucha contra la pobreza y la desigualdad. TiPi (que responde a las siglas de Transparencia + Información + Participación + Influencia) es otro innovador proyecto de Political Watch que genera datos abiertos y fomenta la transparencia, el acceso a información y la rendición de cuentas política a través de la monitorización parlamentaria de las 21 temáticas estratégicamente seleccionadas, a través del mismo avanzado sistema de escrapeo y etiquetado utilizado en Parlamento 2030.</p>
            <div style="text-align:center">
              <router-link class="btn btn-custom" :to="{name: 'mediakit'}">Visita nuestro Mediakit</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-block></footer-block>
  </div>
</template>

<script>
import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header';
import FooterBlock from '@/components/footer-block';

export default {
  name: 'about',
  components: {
    Navbar,
    PageHeader,
    FooterBlock
  }
}
</script>

<style scoped lang="scss">
</style>
