<template>
    <div class="middle-nav">
        <ul v-for="(middleItem) in middleArray" class="middle-nav__ul" :key="middleItem.id">
            <li v-for="item in middleItem" class="middle-nav__li" :key="item.id">
                <a><img :src = "item.picture" /><span>{{item.name}}</span></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MiddleNavList",
        props:{
            middleArray:{
                type:Array,
                require:true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .middle-nav{
        ul {
            float: left;
            list-style-type: none;
            padding: 10px;
            margin-top: 5px;
            li{
              display: flex;
              align-items: center;
              width: 229px;
                height: 70px;
                a{
                    display: block;
                    line-height: 46px;
                    color: #333;

                    span{
                        float: right;
                        line-height: 40px;
                        margin-left: 10px;

                    }
                }
            }
        }
    }

</style>
