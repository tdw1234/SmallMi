<template>
    <div class="top">
        <div class="top-bar">
            <div class="container">
              <el-row>
                  <el-col :span="19" class="top-bar_nav">
                      <li v-for="item in barNavList" :key="item.id">
                          <a>{{item}}</a>
                          <span class="step">|</span>
                      </li>
                      <li>
                          <a class="download" @mouseenter="displayApp" @mouseleave="hiddenApp">下载App
                              <span class="appCode" :class="{download_active:isShowApp}">
                                  <img src="../assets/two-dimensional-code.png" alt="小米商城" width="90px" height="90px">
                                  小米商城App
                              </span>
                          </a>
                          <span class="step">|</span>
                      </li>
                      <li>
                          <a>Select Location</a>
                      </li>
                  </el-col>

                  <el-col :span="3" class="top-bar_info">
                      <li v-for="item in infoList" :key="item.id">
                          <a>{{item}}</a>
                          <span class="step">|</span>
                      </li>

                  </el-col>

                  <el-col :span="2" class="top-bar_cart" :style="background_color">
                      <a @mouseenter="changeBackground" @mouseleave="removeBackground" :style="a_background_color">
                          <em class="el-icon-shopping-cart-2"></em>
                          <span>购物车</span>
                          <span>（0）</span>
                          <div class="cart-menu" :class="{menu_active:isActive}">
                              <div class="menu-content" :class="{hide:isActive}">
                                  购物车中还没有商品，赶紧选购吧！
                              </div>
                          </div>
                      </a>
                  </el-col>
              </el-row>
            </div>

        </div>



        <div class="top-header">
            <div class="container">
                <el-row>
                    <el-col :span="3">
                        <div class="top-header_header-logo">
                            <a class="top-header_logo top-header_ir" title="小米官网">
                                小米官网
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="top-header_nav">
                            <li @mouseenter="displayTable(item,index)" @mouseleave="hiddenTable(item)" v-for="(item,index) in Object.keys(headerList)" :key="item.id">
                                <a rel="nofollow" href="#">{{item}}
                                </a>
                                <div @mouseenter="currentIndex=index" @mouseleave="currentIndex=''" class="header-nav-img"  v-show="index===currentIndex">
                                    <head-img-list :infoList="InfoList"></head-img-list>
                                </div>
                            </li>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="top-header_search">
                            <form class="search-form">
                                <a>
                                    <input placeholder="Redmi K30 Pro" @focus="selectKey"  v-model="inputMessage"/>
                                </a>
                                <a class="search-icon">
                                    <input type="submit" value=""/>
                                    <i class="el-icon-search"></i>
                                </a>
                               <!-- <el-button class="search-img" icon="el-icon-search"></el-button>-->
                          <!--  <input type="submit" value="el-icon-search" class="el-icon-search"/>-->
                                <!--<i class="el-icon-search"/>-->

                                <div class="keyword-list" :class="{hideKeyList:isShowKeyList}">
                                    <ul class="result-list">
                                        <li  @click="keySelected(item)"  @focusout="removeSelectKey(item)" v-for="item in keyList" :key="item.id">
                                            <a>
                                                {{item.name}}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <!--<a style="display: inline-block;margin-right: 0px">
                                <el-autocomplete
                                        class="inline-input"
                                        style="width: 230px;float:left;margin-left: -33px"
                                        :fetch-suggestions="querySearch"
                                        placeholder="小米Pro 10"
                                        @select="handleSelect"
                                >
                                </el-autocomplete>
                                <el-button  slot="append" icon="el-icon-search"></el-button>
                            </a>-->
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!--<div class="header-nav-img">
            <el-collapse-transition>
                <div v-show="headNavImgShow">
                    <div class="transition-box">
                        <head-img-list :infoList="InfoList" :headNavImgShow="headNavImgShow"></head-img-list>
                    </div>
                </div>
            </el-collapse-transition>
        </div>-->
    </div>
</template>

