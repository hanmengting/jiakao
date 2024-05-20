<template>
    <div class="study_process">
        <div class="process_title">
            <p class="split"></p>
            <div class="title_text">学车流程</div>
            <div class="text">驾考宝典整合学车全流程，驾考宝典为用户提供全方位学车服务</div>
        </div>
        <div class="process_content">
            <div class="process">
                <a href="">
                    <img class="icon" src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/0fc72e66088099891c2317a3e1da2b34.png" alt="">
                    <p class="p1">找驾校</p>
                </a>
                <p class="p2">口碑好的驾校</p>
            </div>
            <div class="process">
                <a href="">
                    <img class="icon" src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/ea7968d83db78dd84782f5fb7cdb0ba4.png" alt="">
                    <p class="p1">科目一</p>
                </a>
                <p class="p2">驾驶员理论考试</p>
            </div>
            <div class="process">
                <a href="">
                    <img class="icon" src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/1a6197c837b9e484084f9fe1b15c08fe.png" alt="">
                    <p class="p1">科目二</p>
                </a>
                <p class="p2">场地驾驶技能考试科目</p>
            </div>
            <div class="process">
                <a href="">
                    <img class="icon" src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/8df30d2c3be0257c8acd81369e739479.png" alt="">
                    <p class="p1">科目三</p>
                </a>
                <p class="p2">机动车驾驶人道路考试</p>
            </div>
            <div class="process">
                <a href="">
                    <img class="icon" src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/e63aa9a32b7a40551616e7f01654ec3e.png" alt="">
                    <p class="p1">科目四</p>
                </a>
                <p class="p2">安全文明驾驶常识考试</p>
            </div>
            <div class="process">
                <a href="">
                    <img class="icon" src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/eb7d98a204cd7957135b8c131b0011a1.png" alt="">
                    <p class="p1">拿本</p>
                </a>
                <p class="p2">开心拿本，安全驾驶</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.study_process{
    width: 1200px;
    margin: 60px auto;
    .process_title{
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
    .process_content{
        margin: 0 -40px;
        display: flex;
        .process{
            width: 16.6%;
            .icon{
                border-radius: 50%;
                margin-bottom: 35px;
            }
            .p1{
                font-size: 24px;
                color: #000;
            }
            .p2{
                font-size: 14px;
                color: #999;
                margin-top: 15px;
            }
            a:hover{
                .p1{
                    color: #37B5F8;
                }
                .icon{
                        background: #37B5F8;
                    }
            }
        }
    }
}
</style>