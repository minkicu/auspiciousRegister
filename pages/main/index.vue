<template>
    <div class="homepage-wrapper">
        <div class="navbar">
            <div class="text-title text-center title">
                Your lucky color
            </div>
        </div>

        <div v-if="data">
            <div v-for="items in data.today_data ">
                <Card 
                :title="items.topic" 
                :description="items.description" 
                :luckyScore="items.score"
                :luckyColor="items.lucky_color"
                :unLuckyColor="items.bad_color"
                />
            </div>
        </div>




    </div>
  </template> 
  
  <script>
  export default {
    name: 'MainPage',
    data() {
        return {
            data: null,
        };
    },
    methods: {
        getData() {
            this.$axios
                .get('https://astro.free.beeceptor.com/color/123456')
                .then((res) => {
                    console.log(res.data)
                    this.data = res.data;
                });
        },
    },
    mounted() {
        this.getData();
    },
  }
  </script>
  
  
  <style lang="scss" scoped>
  .homepage-wrapper {
    background: linear-gradient(180deg, #090837 0%, rgba(13, 12, 62, 0) 120%, rgba(13, 12, 62, 0) 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    align-items: center;
    font-family: 'Inter';
    overflow-x: hidden;
    overflow-y: scroll;

    .navbar {
        border-bottom: 3px solid #e5caa8;
        width: 110%;
        overflow: visible;
        padding-top: 30px;
        padding-bottom: 20px;

        .title {
            font-family: "Inter";
            color: #ffffff;
            font-weight: 700;
            font-size: 24px;
        }
    }

  }

  </style>
  