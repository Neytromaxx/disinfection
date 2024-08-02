<template>
  <div id="about" class="container">
    <h1
      v-motion-slide-top
    >Biz haqimizda</h1>
    <hr>
    <div 
      v-motion="'custom'"
      :initial="{
        opacity: 0,
        x: -250,
      }"
      :visible="{
        opacity: 1,
        x: 0,
      }"
      :duration="600"
      class="caption">
        <h2>Tezda xizmat ko`rsatish</h2>
        <p>ARIZALAR KUNIGA 24 SOAT QABUL QILINADI. AGAR MUAMMO SHOSHILINCH BO`LSA, BIZ DARXOL KETISHIMIZ MUMKIN. SHU BILAN BIRGA, SIFAT MUKAMMAL BO'LIB QOLADI.</p>
    </div>
    <div
      v-motion="'custom'"
      :initial="{
        opacity: 0,
        x: -250,
      }"
      :visible="{
        opacity: 1,
        x: 0,
      }"
      :duration="600"
      class="caption">
        <h2>Yetuk mutaxasislarimiz</h2>
        <p>BIZNING HODIMLAR HAMMA NARSAGA G`AMXO`RLIK QILADI: HISOB-KITOBLAR, XONANI TAYYORLASH, QAYTA ISHLASH, YAKUNIY TOZALASH,VENTILYATSIYA VA NAZORAT TEKSHIRUVI.</p>
    </div>
    <div v-motion="'custom'"
      :initial="{
        opacity: 0,
        x: -250,
      }"
      :visible="{
        opacity: 1,
        x: 0,
      }"
      :duration="600"
      class="caption">
        <h2>Tezda xizmat ko`rsatish</h2>
        <p>SIZ O`ZINGIZ UCHUN MAQUL VA QULAY VAQTNI TANLANG VA BIZGA MUROJAAT QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIJANI OLIB BORAMIZ.</p>
    </div>
    <div class="img">
      <img src="../assets/disinfection-sanitization-spraying.png" alt="">
      <h2
        v-motion="'custom'"
        :initial="{
          opacity: 0,
          x: 250,
        }"
        :visible="{
          opacity: 1,
          x: 0,
        }"
        :duration="600"
      >Klapa va zararli hashorot endi yo`q deb hisoblang !!!</h2>
      <p
        v-motion="'custom'"
        :initial="{
          opacity: 0,
          x: 250,
        }"
        :visible="{
          opacity: 1,
          x: 0,
        }"
        :duration="600"
      >Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
      <input 
        type="button" 
        value="Bog`lanish"
        v-motion="'custom'"
      :initial="{
        opacity: 0,
        x: 250,
      }"
      :visible="{
        opacity: 1,
        x: 0,
      }"
      :duration="600"
        >
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .container{
  width: 1240px;
  margin: 0 auto;
  /* border: 2px solid black; */
}
h1{
  margin: 80px 0px 20px 30px ;
  font-size: 45px;
}
.caption{
  margin: 45px 0px 20px 20px;
  float: left;
  width: 300px;
  padding: 45px;
}
.caption h2{
  font-size: 35px;
  margin-bottom: 15px;
}
.caption p{
  margin: 25px 0px 20px 0px;
  letter-spacing: 1px;
}
.img{
  position: relative;
}
.img img{
  width: 1240px;
}
.img h2{
  position: absolute;
  bottom: 350px;
  right: 50px;
  width: 550px;
  color: #fff;
  font-size: 60px;
}
.img p{
  position: absolute;
  bottom: 250px;
  right: 95px;
  width: 500px;
  color: #444c58;
  font-size: 25px;
}
.img input{
  position: absolute;
  right: 465px;
  bottom: 80px;
  width: 120px;
  height: 38px;
  border: 1px solid rgba(51, 96, 255, 1);
  border-radius: 10vh;
  background-color: rgba(51, 96, 255, 1);
  color: #fff;
  cursor: pointer;
}
.img img{
  border: 0.1px solid #fff;
  border-radius: 2%;
  opacity: 0.6;
}
</style>