<template>
  <v-app>
    <nuxt>
    </nuxt>
  </v-app>
</template>

<script>
import Dialog from '~/components/Dialog'
export default {
  components: {

  }
}
</script>

<style lang="scss">
    .v-application{
        font-family: 'Quicksand', sans-serif;
    }
    .v-toolbar__title{
        text-align: center;
        width: 100%;
        font-weight: bold;
    }
    .v-application .primary {
        background-color: #1976d2 !important;
        border-color: #1976d2 !important;
    }
    .text-primay{
      color: #1976d2;
    }
    .text-title{
      font-size: 20px;
      font-weight: bold;
    }
    .w-100{
      width: 100%;
    }
    .my-btn{
      font-size: 20px;
      text-transform: none !important;
      height: auto !important;
      padding: 10px 0 !important;
      font-weight: bold;
    }

</style>