<script>

    import HeadImgList from "./HeadImgList";
    export default {
        name: "HeaderPage",
        components:{HeadImgList},
        data(){
            return {

                navIconItem:'',

                isShowKeyList:true,

                inputMessage:'',

                keyList:[{name:'小米10 青春版 5G',id:0},
                    {name:'Redmi K30 Pro',id:1},
                    {name:'小米手环4',id:2},
                    {name:'压力IH电饭煲',id:3},
                    {name:'米家手持挂烫机',id:4},
                    {name:'米家插线板 快充版 27W',id:5},
                    {name:'Redmi 手环',id:6},
                    {name:'小米10 Pro',id:7},
                    {name:'蓝牙耳机',id:8},
                    {name:'小米手表',id:9}],
                background_color:{
                    'background-color':'#424242'
                },

                a_background_color:{
                    'color':'none'
                },

                isShowApp:false,

                show:false,

                isActive:false,
                barNavList:['小米商城','MIUI','IoT','云服务','金融','有品','小爱开放平台','企业团购','资质证照','协议规则'],
                infoList:['登入','注册','通知'],
                InfoList:[],
                headerList: {
                    '小米': [{picture:require("../assets/xiaomishouji.jpg"),name:'小米',price:'1999'},
                        {picture:require('../assets/xiaomishouji.jpg'),name:'小米',price:'1999'},
                        {picture:require('../assets/xiaomishouji.jpg'),name:'小米',price:'1999'},
                        {picture:require('../assets/xiaomishouji.jpg'),name:'小米',price:'1999'},
                        {picture:require('../assets/xiaomishouji.jpg'),name:'小米',price:'1999'},
                        {picture:require('../assets/xiaomishouji.jpg'),name:'小米',price:'1999'},
                    ], 'RedMi手机': [{picture:require('../assets/hongmi.jpg'),name:'红米',price:'2999'},
                        {picture:require('../assets/hongmi.jpg'),name:'红米',price:'2999'},
                        {picture:require('../assets/hongmi.jpg'),name:'红米',price:'2999'},
                        {picture:require('../assets/hongmi.jpg'),name:'红米',price:'2999'},
                        {picture:require('../assets/hongmi.jpg'),name:'红米',price:'2999'},
                        {picture:require('../assets/hongmi.jpg'),name:'红米',price:'2999'},
                    ],
                    '电视': [{picture:require('../assets/dianshi.jpg'),name:'电视',price:'3999'},
                        {picture:require('../assets/dianshi.jpg'),name:'电视',price:'3999'},
                        {picture:require('../assets/dianshi.jpg'),name:'电视',price:'3999'},
                        {picture:require('../assets/dianshi.jpg'),name:'电视',price:'3999'},
                        {picture:require('../assets/dianshi.jpg'),name:'电视',price:'3999'},
                        {picture:require('../assets/dianshi.jpg'),name:'电视',price:'3999'},
                    ],'笔记本':[{picture:require('../assets/bijiben.jpg'),name:'笔记本',price:'4999'},
                        {picture:require('../assets/bijiben.jpg'),name:'笔记本',price:'4999'},
                        {picture:require('../assets/bijiben.jpg'),name:'笔记本',price:'4999'},
                        {picture:require('../assets/bijiben.jpg'),name:'笔记本',price:'4999'},
                        {picture:require('../assets/bijiben.jpg'),name:'笔记本',price:'4999'},
                        {picture:require('../assets/bijiben.jpg'),name:'笔记本',price:'4999'},
                    ],
                    '家电': [{picture:require('../assets/jiadian.jpg'),name:'家电',price:'999'},
                        {picture:require('../assets/jiadian.jpg'),name:'家电',price:'999'},
                        {picture:require('../assets/jiadian.jpg'),name:'家电',price:'999'},
                        {picture:require('../assets/jiadian.jpg'),name:'家电',price:'999'},
                        {picture:require('../assets/jiadian.jpg'),name:'家电',price:'999'},
                        {picture:require('../assets/jiadian.jpg'),name:'家电',price:'999'},
                    ], '路由器': [{picture:require('../assets/luyouqi.jpg'),name:'路由器',price:'99'},
                        {picture:require('../assets/luyouqi.jpg'),name:'路由器',price:'99'},
                        {picture:require('../assets/luyouqi.jpg'),name:'路由器',price:'99'},
                        {picture:require('../assets/luyouqi.jpg'),name:'路由器',price:'99'},
                        {picture:require('../assets/luyouqi.jpg'),name:'路由器',price:'99'},
                        {picture:require('../assets/luyouqi.jpg'),name:'路由器',price:'99'},
                    ],
                    '智能硬件': [{picture:require('../assets/zhinengyingjian.jpg'),name:'智能设备',price:'6999'},
                        {picture:require('../assets/zhinengyingjian.jpg'),name:'智能设备',price:'6999'},
                        {picture:require('../assets/zhinengyingjian.jpg'),name:'智能设备',price:'6999'},
                        {picture:require('../assets/zhinengyingjian.jpg'),name:'智能设备',price:'6999'},
                        {picture:require('../assets/zhinengyingjian.jpg'),name:'智能设备',price:'6999'},
                        {picture:require('../assets/zhinengyingjian.jpg'),name:'智能设备',price:'6999'},
                    ],

                    '服务': [],
                    '社区': []
                },
                restaurants:[],
                currentIndex: ''
            }
        },


        mounted() {
            this.restaurants = this.loadAll();
        },

        methods:{

            navIconIsShow(item){
                let ble = this.navIconItem ==item
                console.log('ble',ble)
                return this.navIconItem === item
            },

            displayTable(name, index){
                console.log('name',name)
                this.InfoList = this.headerList[name]
                this.navIconItem = index
                this.currentIndex = index
            },

            hiddenTable(item){
                console.log('hiddenTable',item)
                this.navIconItem=''
                this.currentIndex = ''
            },

            changeBackground(){
                this.background_color["background-color"]='#ffffff'
                this.a_background_color["color"]='#ff6700'
                this.isActive=true
                this.show = true
            },

            removeBackground(){
                this.background_color["background-color"]='#424242'
                this.a_background_color["color"]='#b0b0b0'
                this.isActive = false
                this.show = false
            },

            displayApp(){
                this.isShowApp = true
            },

            hiddenApp(){
                this.isShowApp = false
            },

            loadAll(){
                return [
                    {"value":"小米10 青春版 5G"},
                    {"value":"潮一把，率先做自己"},
                    {"value":"Redmi K30 Pro"},
                    {"value":"向往的智能生活"},
                    {"value":"小米手环4"},
                    {"value":"压力IH电饭煲"},
                    {"value":"电视"},
                    {"value":"智能"},
                    {"value":"米家手持挂烫机"},
                    {"value":"米家插线板 快充版 27W"}
                ]
            },
            selectKey(){
                this.isShowKeyList = false
            },
            removeSelectKey(item){
                console.log(' removeSelectKeyitemdfd',item)
                this.isShowKeyList = true
            },
            keySelected(item){
                console.log('itemdfd',item)
                this.inputMessage = item.name
                this.isShowKeyList=true
            }

        }
    }
