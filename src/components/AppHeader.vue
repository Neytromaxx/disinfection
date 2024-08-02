<template>
  <div id="main" class="container">
    <div class="header">
      <div class="container-left">
        <div class="logo">
          <div class="container-left-text">Dizenfeksiya</div>
        </div>
      </div>
      <div class="container-right">
        <ul class="list-item">
          <li class="list-items"><a href="#main">Asosiy</a></li>
          <li class="list-items"><a href="#about">Biz haqimizda</a></li>
          <li class="list-items"><a href="#service">Xizmatlar</a></li>
          <li class="list-items"><a href="#faq">FAQ</a></li>
          <div class="cleaner"></div>
        </ul>
        <div class="cleaner"></div>
        <select name="lang" id="lang" >
          <option value="uzbek">uzbek</option>
          <option value="rus" >Ruscha</option>
          <!-- <option value="uzbek" @click="changeLang('uz')">{{ $i18n('header.uzbek') }}</option>
          <option value="rus" @click="changeLang('ru')">{{ $i18n('header.russian') }}</option> -->
        </select>
        <button @click="$alert('salom')">Bog`lanish</button>
      </div>
    </div>
    <div class="cleaner"></div>
    <div class="main">
      <div class="main-left">
        <h1 
          v-motion="'custom'"
          :initial="{
            opacity: 0,
            x: -250,
          }"
          :visible="{
            opacity: 1,
            x: 0,
          }"
          :duration="800"
        >Dizenfeksiya xizmati </h1>

        <p
          v-motion="'custom'"
          :initial="{
            opacity: 0,
            x: -250,
          }"
          :visible="{
            opacity: 1,
            x: 0,
          }"
          :duration="800"
        >Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
        <input
          v-motion="'custom'"
          :initial="{
            opacity: 0,
            x: -250,
          }"
          :visible="{
            opacity: 1,
            x: 0,
          }"
          :duration="800"
          type="button" 
          value="Bog`lanish"
        >
      </div>
      <div class="main-right">
        <img src="../assets/imgspray.jpeg" alt="">
      </div>
    </div>
    <div class="cleaner"></div>
  </div>
</template>

<script>
export default{
  // inject:['i18nchange','alert'],
  data(){
    return{

    }
  },
  methods:{
    changeLang(lang){
      this.i18nchange(lang)
      this.$forceUpdate()
    }
  },

}
</script>


<style scoped>
 .container{
  width: 1240px;
  margin: 0 auto;
  /* border: 2px solid black; */
}
.header{
  position: fixed;
  z-index: 1;
  width: 1240px;
  height: 65px;
  border-bottom: 1px solid #000;
  background-color: #fff;
}
.container-left{
  float: left;
  width: 600px;
  display: inline;
}
.logo{
  width: 34px;
  height: 34px;
  background-color: rgba(28, 76, 247, 1);
  border: 1px solid rgba(28, 76, 247, 1);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  margin-top: 20px;
} 
.container-left-text{ 
  font-family: Unbounded;
  font-size: 35px;
  font-weight: 700;
  line-height: 35px;
  text-align: left;
  margin-left: 35px;
  color: rgba(28, 76, 247, 1);
}
.container-right{
  float: left;
  width: 600px;
  position: relative;
  line-height: 25px;
}
.list-item{
  list-style: none;
  position: absolute;
  top: 30px;
}
.list-item .list-items{
  float: left; 
  margin-right: 25px;
}
.list-item .list-items a{
  text-decoration: none;
  color: #000;
}
#lang{
  position: absolute;
  right: 150px;
  top: 20px;
  width: 120px;
  height: 38px;
  padding: 5px;
  border-radius: 10vh;
  cursor: pointer;
}
option{
  font-size: 20px;
}
button{
  position: absolute;
  right: 10px;
  top: 20px;
  width: 120px;
  height: 38px;
  border: 1px solid rgba(51, 96, 255, 1);
  border-radius: 10vh;
  background-color: rgba(51, 96, 255, 1);
  color: #fff;
  cursor: pointer;
}
.cleaner{
  clear: both;
}
 .main-left{
  float: left;
  width: 520px;
}
.main .main-left h1{
  margin-top: 120px;
  margin-left: 25px;
  font-family: Unbounded;
  font-size: 84px;
  font-weight: 700;
  line-height: 72px;
  text-align: left;
  color: rgba(51, 117, 255, 1);
}
.main .main-left p{
  margin-top: 45px;
  margin-left: 25px;
  font-size: 24px;
}
 .main .main-left input{
  margin-top: 180px;
  margin-left: 25px;
  width: 120px;
  height: 38px;
  border: 1px solid rgba(51, 96, 255, 1);
  border-radius: 10vh;
  background-color: rgba(51, 96, 255, 1);
  color: #fff;
  cursor: pointer;
}
.main-right{ 
  float: left;
  width: 700px;
}
.main-right img{
  width: 700px;
  height: 620px;
  margin-top: 100px;
  border: 1px solid #fff;
  border-radius: 5%;
}
</style>
