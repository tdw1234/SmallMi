<template>
   <div class="middle">
      <div class="container">
         <el-row>
            <el-col :span="24">
               <el-carousel :interval="4000" trigger="click" height="468px">
                  <el-carousel-item v-for="item in  imageBox" :key="item.id">
                     <img :src="item.idView"  class="image">
                  </el-carousel-item>
               </el-carousel>

               <div class="nav">
                  <li @mouseenter="tableDisplay(item)"  @mouseleave="hiddenDisplay" v-for="item in Object.keys(middleList)" :key="item.id">
                     <a>{{item}} <i class="el-icon-arrow-right"></i></a>
                  </li>
               </div>

               <div @mouseenter="middleIsDisplay=true" @mouseleave="middleIsDisplay=false" class="image-show" v-show="middleIsDisplay">
                  <middle-nav-list :middleArray="middleArray"></middle-nav-list>
               </div>

            </el-col>

         </el-row>

      </div>

   </div>
</template>

<script>

   import MiddleNavList from "./MiddleNavList";
    export default {
       name: "MiddlePage",
       components:{MiddleNavList},
       data() {
          return {

             middleIsDisplay:false,

             middleNavInfoList:[],

             middleArray:[[]],

             imageBox: [
                {id: 0, idView: require("../assets/beijing01.jpg")},
                {id: 1, idView: require("../assets/beijing02.jpg")},
                {id: 2, idView: require("../assets/beijing03.jpg")},
                {id: 3, idView: require("../assets/beijing04.jpg")},
                {id: 4, idView: require("../assets/beijing05.jpg")}],
             middleList: {
                '手机 电话卡': [{
                   picture: require('../assets/xiaomi_telephone.jpg'),
                   'name': '手机电话卡'
                }, {
                   picture: require('../assets/xiaomi_telephone.jpg'),
                   'name': '手机电话卡'
                }, {
                   picture: require('../assets/xiaomi_telephone.jpg'),
                   'name': '手机电话卡'
                }, {picture: require('../assets/xiaomi_telephone.jpg'), 'name': '手机电话卡'}
                   , {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {picture: require('../assets/xiaomi_telephone.jpg'), 'name': '手机电话卡'}
                   , {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {picture: require('../assets/xiaomi_telephone.jpg'), 'name': '手机电话卡'}
                   , {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {picture: require('../assets/xiaomi_telephone.jpg'), 'name': '手机电话卡'}
                   , {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {picture: require('../assets/xiaomi_telephone.jpg'), 'name': '手机电话卡'}
                   , {
                      picture: require('../assets/xiaomi_telephone.jpg'),
                      'name': '手机电话卡'
                   }, {picture: require('../assets/xiaomi_telephone.jpg'), 'name': '手机电话卡'}
                ],
                '电视 盒子': [ {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_tv.jpg'), 'name': '电视盒子'}
                   , {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_tv.jpg'), 'name': '电视盒子'}
                   , {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_tv.jpg'), 'name': '电视盒子'}
                   , {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_tv.jpg'), 'name': '电视盒子'}
                   , {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_tv.jpg'), 'name': '电视盒子'}
                   , {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_tv.jpg'), 'name': '电视盒子'}
                   , {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_tv.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_tv.jpg'), 'name': '电视盒子'}
                ],
                '笔记本 显示器 平板': [{
                   picture: require('../assets/xiaomi_notebook.jpg'),
                   'name': '电视盒子'
                }, {
                   picture: require('../assets/xiaomi_notebook.jpg'),
                   'name': '电视盒子'
                }, {
                   picture: require('../assets/xiaomi_notebook.jpg'),
                   'name': '电视盒子'
                }, {picture: require('../assets/xiaomi_notebook.jpg'), 'name': '电视盒子'}
                   , {
                      picture: require('../assets/xiaomi_notebook.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_notebook.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_notebook.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_notebook.jpg'), 'name': '电视盒子'}
                   , {
                      picture: require('../assets/xiaomi_notebook.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_notebook.jpg'),
                      'name': '电视盒子'
                   }, {
                      picture: require('../assets/xiaomi_notebook.jpg'),
                      'name': '电视盒子'
                   }, {picture: require('../assets/xiaomi_notebook.jpg'), 'name': '电视盒子'}],
                '家电 插线板': [{
                   picture: require('../assets/xiaomi_electric.jpg'),
                   'name': '家电'
                }, {
                   picture: require('../assets/xiaomi_electric.jpg'),
                   'name': '家电'
                }, {
                   picture: require('../assets/xiaomi_electric.jpg'),
                   'name': '家电'
                }, {picture: require('../assets/xiaomi_electric.jpg'), 'name': '家电'}
                   , {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {picture: require('../assets/xiaomi_electric.jpg'), 'name': '家电'}
                   , {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {picture: require('../assets/xiaomi_electric.jpg'), 'name': '家电'}
                   , {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {picture: require('../assets/xiaomi_electric.jpg'), 'name': '家电'}
                   , {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {picture: require('../assets/xiaomi_electric.jpg'), 'name': '家电'}
                   , {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {
                      picture: require('../assets/xiaomi_electric.jpg'),
                      'name': '家电'
                   }, {picture: require('../assets/xiaomi_electric.jpg'), 'name': '家电'}
                ],
                '出行 穿戴': [{
                   picture: require('../assets/xiaomi_travel.jpg'),
                   'name': '出行穿戴'
                }, {
                   picture: require('../assets/xiaomi_travel.jpg'),
                   'name': '出行穿戴'
                }, {
                   picture: require('../assets/xiaomi_travel.jpg'),
                   'name': '出行穿戴'
                }, {picture: require('../assets/xiaomi_travel.jpg'), 'name': '出行穿戴'}
                   , {
                      picture: require('../assets/xiaomi_travel.jpg'),
                      'name': '出行穿戴'
                   }, {
                      picture: require('../assets/xiaomi_travel.jpg'),
                      'name': '出行穿戴'
                   }, {
                      picture: require('../assets/xiaomi_travel.jpg'),
                      'name': '出行穿戴'
                   }, {picture: require('../assets/xiaomi_travel.jpg'), 'name': '出行穿戴'}
                   , {
                      picture: require('../assets/xiaomi_travel.jpg'),
                      'name': '出行穿戴'
                   }, {
                      picture: require('../assets/xiaomi_travel.jpg'),
                      'name': '出行穿戴'
                   }, {
                      picture: require('../assets/xiaomi_travel.jpg'),
                      'name': '出行穿戴'
                   }, {picture: require('../assets/xiaomi_travel.jpg'), 'name': '出行穿戴'}
                   , {
                      picture: require('../assets/xiaomi_travel.jpg'),
                      'name': '出行穿戴'
                   }, {picture: require('../assets/xiaomi_travel.jpg'), 'name': '出行穿戴'}],
                '电源 配件': [{
                   picture: require('../assets/xiaomi_charge.jpg'),
                   'name': '电源配件'
                }, {
                   picture: require('../assets/xiaomi_charge.jpg'),
                   'name': '电源配件'
                }, {
                   picture: require('../assets/xiaomi_charge.jpg'),
                   'name': '电源配件'
                }, {picture: require('../assets/xiaomi_charge.jpg'), 'name': '电源配件'}
                   , {
                      picture: require('../assets/xiaomi_charge.jpg'),
                      'name': '电源配件'
                   }, {
                      picture: require('../assets/xiaomi_charge.jpg'),
                      'name': '电源配件'
                   }, {
                      picture: require('../assets/xiaomi_charge.jpg'),
                      'name': '电源配件'
                   }, {picture: require('../assets/xiaomi_charge.jpg'), 'name': '电源配件'}
                   , {
                      picture: require('../assets/xiaomi_charge.jpg'),
                      'name': '电源配件'
                   }, {
                      picture: require('../assets/xiaomi_charge.jpg'),
                      'name': '电源配件'
                   }, {
                      picture: require('../assets/xiaomi_charge.jpg'),
                      'name': '电源配件'
                   }, {picture: require('../assets/xiaomi_charge.jpg'), 'name': '电源配件'}],
                '健康 儿童': [{
                   picture: require('../assets/xiaomi_child.jpg'),
                   'name': '健康儿童'
                }, {
                   picture: require('../assets/xiaomi_child.jpg'),
                   'name': '健康儿童'
                }, {
                   picture: require('../assets/xiaomi_child.jpg'),
                   'name': '健康儿童'
                }, {picture: require('../assets/xiaomi_child.jpg'), 'name': '健康儿童'}
                   , {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {picture: require('../assets/xiaomi_child.jpg'), 'name': '健康儿童'}
                   , {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {picture: require('../assets/xiaomi_child.jpg'), 'name': '健康儿童'}
                   , {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {picture: require('../assets/xiaomi_child.jpg'), 'name': '健康儿童'}
                   , {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {
                      picture: require('../assets/xiaomi_child.jpg'),
                      'name': '健康儿童'
                   }, {picture: require('../assets/xiaomi_child.jpg'), 'name': '健康儿童'}],
                '耳机 音箱': [{
                   picture: require('../assets/xiaomi_earphone.jpg'),
                   'name': '耳机音箱'
                }, {
                   picture: require('../assets/xiaomi_earphone.jpg'),
                   'name': '耳机音箱'
                }, {
                   picture: require('../assets/xiaomi_earphone.jpg'),
                   'name': '耳机音箱'
                }, {picture: require('../assets/xiaomi_earphone.jpg'), 'name': '耳机音箱'}
                   , {
                      picture: require('../assets/xiaomi_earphone.jpg'),
                      'name': '耳机音箱'
                   }, {
                      picture: require('../assets/xiaomi_earphone.jpg'),
                      'name': '耳机音箱'
                   }, {
                      picture: require('../assets/xiaomi_earphone.jpg'),
                      'name': '耳机音箱'
                   }, {picture: require('../assets/xiaomi_earphone.jpg'), 'name': '耳机音箱'}
                   , {
                      picture: require('../assets/xiaomi_earphone.jpg'),
                      'name': '耳机音箱'
                   }, {
                      picture: require('../assets/xiaomi_earphone.jpg'),
                      'name': '耳机音箱'
                   }, {
                      picture: require('../assets/xiaomi_earphone.jpg'),
                      'name': '耳机音箱'
                   }, {picture: require('../assets/xiaomi_earphone.jpg'), 'name': '耳机音箱'}
                   , {
                      picture: require('../assets/xiaomi_earphone.jpg'),
                      'name': '耳机音箱'
                   }, {picture: require('../assets/xiaomi_earphone.jpg'), 'name': '耳机音箱'}],
                '生活 箱包': [{
                   picture: require('../assets/xiaomi_life.jpg'),
                   'name': '生活箱包'
                }, {
                   picture: require('../assets/xiaomi_life.jpg'),
                   'name': '生活箱包'
                }, {
                   picture: require('../assets/xiaomi_life.jpg'),
                   'name': '生活箱包'
                }, {picture: require('../assets/xiaomi_life.jpg'), 'name': '生活箱包'}
                   , {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {picture: require('../assets/xiaomi_life.jpg'), 'name': '生活箱包'}
                   , {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {picture: require('../assets/xiaomi_life.jpg'), 'name': '生活箱包'}
                   , {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {
                      picture: require('../assets/xiaomi_life.jpg'),
                      'name': '生活箱包'
                   }, {picture: require('../assets/xiaomi_life.jpg'), 'name': '生活箱包'}
                   , {picture: require('../assets/xiaomi_life.jpg'), 'name': '生活箱包'}],
                '智能 路由器': [{
                   picture: require('../assets/xiaomi_smart.jpg'),
                   'name': '智能路由器'
                }, {
                   picture: require('../assets/xiaomi_smart.jpg'),
                   'name': '智能路由器'
                }, {
                   picture: require('../assets/xiaomi_smart.jpg'),
                   'name': '智能路由器'
                }, {picture: require('../assets/xiaomi_smart.jpg'), 'name': '智能路由器'}
                   , {
                      picture: require('../assets/xiaomi_smart.jpg'),
                      'name': '智能路由器'
                   }, {
                      picture: require('../assets/xiaomi_smart.jpg'),
                      'name': '智能路由器'
                   }, {
                      picture: require('../assets/xiaomi_smart.jpg'),
                      'name': '智能路由器'
                   }, {picture: require('../assets/xiaomi_smart.jpg'), 'name': '智能路由器'}
                   , {
                      picture: require('../assets/xiaomi_smart.jpg'),
                      'name': '智能路由器'
                   }, {
                      picture: require('../assets/xiaomi_smart.jpg'),
                      'name': '智能路由器'
                   }, {
                      picture: require('../assets/xiaomi_smart.jpg'),
                      'name': '智能路由器'
                   }, {picture: require('../assets/xiaomi_smart.jpg'), 'name': '智能路由器'}
                   , {
                      picture: require('../assets/xiaomi_smart.jpg'),
                      'name': '智能路由器'
                   }, {picture: require('../assets/xiaomi_smart.jpg'), 'name': '智能路由器'}]
             }
          }
       },

       methods:{

          tableDisplay(name) {
             //开始搞事情

             this.middleNavInfoList = this.middleList[name]
             let navLength = this.middleNavInfoList.length
             const divider = 6
             let discuss = parseInt(navLength / divider)
             let remainder = navLength % divider
             if (remainder === 0) {
                discuss--
             }
             let ulMap = new Map()
             let m
             for (m = 0; m <= discuss; m++) {
                let tempArray
                if (m === discuss) {
                   tempArray = this.middleNavInfoList.slice(m * divider, navLength)
                   ulMap.set(m, tempArray)
                } else {
                   tempArray = this.middleNavInfoList.slice(m * divider, (m + 1) * divider)
                   ulMap.set(m, tempArray)
                }
             }


             let ulArray = new Array()
             ulMap.forEach(function (ulValue, ulKey) {
                ulArray[ulKey] = new Array()
                ulValue.forEach(function (liValue, liKey) {
                   ulArray[ulKey][liKey] = liValue
                })
             })
             this.middleArray = ulArray

             this.middleIsDisplay = true
          }
          , hiddenDisplay(){
             this.middleIsDisplay= false
          }
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

   .middle{
      position: relative;
      .nav{
         position: absolute;
         top:1px;
         left:0px;
         z-index: 30;
         background-color: #aaaaaa;
         opacity: 0.9;
         align-content: center;
         width: 230px;
         padding:19px 0px 26px 0px;
         li{
            list-style-type: none;
            a{
               display: inline-block;
               width: 210px;
               padding: 11px 0px 13px 20px;
               position: relative;
               text-align: left;
               color: #fff;
               font-size: 13px;

               i{
                  position: absolute;
                  right: 5px;
                  font-size: 14px;
                  font-weight: bolder;
                  margin-left: 100px;
               }
            }

            a:hover{
               background-color: #ff6700;
            }

         }
      }

      .image-show{
         position: absolute;
         top:1px;
         left:230px;
         z-index: 30;
         background-color: #fff;
         box-shadow: 1px 1px 1px -1px #aaaaaa;
      }
   }

</style>
