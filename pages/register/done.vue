<template>
    <div>
        <v-app-bar color="primary accent-4" dense flat dark >
            <v-toolbar-title>Register</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0">
            <v-row>
                <v-col cols="12">
                    <div class="text-center mt-3">
                        <img src="~/assets/welcome.png" alt="" width="236px">
                        <h1 class="text-title mt-3">ยินดีต้อนรับ, {{ name }}</h1>
                        <p class="mt-2 pl-8 pr-8">
                            ยินดีต้อนรับเข้าสู่บริการของเราค่ะ<br>มันยอดเยี่ยมมากที่ได้พบคุณในวันนี้<br>สำหรับลูกค้าที่เพิ่งใช้บริการครั้งแรก เราแนะนำให้พิมพ์ "ช่วยเหลือ" ในช่องแชท เพื่อรับคำแนะนำการใช้งานเบื้องต้นค่ะ
                        </p>
                    </div>
                    <v-btn rounded color="primary" dark class="w-100 mt-8 my-btn mt-10" @click="close">
                        ปิด
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div> 
</template>

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
