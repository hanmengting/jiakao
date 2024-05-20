<template>
    <div class="home_container">
        <!-- 侧边固定提示 -->
        <Tip/>
        <!-- 轮播图 -->
        <Carousel/>
        <!-- 南阳市2024小车理论考试 -->
        <Test/>
        <!-- 入驻管理驾校图片 -->
        <div class="banner">
            <a href="">
                <img src="https://www.jiakaobaodian.com/core-assets/static/images/common/banner-jxb.png" alt="">
            </a>
        </div>
        <!-- 驾校推荐 -->
        <Recommend/>
        <!-- 学车流程 -->
        <Process/>
        <!-- 宝典荣誉 -->
        <Honor/>
        <!-- 驾考宝典APP -->
        <Examapp/>
        <!-- 底部二维码 -->
        <div class="bottom">
            <div class="left">
                <div>
                    <p class="p1">驾考宝典下载</p>
                    <p class="p2">考驾照 用宝典</p>
                </div>
                <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/dd59a20c70d3f6ed409efc01c65ad14d.png" alt="">
            </div>
            <div class="right">
                <div>
                    <p class="p1">驾考宝典微信小程序</p>
                    <p class="p2">无需下载，驾考做题更方便</p>
                </div>
                <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/9e699ddb2a6e87f8fbe90aa6b1d01564.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tip from './tip/index.vue'
// 引入首页轮播图
import Carousel from './carousel/index.vue'
import Test from './test/index.vue'
import Recommend from './recommend/index.vue'
import Process from './process/index.vue'
import Honor from './honor/index.vue'
import Examapp from './examapp/index.vue'
</script>

<style lang="scss" scoped>
.home_container{
    .banner{
        height: 120px;
        margin-top: -30px;
        margin-bottom: 60px;
    }
    .bottom{
        width: 1200px;
        margin: 60px auto;
        display: flex;
        .left{
            border-right: 1px solid #e9e9e9;
        }
        .left, .right{
            width: 600px;
            margin: 20px 0;
            padding: 0 80px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            div{
                
                text-align: left;
                p{
                    line-height: 1.7;
                }
                .p1{
                    font-size: 20px;
                }
                .p2{
                    color: #999;
                    font-size: 14px;
                }
            }
            img{
                width: 140px;
                height: 140px;
            }
        }
    }
}
</style>