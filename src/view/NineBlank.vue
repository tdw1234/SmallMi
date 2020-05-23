<template>
    <div class="nine-blank">
        <li v-for="item in imageList" :key="item.id" >
            <a>
                <img :src="item.picture" :style="setHeight">
                {{item.name}}
            </a>
        </li>

    </div>
</template>

<script>
    export default {
        name: "NineBlank",
        data(){

            return{
                setHeight:{
                    height: 60
                },
                imageList:[{picture:require('../assets/xiaomimiaosha.jpg'),name:'小米秒杀',id:'0'},
                    {picture:require('../assets/qiyetuangou.jpg'),name:'企业团购',id:'1'},
                    {picture:require('../assets/Fmatongdao.jpg'),name:'F码通道',id:'2'},
                    {picture:require('../assets/mifenka.jpg'),name:'米粉卡',id:'3'},
                    {picture:require('../assets/yijiuhuanxin.jpg'),name:'以旧换新',id:'4'},
                    {picture:require('../assets/huafeichognzhi.jpg'),name:'花费充值',id:'5'}]
            }

        }
    }
</script>

<style lang="scss" scoped>

    .nine-blank{
        width: 230px;
        display: grid;
        grid-template-rows: 85px 85px;
        /*共三行，每行行高60px*/
        grid-template-columns: 76px 76px 76px;
        background-color: #424242;

        li{
            list-style-type: none;
            font-size:12px;
            color: #fff;
            opacity: 0.7;
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            a{
                display: block;
                width: 70px;
                height: 64px;
                text-align: center;
                img{
                    width: 24px;
                    height: 24px;
                    margin: 0 23px 10px 23px;
                }
            }
        }

        li:hover{
            opacity: 1;
        }

    }

</style>
