<template>
    <!-- 顶部 -->
    <div class="top">
        <div class="top_container">
            <!-- 左侧图标 -->
            <div class="left">
                <a href="https://nanyang.jiakaobaodian.com/">
                    <img src="../../assets/images/logo.png" alt="">
                </a>
            </div>
            <!-- 右侧搜索框 -->
            <div class="right">
                <el-input style="width: 300px;height: 42px;" placeholder="请输入关键字" />
                <el-button type='' text style="height: 42px;" bg>
                    搜索
                </el-button>
            </div>
        </div>
        <!-- 导航栏 -->
        <div class="nav">
            <ul class="nav_content">
                <li><a :class="{ active: isActive == 1 }" @click="change(1)" href="#">首页</a></li>
                <!-- 下拉菜单 -->
                <li class="second_nav">
                    <a :class="{ active: isActive == 2 }" @click="change(2)" href="#" class="cont">模拟考试</a>
                    <div class="nav2">
                        <a @click="change(2)" href="#">科目一</a>
                        <a @click="change(2)" href="#">科目二</a>
                        <a @click="change(2)" href="#">科目三</a>
                        <a @click="change(2)" href="#">科目四</a>
                    </div>
                </li>
                <li class="second_nav">
                    <a :class="{ active: isActive == 3 }" @click="change(3)" href="#" class="cont">找驾校</a>
                    <div class="nav2">
                        <a @click="change(3)" href="#">找驾校</a>
                        <a @click="change(3)" href="#">找教练</a>
                        <a @click="change(3)" href="#">找陪练</a>
                    </div>
                </li>
                <li><a :class="{ active: isActive == 4 }" @click="change(4)" href="#">驾考圈</a></li>
                <li><a :class="{ active: isActive == 5 }" @click="change(5)" href="#">交通标志</a></li>
                <li><a :class="{ active: isActive == 6 }" @click="change(6)" href="#">软件下载</a></li>
                <li><a :class="{ active: isActive == 7 }" @click="change(7)" href="#">驾考宝典企业版</a></li>
                <li class="second_nav">
                    <a :class="{ active: isActive == 8 }" @click="change(8)" href="#" class="cont">买新车</a>
                    <div class="nav2">
                        <a @click="change(8)" href="#">买车网</a>
                        <a @click="change(8)" href="#">平行之家</a>
                    </div>
                </li>
                <li><a :class="{ active: isActive == 9 }" @click="change(9)" href="#">二手车</a></li>
            </ul>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

let isActive = ref(1)
const change = (val: any) => {
    isActive.value = val
}
</script>

<style scoped lang="scss">
.top {
    width: 100%;
    height: 148px;
    z-index: 999;
    // position: fixed;
    font-size: 14px;

}

.top_container {
    width: 1200px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    margin: 28px auto;
    background-color: #fff;

    .left {
        height: 42px;

        img {
            width: 207px;
            height: 100%;
        }
    }

}

.nav {
    width: 100%;
    height: 50px;
    background-color: #37b5f8;

    .nav_content {
        display: flex;
        width: 100%;
        height: 50px;
        line-height: 50px;
        justify-content: space-evenly;

        li {
            display: block;
            width: 100%;
            height: 100%;
            font-size: 16px;
        }

        .second_nav>a:after {
            //下拉菜单后的图标
            display: inline-block;
            vertical-align: middle;
            width: 10px;
            height: 10px;
            margin-left: 6px;
            margin-top: 5px;
            border: 5px solid transparent;
            border-top: 5px solid #fff;
            content: ' ';
        }

        .second_nav {
            position: relative;

            .nav2 {
                position: absolute;
                display: none;
                z-index: 2;
                font-size: 14px;
                background-color: #fff;
                width: 100%;

                a {
                    color: #666;
                }

                a:hover {
                    color: #37B5F8;
                    background-color: #fff;
                }
            }
        }

        .second_nav:hover .nav2 {
            display: block; //当鼠标悬浮在有下拉菜单的元素上时，下拉菜单变为块级元素展示
        }

        a {
            color: #fff;
            display: block;
            padding: 0;
            margin: 0;
            text-decoration: none;
            cursor: pointer;
        }

        a.active {
            background-color: #258fc7;
        }

        a:hover {
            background-color: #54C0F9;
        }
    }

}
</style>