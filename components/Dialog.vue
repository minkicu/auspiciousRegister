<template>
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
</template>


<script>
export default {
    data(){
        return {
            dialog: true,
            errorMsg: '',
        }
    }
}
</script>
           