<template>
    <div class="box  top-box">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <p class="description" style="font-weight:700">คะแนนความโชคดีของคุณ : <span style="color:black">{{
            luckyScore
        }}</span> </p>
        <p class="description" style="font-weight:700">สีนำโชค :
            <span class="text-color" v-for="luckyColorItems in luckyColor"
                :style="{ color: luckyColorItems.rgb_code }">{{
                    luckyColorItems.name
                }} </span>
        </p>
        <p class="description" style="font-weight:700">สีอับโชค :
            <span class="text-color" v-for="unLuckyColorItems in unLuckyColor"
                :style="{ color: unLuckyColorItems.rgb_code }">{{
                    unLuckyColorItems.name
                }} </span>
        </p>
        <img v-if="title" class="icon-card" :src="getIconUrl(title)" alt="" />
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            default: 'Title',
        },
        description: {
            type: String,
            default: 'Description',
        },
        luckyScore: {
            type: Number,
            default: 0,
        },
        luckyColor: {
            type: Array,
            default() {
                return [
                    {
                        name: '-',
                        rgb_code: 'black',
                    },
                ]
            }
        },
        unLuckyColor: {
            type: Array,
            default() {
                return [
                    {
                        name: '-',
                        rgb_code: 'black',
                    },
                ]
            }
        },
    },
    methods: {
        getIconUrl(title) {
            let iconUrl = 'https://assets.codepen.io/2301174/icon-supervisor.svg'
            if (title === 'Financial') iconUrl = 'https://static.vecteezy.com/system/resources/previews/009/992/175/original/3d-finance-icon-png.png';
            if (title === 'Work') iconUrl = 'https://icon-library.com/images/work-icon-png/work-icon-png-18.jpg';
            if (title === 'Love') iconUrl = 'https://cdn-icons-png.flaticon.com/512/214/214309.png';
            if (title === 'Luck') iconUrl = 'https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/luck-lucky-icon.png';
            if (title === 'Health') iconUrl = 'https://icons.veryicon.com/png/o/business/circular-multi-color-function-icon/health-health.png';
            if (title === 'Negociate') iconUrl = 'https://static.thenounproject.com/png/3162144-200.png';
            if (title === 'Support') iconUrl = 'https://cdn-icons-png.flaticon.com/512/190/190119.png';
            return iconUrl
        }
    },
}
</script>

<style lang="scss" scoped>
.box {
    position: relative;
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
    padding: 30px;
    margin: 20px;
    background-color: white;

    .title {
        font-size: 24px;
        font-weight: 700;
        color: hsl(229, 31%, 21%);
    }

    .description {
        font-size: 16px;
        font-weight: 400;
        color: hsl(229, 8%, 60%);
        margin-top: 10px;
    }
}

.top-box {
    border-top: 3px solid hsl(212, 86%, 64%);
}

.icon-card {
    position: absolute;
    top: -15px;
    right: -20px;
    width: 64px;
    height: 64px;
}

.text-color {
    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black;
}
</style>