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
                            hint="HH:MM"
                        ></v-text-field>

                        <v-autocomplete
                            ref="province"
                            v-model="form.province"
                            :rules="[() => !!form.province || 'โปรดระบุ']"
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
export default {
    data(){
        return {
            form: {
                birthdate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                birthtime: '',
                birthlocation: '',
                province: ''
            },
            modal: false,
            modal2: false,
            time: null,
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
        back() {
            this.$router.push('/register')
        },
        register() {
            console.log("register")
        }
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