</script>

<style lang="scss" scoped>

  /*  .header-nav-img{
        position: absolute;
        width: 100%;
        float: left;
        z-index: 50;
        box-shadow: 1px 1px 1px -1px #aaa;
        background-color: #fff;
    }*/


    .transition-box {
        width: 100%;
        height: 200px;
        text-align: center;
    }


    .top-bar{
        background-color: #333;
        height: 40px;
        line-height: 40px;
        color: #b0b0b0;
        font-size:12px;

        &_nav{
            position: relative;
            li {
                float: left;
                list-style-type: none;

               .download{
                   position:relative;
                   line-height: 40px;
                   display: inline-block;
                   .appCode{
                       position: absolute;
                       top: 40px;
                       left: 50%;
                       width: 124px;
                       height: 0;
                       background: #fff;
                       margin-left: -55px;
                       -webkit-box-shadow: #aaa 0 1px 5px;
                       box-shadow: 0 1px 5px #aaa;
                       text-align: center;
                       font-size: 14px;
                       color: #333;
                       line-height: 1;
                       overflow: hidden;
                       -webkit-transition: height .3s;
                       transition: height .3s;
                       z-index: 40;

                       img{
                           display: block;
                           margin: 18px auto 12px;
                       }
               }
                   .download_active{
                       overflow: visible;
                       height: 146px;
                   }

               }
            }

            li:last-child{
                span {
                    display: none;
                }
            }

        }


        &_info{
            li{
                float: left;
                list-style-type: none;
                line-height: 40px;
            }
            li:last-child{
                span {
                    display: none;
                }
            }
        }

        &_cart{
            a{
                display: block;
                height: 40px;
                em{
                    float: left;
                    font-size: 16px;
                    font-weight: bolder;
                    margin-right: 8px;
                    margin-top: 12px;
                }

                .cart-menu{
                    position: relative;
                    height: 0px;
                    -webkit-transition: height .3s;
                    transition: height .3s;
                    width: 300px;
                    margin-left: -198px;
                    z-index: 100;
                    background-color: white;


                    .menu-content{
                        display: none;
                        margin: 0 20px 20px;
                        padding: 20px 20px;
                        color: #333333;
                    }

                    .hide {
                        display: block;
                        z-index: 100;
                    }
                }

                .menu_active{
                    box-shadow: 1px 0px 1px 1px #b0b0b0;
                    -webkit-box-shadow: 2px 2px 5px 3px #b0b0b0;
                    -moz-box-shadow: 2px 2px 5px 3px #b0b0b0;
                    -o-box-shadow: 2px 2px 5px 3px #b0b0b0;
                    height: 100px;
                }
             }

            }


    }

    .top-header{
        height: 100px;
        line-height: 100px;

        &_header-logo{
            float: left;
            width: 62px;
            margin-top: 22px;
        }

        &_logo{
                position: relative;
                display: block;
                width: 55px;
                height: 55px;
                overflow: hidden;
                background-color: #ff6700;

            &::before,&::after{
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                width: 55px;
                height: 55px;
                content: '';
                transform-origin: 50% 50%;
                transition: all .2s;
            }

            &:before{
                background: url(../assets/mi-logo.png) no-repeat 50% 50%;
                opacity: 1;
                transform: translate(0, 0);
            }

            &:after{
                background: url(../assets/mi-home.png) no-repeat 50% 50%;
                opacity: 0;
                margin-left: -55px;
                transform: translate(0, 0);
            }

            &:hover::before{
                opacity: 0;
                transform: translateX(55px);
            }

            &:hover::after{
                opacity: 1;
                transform: translateX(55px);
            }

            }

        &_ir {
            text-align: left;
            text-indent: -9999em;      /*当CSS能加载出来，这个是看不见的，当只有HTML加载出来，这个文字是可以看到的*/
        }

        &_nav{
            li{
                list-style-type: none;
                float: left;
                font-size: 16px;
                text-align: center;
                line-height:100px ;
                height: 100px;
                width: 80px;
                .header-nav-img{
                    position: absolute;
                    top: 100px;
                    left: -100px;
                    width: 1140px;
                    float: left;
                    height: 200px;
                    z-index: 50;
                    box-shadow: 1px 1px 1px -1px #aaa;
                    background-color: #fff;
                }

                .nav-icon-active{
                     overflow: visible;
                    -webkit-transition: overflow .3s;
                    transition: overflow .3s;
                }

                a{
                    color: #333;
                    width: 100%;
                    text-decoration: none;
                }

                a:hover{
                    color: #ff6700;
                }

            }
        }

        &_search{

            position: relative;
            top: 20px;
            .search-form{
                position: relative;
                left: -45px;

                width: 296px;
                height: 50px;
                z-index: 20;
                a{
                    position: relative;
                    display: block;
                    width: 243px;
                    height: 50px;
                    align-items: center;

                    input{
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 240px;
                        height: 45px;
                    }
                }


                /*.search-img{
                    position: absolute;
                    top: 0px;
                    display: block;
                    right: 0;
                    width: 51px;
                    height: 51px;
                }*/

                .search-icon{
                    display: block;
                    position: absolute;
                    right: -2px;
                    top:-2px;
                    width: 54px;
                    height: 54px;
                    background-color: white;
                    z-index:10;
                    opacity: 0.5;
                    input{
                        float: left;
                        width: 54px;
                        height: 54px;
                        z-index: 12;
                        opacity: 0.3;
                    }

                    i{
                        display: block;
                        font-size: 20px;
                        font-weight: bolder;
                        color: #333333;
                        z-index: 30;
                        margin: 15px 10px 10px 15px;
                    }

                }


                .keyword-list{
                    position: absolute;
                    left: 0;
                    top: 50px;
                    _top: 51px;
                    z-index: 20;
                    width: 244px;
                    border: 1px solid #333;
                    border-top: 0;
                    background: #fff;

                    ul{
                        list-style-type: none;
                        padding:0px;
                        margin: 0px;
                        line-height: 40px;
                        li{
                            display: list-item;
                            text-align: -webkit-match-parent;
                            width: 243px;
                            padding-left: 20px;
                        }

                        li:hover{
                            background-color: #aaaaaa;
                        }
                    }
                }

                .hideKeyList{
                    display: none;
                }
            }



        }
    }

    .container{
        width: 1226px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
    .step{
        margin: 0 .3em;
        color: #424242;
    }

    a:hover{
        color: #fff;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .top-header_nav {
        position: relative;
    }
    .top-header_nav::after {
        content: '';
        display: block;
        clear: both;
    }

</style>
