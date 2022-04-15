<template>
    <div>
        <v-app-bar
      color="primary accent-4"
      dense
      flat
      dark
    >
    <v-toolbar-title>Register</v-toolbar-title>
        </v-app-bar>
        <v-container class="pt-0 pb-0">
            <v-row>
                <v-col cols="12">
                    <div class="mt-6 text-primay text-title text-center">
                    Step 1 of 2
                    </div>
                </v-col>
                <v-col cols="12" class="text-center pt-0 pb-0 profile-img">
                        <img v-if="getLine.pictureUrl == ''" src="~/assets/text-title.png" alt="" width="155">
                        <img v-else :src="getLine.pictureUrl" alt="" width="155">
                        
                </v-col>
                <v-col cols="12" class="text-center pt-2 pb-0">
                    {{ getLine.displayName }}
                </v-col>
                <v-col cols="12">
                    <v-form>
                        <v-text-field class="mb-3"
                            v-model="form.firstname"
                            hint="ไม่ต้องระบุคำนำหน้า"
                            label="ชื่อ"
                            :rules="[rules.required]"
                        ></v-text-field>
                        <v-text-field class="mb-3"
                            v-model="form.lastname"
                            dense
                            label="สกุล"
                            :rules="[rules.required]"
                        ></v-text-field>
                        <div class="gender-group d-flex mt-3">
                            <p>เพศ</p>
                            <div class="circle" :class="form.gender == 1 ? 'active' : ''" @click="chooseGender(1)">
                                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="icon-70"><rect fill="none" height="256" width="256"/><circle cx="128" cy="96" fill="none" r="72" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="128" x2="128" y1="168" y2="240"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="88" x2="168" y1="208" y2="208"/></svg>
                            </div>
                            <p>หญิง</p>
                            <div class="circle" :class="form.gender == 2 ? 'active' : ''" @click="chooseGender(2)">
                                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" class="icon-70"><rect fill="none" height="256" width="256"/><circle cx="104" cy="152" fill="none" r="72" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="154.9" x2="216" y1="101.1" y2="40"/><polyline fill="none" points="168 40 216 40 216 88" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>
                            </div>
                            <p>ชาย</p>
                        </div>
                        <v-btn
                            rounded
                            color="primary"
                            dark
                            class="w-100 mt-8 my-btn mt-10"
                            @click="next"
                            >
                            ถัดไป
                            </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog
            v-model="dialog"
            width="500"
            >
           

            <v-card>
                <v-card-title>Form is error</v-card-title>
                <v-card-text v-html="errorMsg">
                  
                </v-card-text>                
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    mounted() {
        liff.init({
            liffId: '1657047674-6R75lQ5d'
        }).then(() => {
            if(liff.isLoggedIn()){
                console.log("login")
                liff.getProfile().then(profile => {
                    this.$store.dispatch('setLine',profile);
                    this.isDone();
                })
            }else{
                liff.login();
            }
            
        })
    },
    computed:{
        getLine(){
            return this.$store.getters.getLine;
        }
    },
    data() {
        return {
            form: {
                firstname: this.$store.getters.getRegister.firstname,
                lastname: this.$store.getters.getRegister.lastname,
                gender: this.$store.getters.getRegister.gender
            },
            rules: {
                required: value => !!value || 'โปรดระบุ.'
            }
        }
    },
    methods: {
        isDone(){
            this.$axios.get(`https://tellme-340313-default-rtdb.asia-southeast1.firebasedatabase.app/member/${this.$store.getters.getLine.userId}/profile.json`).then((res) => {
                if(res.data !=null) {
                    this.$router.push('register/done');
                }
            });
        },
        chooseGender(gender){
            this.form.gender = gender
        },
        validate(){
            let validated = true
            const errors = []
            let errorMsg = ''
            const validatorField = [
                'firstname',
                'lastname'
            ]
            validatorField.forEach((field) => {
                if(this.form[field] == ''){
                    validated = false
                    //errors.push(`${field} ไม่สามารถเว้นว่างได้`)
                    if (field == 'firstname') {
                        errors.push(`ชื่อ ไม่สามารถเว้นว่างได้`)
                    } else {
                        errors.push(`สกุล ไม่สามารถเว้นว่างได้`)
                    }
                }
            })
            if(!validated){
                this.$store.dispatch('setDialog', {
                    isShow: true,
                    title: 'ข้อผิดพลาด',
                    message: errorMsg = errors.map((error) => error+'<br/>').join('')
                })
            }
            console.log(errorMsg)
            return validated
        },
        next(){
            if(this.validate()){
                this.$store.dispatch('setRegister', this.form)
                this.$router.push('/register/step2')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon-70{
        width: 70%;
        height: 70%;
    }
    .profile-img {
        img{
            border-radius: 50%;
        }
    }
    .v-form{
        padding: 0 20px;
    }
    .gender-group {
        p{
            margin-bottom: 0;
            align-self: center;
            margin-right: 20px;
        }
        .circle{
            width: 45px;
            height: 45px;
            color: #FFF;
            border-radius: 50%;
            position: relative;
            background: rgba($color: #000000, $alpha: 0.3);
            margin-right: 7px;
            &.active {
                background: #1976d2;
            }
            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }
</style>