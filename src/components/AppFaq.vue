<template>
  <div class="container" id="faq">
    <hr class="first">
    <div class="faq">
      <div class="faq-left">
        <h1>FAQ</h1>
      </div>
      <div class="faq-right">
        <ul>
          <li
            class="faq-questions"
            @click="none"
            :class="{'active' :a===1}"
            >
            <h2>Zararkunandalarni yo'q qilish qanday amalga oshiriladi?</h2>
            <p>Maxsus asbob-uskunalar yordamida insektitsidlar aerozolli tumanga aylantiriladi va devor qog'ozi, devorlar va taxta plitalari orasidagi eng kichik bo'shliqlarga, ko'zga ko'rinmas hasharotlar uchun potensial 'yashirish joylari'ga kiradi.</p>
          </li>
          <li
            class="faq-questions"
            @click="d()"
            :class="{'active' :a===2}"
            >
            <h2>Siz foydalanadigan dorilar xavflimi?</h2>
            <p>Maxsus asbob-uskunalar yordamida insektitsidlar aerozolli tumanga aylantiriladi va devor qog'ozi, devorlar va taxta plitalari orasidagi eng kichik bo'shliqlarga, ko'zga ko'rinmas hasharotlar uchun potensial 'yashirish joylari'ga kiradi.</p>
          </li>
          <li
            class="faq-questions"
            @click="b()"
            :class="{'active' :a===3}"
            >
            <h2>Menga uyimni davolanishga tayyorlashning qandaydir usuli kerakmi?</h2>
            <p>Maxsus asbob-uskunalar yordamida insektitsidlar aerozolli tumanga aylantiriladi va devor qog'ozi, devorlar va taxta plitalari orasidagi eng kichik bo'shliqlarga, ko'zga ko'rinmas hasharotlar uchun potensial 'yashirish joylari'ga kiradi.</p>
          </li>
        </ul>
      </div>
      <div class="cleaner"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AppFaq',
  setup() {
    const a = ref('');

    const none = () => {
      if (a.value === 1) {
        a.value = 0;
      } else {
        a.value = 1;
      }
    };

    const d = () => {
      if (a.value === 2) {
        a.value = 0;
      } else {
        a.value = 2;
      }
    };

    const b = () => {
      if (a.value === 3) {
        a.value = 0;
      } else {
        a.value = 3;
      }
    };

    return {
      a,
      none,
      b,
      d
    };
  }
};
</script>

<style scoped>
 .container{
  width: 1240px;
  height: 400px;
  margin: 0 auto;
  /* border: 2px solid black; */
}
.cleaner{
  clear: both;
}
.first{
  margin-top: 90px;
}
.faq{
  width: 1240px;
}
h1{
  margin: 70px 0px 20px 30px ;
  font-size: 45px;
}
.faq-left{
  float: left;
  width: 600px;
  display: inline;
}
.faq-right{
  float: left;
  width: 600px;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.faq-questions{
  overflow: hidden;
  list-style: none;
  padding: .8rem;
  height: calc(1.8rem * 2 + 1rem - 2px);
  background: #fff;
  cursor: pointer;
  transition: .3s, background .1s;
  width: 100%;
  border: 2px solid #dedede;
}
.faq-questions{
  height: calc(1rem * 2 + 1rem - 2px);
  margin: 15px 0px 0px 0px;
}
.faq-questions.active{
  height: 5rem;
  z-index: 1;
}
</style>