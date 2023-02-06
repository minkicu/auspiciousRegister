<template>
    <div class="homepage-wrapper">
        <v-container class="pt-0 pb-0">
            <v-row>
                <v-col cols="12">
                    <div class="text-center mt-3">
                        <img src="~/assets/welcome.png" alt="" width="236px">
                        <h1 class="text-title text-center mt-3">ยินดีต้อนรับ, ทดสอบ</h1>
                        <p class="mt-2 pl-8 pr-8 text-content">
                            ยินดีต้อนรับเข้าสู่บริการของเราค่ะ<br>มันยอดเยี่ยมมากที่ได้พบคุณในวันนี้<br>สำหรับลูกค้าที่เพิ่งใช้บริการครั้งแรก
                            เราแนะนำให้พิมพ์ "ช่วยเหลือ" ในช่องแชท เพื่อรับคำแนะนำการใช้งานเบื้องต้นค่ะ
                        </p>
                    </div>
                    <button rounded class="w-100 mt-8  mt-10 button" @click="close">
                        ปิด
                    </button>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss" scoped>
.homepage-wrapper {
    background: linear-gradient(180deg, #090837 0%, rgba(13, 12, 62, 0) 120%, rgba(13, 12, 62, 0) 100%);
    height: 100%;
    font-family: 'Inter';
    color: #FFFFFF;
    padding-top: 40px;
}

.button {
    border: 1px solid #8B7640;
    background: #FF8C00;
    border-radius: 20px;
    width: 100%;
    height: 52px;
    margin-top: 20px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 20px;
}

.text-title {
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    white-space: nowrap;
    /* Keeps the content on a single line */
    margin: 0 auto;
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em;
    /* Adjust as needed */
    animation: typing 3.5s steps(40, end),
}

/* The typing effect */
@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}


.text-content {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 10s;
    animation-duration: 10s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>

<script>
export default {
    data() {
        return {
            name: this.$store.getters.getLine.displayName
        }
    },
    methods: {
        close() {
            liff.closeWindow();
        }
    }
}
</script>
