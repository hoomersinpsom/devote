<template>
  <div class="header-nav">
    <div class="container-fluid">
      <router-link class="logo" title="Devote - Remote Squad" to="/">
        <img alt="Vue logo" src="@/assets/logo.png">
      </router-link>
      <div class="menu">
        <a href="" class="btn btn-link">
          Sobre
        </a>
        <a href="" class="btn btn-link">
          Vagas
        </a>
        <a href="" class="btn btn-link">
          Contato
        </a>
        <a href="" class="btn btn-link">
          Virtual Office
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/scss/variables.scss';

.container-fluid{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-nav{
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid $bone;
}
.logo{
  display: block;
  width: 42.25px;
  img{
    display: block;
    width: 100%;
  }
}
.menu{
  a{
    text-decoration: none;
    color: $gray;
    position: relative;
    z-index: 0;
    &::after{
      content: '';
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color: $orange;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(-10px);
      opacity: 0;
      transition: all 300ms;
    }
    &:hover{
      color: $orange;
      &::after{
        transform: translateX(-50%) translateY(0px);
        opacity: 1;
      }
    }
  }
}
</style>
