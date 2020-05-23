<template>
    <div class="container">
        <ul>
            <li v-for="item in infoList " :key="item.id" >
                <img  :src="item.picture"/>
                <span>{{item.name}}</span>
                <p class="price"> {{item.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HeadImgList",
        props: {
            infoList: {
                type: Array,
                require: true
            }

        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
        background-color: #fff;
    }

    .container ul {
        font-size: 12px;
        color: #333333;
        list-style-type: none;
    }

    .container ul li {
        margin: 0 10px;
        width: 160px;
        height: 110px;
        line-height: 20px;
        float: left;
        text-align: center;

        img{
            margin: 0;
        }

        .price{
            height: 20px;
            line-height: 20px;
        }
    }


</style>
