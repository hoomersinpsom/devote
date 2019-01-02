<template>
  <carousel :perPage="1">
    <slide>
      <article :style="{backgroundImage: `url(${require('./images/sli0.jpg')})`}">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="inner">
                <h1>Os melhores Devs do Brasil <br>
                  desenvolvendo seu projeto
                </h1>
                <p>O Processo de seleção da Devote é altamente
                rigoroso e só os melhores programadores são selecionados,
                todos os testes são desenvolvidos por uma equipe com anos de experiência e
                conhecimento de causa de todas as tecnologias modernas,
                não importa qual seja o seu projeto temos o programdor ideal pra você
                com o melhor custo benefício e sem burocracia.</p>
                <a href="" class="btn btn-orange">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </slide>
    <slide>
      <article :style="{backgroundImage: `url(${require('./images/sli1.jpg')})`}">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="inner">
                <h1>A revolução do trabalho remoto</h1>
                <p>
                  O mundo está mudando a maneira que encara o trabalho criativo, em vários países, a cada dia o número de trabalhadores que adotaram o <em>Home Officce</em> como estilo de vida aumenta e está mudando a vida de milhares de programadores talentosos em todos os cantos do Brasil, criando soluções e projetos para grandes startups e empresas do Brasil.
                </p>
                <a href="" class="btn btn-orange">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </slide>
    <slide>
      <article :style="{backgroundImage: `url(${require('./images/sli2.jpg')})`}">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="inner">
                <h1>Virtual Office 1.0</h1>
                <p>
                  Acompanhe toda a produção de sua equipe em tempo real e em todos os campos do Brasil, saiba o que cada um está fazendo e ha quanto tempo, verificamos o desempenho de todos os nossos programadores para garantir a qualidade do codigo e cumprimento de prazos.
                </p>
                <a href="" class="btn btn-orange">
                  Conheça o Virtual Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'home',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
@import '@/scss/base.scss';
.VueCarousel-slide{
  width: 100%;
}
.inner{
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 0 20px 20px 0;
}
article{
  min-height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 290px 0px #000;
  h1{
    color: $orange;
    font-weight: bold;
    text-shadow: 1px 1px 0 #000;
  }
  p{
    color: #fff;
  }
}
:global(){
  .VueCarousel-wrapper{
    background-color: $orange;
  }
  .VueCarousel-dot-container{
    margin-top: 10px !important;
  }
  .VueCarousel-dot{
    background-color: $gray !important;
    transition: all 300ms;
    margin-top: 0 !important;
    &.VueCarousel-dot--active{
      background-color: $orange !important;
    }
  }
}
</style>
