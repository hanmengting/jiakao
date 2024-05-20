<template>
    <div class="honor">
        <div class="honor_title">
            <p class="split"></p>
            <div class="title_text">宝典荣誉</div>
            <div class="text">强大的驾考功能，优秀的用户体验，我们的愿景是学车无忧，轻松拿本</div>
        </div>
        <div>
            <img src="https://www.jiakaobaodian.com/core-assets/static/images/common/home-dynamic.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.honor{
    width: 1200px;
    margin: 60px auto;
    .honor_title{
        margin-bottom: 40px;
        .split{
            height: 1px;
            border-bottom: 1px dotted #e9e9e9;
        }
        .title_text{
            display: inline-block;
            background: #fff;
            height: 40px;
            line-height: 40px;
            font-size: 30px;
            padding: 0 45px;
            margin-top: -20px;
            color: #333;
        }
        .text{
            margin: 30px 0;
            font-size: 16px;
            color: #666;
        }
    }
}
</style>