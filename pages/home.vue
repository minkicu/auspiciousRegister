<template>
  <div class="homepage-wrapper">
    <img src="~/assets/images/icon-horo-girl.png" alt="" width="230px" height="230px">
    <div class="title typing">นักพยากรณ์ส่วนตัวของคุณ</div>
    <div class="content">
      <ul>
        <div class="">โฮร่า เป็นนักพยากรณ์ เธอจะทำหน้าที่เป็นเสมือน ผู้ช่วยส่วนตัวของคุณ ซึ่งเธอจะช่วยเเนะนำคุณ
          ในเรื่องต่างๆ
          ที่สำคัญในเเต่ละวันของดังนี้ <br> <br></div>
        <div class="detail">
          <li>ช่วยแนะนำสีมงคลของคุณในเเต่ละวัน รวมทั้งสีที่คุณควรหลีกเลี่ยง โดยดูจากวัน เดือน ปี ที่คุณเกิด
            และจะมีความเเตกต่างกันในเเต่ละบุคคล</li>
          <li>ช่วยแนะนำกิจกรรมที่สำคัญต่างๆ ที่คุณสามารถทำได้ และกิจกรรมต่างๆ ที่คุณควร หลีกเลี่ยงในแต่ละวัน
            โดยดูจากดาวที่โคจรอยู่ ในวันนั้นๆ ว่ามีอิทธิพลต่อคุณอย่างไร</li>
        </div>
        <div class=""><br>คำพยากรณ์ของโฮร่านั้น จะเป็นไปตามหลักโหราศาสตร์
          ของประเทศอินเดียซึ่งถูกใช้เป็นที่แพร่หลายในประเทศไทย
          และมีความแม่นยำสูง</div>
      </ul>
    </div>
    <button type="button" class="button" @click="clickNextBtn()">ต่อไป</button>
  </div>
</template> 

<script>
export default {
  name: 'HomePage',
  methods: {
    clickNextBtn() {
      this.$router.push('/register')
    }
  },
}
</script>


<style lang="scss" scoped>
.homepage-wrapper {
  background: linear-gradient(180deg, #090837 0%, rgba(13, 12, 62, 0) 120%, rgba(13, 12, 62, 0) 100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 15px 60px 15px;
  align-items: center;
  font-family: 'Inter';
  overflow-x: hidden;
  overflow-y: scroll;
}

.title {
  font-family: 'Inter';
  color: #FFFFFF;
  font-weight: 700;
  font-size: 20px;
  padding-top: 10px;
}

.content {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  padding-top: 10px;
}

.detail {
  padding-left: 30px;
}

.button {
  border: 1px solid #8B7640;
  background: #FF8C00;
  border-radius: 20px;
  width: 350px;
  height: 52px;
  margin-top: 20px;
}

.typing {
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */

  /* Adjust as needed */
  animation: typing 3.5s steps(40, end),
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 65%
  }
}
</style>
