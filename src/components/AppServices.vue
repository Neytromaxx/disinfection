<template>
  <div class="container">
    <div class="services">
        <h1 id="service">Xizmatlar</h1>
        <p >Biz sizga samarali va kafolatli xizmat taqdim etamiz</p>
        <div class="content"
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
            <img src="../assets/dizinfeksiya-virus.png" alt="">   
            <h2>Dezinfeksiya - zararli mikro organizmlarni yo`q qilish</h2>
            <p>Har qanday dezinfeksiyaning asosiy vazifasi infeksiyalar va kasalliklarga olib kelishi mumkin bo`lgan xavfli mikroorganizmlarni yo`q qilishdir. Dezinfeksiya choralari bo`sh joyni mog`or, virus, chiriyotgan va bakteriyalardan tozalaydi. Jarayon atrof-muhitni patogen organizmlardan tozalaydi. Agar o`zingizni yomon his qilsangiz, charchoq yoki sababsiz zaiflashsangiz kerak.</p>
        </div>
        <div class="cleaner"></div>
        <div class="content"
            v-motion="'custom'"
            :initial="{
              opacity: 0,
              x: 250,
            }"
            :visible="{
              opacity: 1,
              x: 0,
            }"
            :duration="600">
            <img src="../assets/dezinyeksiya-hasharot.png" alt="">  
            <h2>Dezinseksiya - hasharotlarni yo`q qilish</h2>
            <p>Har qanday dezinfeksiyaning asosiy vazifasi infeksiyalar va kasalliklarga olib kelishi mumkin bo`lgan xavfli mikroorganizmlarni yo`q qilishdir. Dezinfeksiya choralari bo`sh joyni mog`or, virus, chiriyotgan va bakteriyalardan tozalaydi. Jarayon atrof-muhitni patogen organizmlardan tozalaydi. Agar o`zingizni yomon his qilsangiz, charchoq yoki sababsiz zaiflashsangiz kerak.</p>
        </div>
        <div class="cleaner"></div>
        <div class="content"
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
            <img src="../assets/derazatsiya-kemiruvchi.png" alt="">
            <h2>Deratizatsiya - kemiruvchilarni yo`q qilish</h2>
            <p>Har qanday dezinfeksiyaning asosiy vazifasi infeksiyalar va kasalliklarga olib kelishi mumkin bo`lgan xavfli mikroorganizmlarni yo`q qilishdir. Dezinfeksiya choralari bo`sh joyni mog`or, virus, chiriyotgan va bakteriyalardan tozalaydi. Jarayon atrof-muhitni patogen organizmlardan tozalaydi. Agar o`zingizni yomon his qilsangiz, charchoq yoki sababsiz zaiflashsangiz kerak.</p>
        </div>
        <div class="cleaner"></div>
    </div>
    <div class="cleaner"></div>
    <h1>Xizmat turi</h1>
    <div class="service-types"
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
    >
        <div class="features">
            <h2>Klapalar</h2>
            <p>Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshik romlari va deraza romlari ostida yashaydilar. Ular odamlar va issiq qonli hayvonlarning qoni bilan oziqlanadi. Allergiya va og'ir psixologik noqulaylikni qo'zg'atadi.</p>
            <input type="button" value="Bog`lanish">
            <img src="../assets/klopi.jpg" alt="">
        </div>
        <div class="features">
            <h2>Klapalar</h2>
            <p>Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshik romlari va deraza romlari ostida yashaydilar. Ular odamlar va issiq qonli hayvonlarning qoni bilan oziqlanadi. Allergiya va og'ir psixologik noqulaylikni qo'zg'atadi.</p>
            <input type="button" value="Bog`lanish">
            <img src="../assets/klopi.jpg" alt="">
        </div>
        <div class="features">
            <h2>Klapalar</h2>
            <p>Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshik romlari va deraza romlari ostida yashaydilar. Ular odamlar va issiq qonli hayvonlarning qoni bilan oziqlanadi. Allergiya va og'ir psixologik noqulaylikni qo'zg'atadi.</p>
            <input type="button" value="Bog`lanish">
            <img src="../assets/klopi.jpg" alt="">
        </div>
        <div class="features">
            <h2>Klapalar</h2>
            <p>Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshik romlari va deraza romlari ostida yashaydilar. Ular odamlar va issiq qonli hayvonlarning qoni bilan oziqlanadi. Allergiya va og'ir psixologik noqulaylikni qo'zg'atadi.</p>
            <input type="button" value="Bog`lanish">
            <img src="../assets/klopi.jpg" alt="">
        </div>
        <div class="features">
            <h2>Klapalar</h2>
            <p>Ular to'shakda, yumshoq mebelda, to'qimachilikda, eshik romlari va deraza romlari ostida yashaydilar. Ular odamlar va issiq qonli hayvonlarning qoni bilan oziqlanadi. Allergiya va og'ir psixologik noqulaylikni qo'zg'atadi.</p>
            <input type="button" value="Bog`lanish">
            <img src="../assets/klopi.jpg" alt="">
        </div>
    </div>
    <div class="cleaner"></div>
    <div class="service-summary">
        <img src="../assets/image2.png" alt="">
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
            :duration="600">Rasmiy kafolat - 1 yil. Biz jismoniy va yuridik shaxslarga xizmat ko'rsatamiz. Xizmatlar litsenziyalangan!!!</h2>
        <input type="button" 
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
            :duration="600">
    </div>
    <div class="cleaner"></div>
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
.cleaner{
    clear: both;
}
.services h1,h1{
    margin: 80px 0px 20px 30px ;
    font-size: 55px;
}
.services p{
    margin: 0px 0px 40px 30px ;
    font-size: 18px;
    width: 250px;
}
.service-summary img{
    width: 1240px;
}
.content{
    margin-top: 20px;
    border: 1px solid #747981;
    border-radius: 1rem;
    height: 350px;
}
.content img{
    margin: 20px 120px 40px 30px ;
    float: left;
    width: 300px;
    height: 300px;
}
.content h2{
    margin: 30px 0px 40px 0px;
    width: 1100px;
    font-size: 35px;
}
.content p{
    padding-top: 20px;
    width: 1100px;
    line-height: 1.4;
}
.features{
    width: 370px;
    height: 350px;
    border: 1px solid #e0e3e6;
    border-radius: 3%;
    background-color: #e0e3e6;
    margin: 0px 0px 15px 20px;
    padding: 10px;
    display: inline-block;
}
.features h2{
    font-size: 35px;
    margin-bottom: 10px;
}
.features p{
    width: 370px;
    text-align: left;
    line-height: 1.4;
}
.features input{
    width: 120px;
    height: 38px;
    margin-top: 120px;
    border: 1px solid rgba(51, 96, 255, 1);
    border-radius: 10vh;
    background-color: rgba(51, 96, 255, 1);
    color: #fff;
    cursor: pointer;
}
.features img{
    width: 120px;
    height: 120px;
    border: 1px solid #e0e3e6;
    border-radius: 100px;
    margin: 40px 0px 0px 100px;
}
.service-summary{
    width: 1238px;
    height: 550px;
    background-color: #52bbf4;
    border: 1px solid #52bbf4;
    border-radius: 1.3rem;
}
.service-summary img{
    width: 450px;
    height: 450px;
    margin: 35px 100px 10px 35px;
    border: 1px solid #52bbf4;
    border-radius: 3%;
    float: left;
}
.service-summary h2{
    width: 1200px;
    margin: 55px 0px 20px 10px;
    font-size: 40px;
    color: #fff;
}
.service-summary input{
    width: 120px;
    height: 38px;
    margin-top: 100px;
    border: 1px solid rgba(51, 96, 255, 1);
    border-radius: 10vh;
    background-color: rgba(51, 96, 255, 1);
    color: #fff;
}
</style>