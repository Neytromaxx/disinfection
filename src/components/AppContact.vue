<template>
  <div class="container">
    <div class="background">
        <form @submit.prevent="submitForm">
            <div class="contact"
              v-motion="'custom'"
              :initial="{
                opacity: 0,
                x: -250,
              }"
              :visible="{
                opacity: 1,
                x: 0,
              }"
              :duration="600">
                <h2>Ma'lumotingizni qoldiring</h2>
                <input 
                    type="text"
                    id="text" 
                    placeholder="Ismingiz"   
                    v-model="name"
                    @blur="validateName"
                    :class="{ 'is-invalid': !isNameValid }"
                    >
                <input 
                    type="tel" 
                    id="tel"
                    placeholder="+998-90-123-45-67" 
                    >
                <input type="button" value="Yuborish" class="btn">
            </div>
        </form>
        <div class="img">
            <img src="../assets/person-in-white-chemical-protection-suit.png" alt="">
        </div>
    </div>
    <div class="cleaner"></div>
    <hr>
    <div class="footer">
      <div class="footer-left">
        <div class="logo">
          <div class="container-left-text">Dizenfeksiya</div>
        </div>
      </div>
      <div class="footer-right">
          <div class="footer-data">
            <div class="addres">O'zbekiston, Tashkent shaxri</div>
            <div class="tel">+998 99 119 99 33</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AppContact',
  setup() {
    const name = ref('');
    const isNameValid = ref(true);

    const validateName = () => {
      isNameValid.value = name.value.trim() !== '';
    };

    const submitForm = () => {
      validateName();

      if (isNameValid.value) {
        alert('Ma`lumotlar muvaffaqiyatli jo`natildi!');
        }

      else {
        alert('Ma`lumotni kiriting!');
      }
    };

    return {
      name,
      isNameValid,
      validateName,
      submitForm
    };
  },
};
</script>

<style scoped>
 .container{
  width: 1240px;
  margin: 0 auto;
  /* border: 2px solid black; */
}
.cleaner{
  clear: both;
}
.background{
    width: 1238px;
    height: 550px;
    background-color: #52bbf4;
    border: 1px solid #52bbf4;
    border-radius: 1.3rem;
}
.contact{
    width: 400px;
    height: 350px;
    margin: 70px 0px 0px 100px;
    background-color: #fff;
    border: 1px solid #52bbf4;
    border-radius: 1rem;
    float: left;
}
.contact h2{
    font-size: 35px;
    margin: 15px 0px 0px 40px;
}
.contact #text{
    width: 300px;
    height: 40px;
    padding: 5px;
    margin: 25px 0px 25px 40px;
    border: 1px solid #000;
    border-radius: 0.7rem;
}
.contact #tel{
    width: 300px;
    height: 40px;
    padding: 5px;
    margin: 0px 0px 25px 40px;
    border: 1px solid #000;
    border-radius: 0.7rem;
}
.btn{
    width: 320px;
    height: 45px;
    margin: 0px 0px 25px 35px;
    border: 1px solid #000;
    border-radius: 0.7rem;
    color: #fff;
    background-color: #000;
    font-size: 22px;
    cursor: pointer;
}
.img{
    float: left;
}
.img img{
    margin: 143px 0px 0px 70px;
}
hr{
    margin-top: 70px;
}
.footer{
  margin-bottom: 180px;
}
.footer-left{
  float: left;
  width: 600px;
  display: inline;
}
.footer-right{
  float: left;
  width: 600px;
  margin-top: 20px;
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
.error {
  color: red;
  font-size: 0.9em;
}
.is-invalid {
  border-color: red;
}
</style>