<template>
<div class="footer">
   <div class="container">
       <el-row>
           <el-col :span="5">
               <nine-blank></nine-blank>
           </el-col>
           <el-col :span="19" class = "three-img">
               <li v-for = "item in imgList" :key="item.id">
                   <div>
                       <a><img :src="item.picture"></a>
                   </div>
               </li>
           </el-col>
       </el-row>
   </div>
</div>
</template>

<script>
    import NineBlank from "./NineBlank";
    export default {
        name: "FooterPage",
        components:{NineBlank},
        data(){
            return {
                imgList:[{picture:require("../assets/RedMiNote8.jpg"),id:0},
                    {picture:require("../assets/RedMiK30.jpg"),id:1},
                    {picture:require("../assets/SmallMI4.jpg"),id:3}]
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>

    .container{
        width: 1226px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }

    .three-img{

        display: flex;
        justify-content: space-between;

        li{
            list-style-type: none;
            float: left;

            a{
                img{
                    width: 316px;
                    height: 170px;
                }
            }

            a:hover {
                display: block;
                box-shadow: 0px 2px 50px 1px #b0b0b0;
            }

        }

    }


</style>
