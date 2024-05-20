<template>
    <div class="container">
        <div class="process">
            <p class="title">学车流程</p>
            <ul>
                <li>
                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/967c5f51b9995b3cea6ac917ccebbd10.png" alt="">
                    <div>
                        <p class="p1">
                            <a href="http://" target="_blank" rel="noopener noreferrer">科目一</a>
                        </p>
                        <p class="p2">2024新题库</p>
                    </div>
                </li>
                <li>
                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/9bfc61e92388bf9d0521dbbc5497172b.png" alt="">
                    <div>
                        <p class="p1">
                            <a href="http://" target="_blank" rel="noopener noreferrer">科目二</a>
                        </p>
                        <p class="p2">精选视频，详解考点</p>
                    </div>
                </li>
                <li>
                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/5061edda4ba913bd8f1ca5bdaee8d1d7.png" alt="">
                    <div>
                        <p class="p1">
                            <a href="http://" target="_blank" rel="noopener noreferrer">科目三</a>
                        </p>
                        <p class="p2">全方位讲解，攻克难点</p>
                    </div>
                </li>
                <li>
                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/ef73328f70c08beb91f54eae709a05b1.png" alt="">
                    <div>
                        <p class="p1">
                            <a href="http://" target="_blank" rel="noopener noreferrer">科目四</a>
                        </p>
                        <p class="p2">2024新题库</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 轮播图 -->
        <div class="block text-center" m="t-4">
            <el-carousel trigger="click" height="380px" arrow="never">
                <el-carousel-item v-for="item in imagesURL" :key="item.url">
                    <a :href="item.url1" target="_blank" rel="noopener noreferrer"><img style="object-fit: cover;" :src='item.url' alt=""></a>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import image1 from "@/assets/images/home_banner_download.png"
import image2 from '@/assets/images/home_banner_new1.png'
import image3 from '@/assets/images/home_banner_jiaolian.png'
import image4 from '@/assets/images/home_banner_jiaxiaobang.png'
const imagesURL = [
    { url: image1, url1: 'https://saas-shop.jiakaobaodian.com/runtu/cooperate.html' },
    { url: image2, url1: 'https://www.jiakaobaodian.com/download/' },
    { url: image3, url1: 'https://www.mucang.cn/company/honor/' },
    { url: image4, url1: 'https://www.mucang.cn/jiaolianbaodian/?from=jxrz-topbanner' }
]

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 380px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }

    /* 水平指示器 */
    /* 将轮播图指示器变成圆点 */
    :deep(.el-carousel__indicator--horizontal .el-carousel__button) {
        width: 8px;
        height: 8px;
        /* background: transparent; */
        background: #000;
        border: 1px solid #ffffff;
        border-radius: 100%;
        /*不透明度 */
        opacity: 0.2;
    }

    /* 当前被选中的指示器样式 */
    :deep(.el-carousel__indicator--horizontal.is-active .el-carousel__button) {
        background: #007aff;
        opacity: 1;
    }

    .process {
        position: absolute;
        width: 287px;
        left: 20px;
        top: 15px;
        z-index: 1;
        padding: 0 20px;
        background-color: rgba(255, 255, 255, 0.9);

        .title {
            font-size: 20px;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px dotted #ddd;
            text-align: center;
        }

        ul {
            li {
                display: flex;
                align-items: center;

                img {
                    height: 42px;
                    width: 42px;
                    margin-right: 5px;
                }

                padding: 16px 20px 16px 0;

                .p1 {
                    a {
                        color: #37b5f8;
                        font-size: 16px;
                    }
                }

                .p2 {
                    margin-top: 5px;
                    color: #666;
                }

                p {
                    text-align: left;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>