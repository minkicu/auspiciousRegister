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
                    Step 2 of 2
                    </div>
                </v-col>
                <v-col cols="12">
                    <v-form>
                        <p class="text-center text-main mb-0 mt-4">บอกเราเพิ่มเติมอีกหน่อย</p>
                        <v-dialog
                            ref="dialog"
                            v-model="modal"
                            persistent
                            width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="form.birthdate"
                                label="วัน เดือน ปี เกิด"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                class="set-birthday mt-8"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                            v-model="form.birthdate"
                            scrollable

                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="modal = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dialog.save(form.birthdate)"
                            >
                                OK
                            </v-btn>
                            </v-date-picker>
                        </v-dialog>

                        
                        <v-text-field
                            v-model="form.birthtime"
                            dense
                            label="เวลา เกิด"
                            :rules="timeRules"
                        ></v-text-field>

                        <v-autocomplete
                            ref="province"
                            v-model="form.birthplace"
                            :rules="[() => !!form.birthplace || 'โปรดระบุ']"
                            :items="provinces"
                            label="จังหวัด"
                            placeholder="กรุณาเลือก..."
                            required
                        ></v-autocomplete>
                        <v-btn
                            rounded
                            color="primary"
                            dark
                            class="w-100 mt-8 my-btn mt-10"
                            @click="register"
                            >
                            ลงทะเบียน
                            </v-btn>

                        <div class="w-100 text-center my-btn text-primary" @click="back">ย้อนกลับ</div>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>    
    </div>
</template>

<script>
const REGEX_TIME =  /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/ // /^([0-9]{2})[:]([0-9]{2})*$/
export default {
    data(){
        return {
            form: {
                birthdate: this.$store.getters.getRegister.birthdate, //(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                birthtime: this.$store.getters.getRegister.birthtime,
                birthplace: this.$store.getters.getRegister.birthplace
            },
            modal: false,
            timeRules: [value => this.timeValidator(value)],
            provinces: [
                'กรุงเทพมหานคร',
                'กระบี่',
                'กาญจนบุรี',
                'กาฬสินธุ์',
                'กำแพงเพชร',
                'ขอนแก่น',
                'จันทบุรี',
                'ฉะเชิงเทรา',
                'ชลบุรี',
                'ชัยนาท',
                'ชัยภูมิ',
                'ชุมพร',
                'เชียงใหม่',
                'เชียงราย',
                'ตรัง',
                'ตราด',
                'ตาก',
                'นครนายก',
                'นครปฐม',
                'นครพนม',
                'นครราชสีมา',
                'นครศรีธรรมราช',
                'นครสวรรค์',
                'นนทบุรี',
                'นราธิวาส',
                'น่าน',
                'บึงกาฬ',
                'บุรีรัมย์',
                'ปทุมธานี',
                'ประจวบคีรีขันธ์',
                'ปราจีนบุรี',
                'ปัตตานี',
                'พระนครศรีอยุธยา',
                'พะเยา',
                'พังงา',
                'พัทลุง',
                'พิจิตร',
                'พิษณุโลก',
                'เพชรบุรี',
                'เพชรบูรณ์',
                'แพร่',
                'ภูเก็ต',
                'มหาสารคาม',
                'มุกดาหาร',
                'แม่ฮ่องสอน',
                'ยโสธร',
                'ยะลา',
                'ร้อยเอ็ด',
                'ระนอง',
                'ระยอง',
                'ราชบุรี',
                'ลพบุรี',
                'ลำปาง',
                'ลำพูน',
                'เลย',
                'ศรีสะเกษ',
                'สกลนคร',
                'สงขลา',
                'สตูล',
                'สมุทรปราการ',
                'สมุทรสงคราม',
                'สมุทรสาคร',
                'สระแก้ว',
                'สระบุรี',
                'สิงห์บุรี',
                'สุโขทัย',
                'สุพรรณบุรี',
                'สุราษฎร์ธานี',
                'สุรินทร์',
                'หนองคาย',
                'หนองบัวลำภู',
                'อ่างทอง',
                'อำนาจเจริญ',
                'อุดรธานี',
                'อุตรดิตถ์',
                'อุทัยธานี',
                'อุบลราชธานี',
                ]
        }
    },
    methods: {
        timeValidator(value){
            this.timeValidated = false
            if(REGEX_TIME.test(value)){
                this.timeValidated = true
                return true
            }
            return "HH:MM 24-hour format, optional leading 0"
        },
        back() {
            this.$router.push('/register')
        },
        register() {

            if (this.validate()) {
                this.$store.dispatch('setRegister',this.form)
                this.$axios.patch(`https://tellme-340313-default-rtdb.asia-southeast1.firebasedatabase.app/member/${this.$store.getters.getLine.userId}/profile.json`,this.$store.getters.getRegister).then((res) => {
                    this.$router.push('/register/done')
                })
            }

        },
        validate(){
            let validated = true
            const errors = []
            let errorMsg = ''
            const validatorField = [
                'birthdate',
                'birthtime',
                'birthplace',

            ]
            validatorField.forEach((field) => {
                if(this.form[field] == ''){
                    validated = false
                    //errors.push(`${field} ไม่สามารถเว้นว่างได้`)
                    if (field == 'birthdate') {
                        errors.push(`วัน-เดือน-ปี เกิด ไม่สามารถเว้นว่างได้`)
                    } 
                    if (field == 'birthtime') {
                        errors.push(`เวลาเกิด ไม่สามารถเว้นว่างได้`)
                    }
                    if (field == 'birthplace') {
                        errors.push(`สถานที่เกิด ไม่สามารถเว้นว่างได้`)
                    }
                }
                
            })

            if(!this.timeValidated){
                validated = false
                errors.push(`โปรดระบุ เวลาเกิดให้ถูกต้อง`)
            }
            
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
    }
}
</script>

<style lang="scss" scoped>
    .v-form{
        padding: 0 20px;
    }
    .set-birthday{
        position: relative;
        ::v-deep .v-input__prepend-outer{
            position: absolute;
            right: 0;
        }

    }
</style>