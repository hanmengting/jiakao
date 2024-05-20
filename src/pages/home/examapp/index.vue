<template>
    <div class="exam_app">
        <div class="content">
            <div class="ad1 ad">
                <p>教练宝典APP</p>
                <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/f4b3be31a83c5d02bf5cb2e0fb11636b.png" alt="">
                <div></div>
            </div>
            <div class="ad2 ad">
                <p>驾考宝典APP</p>
                <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/48726c2bb302051522dfc028c0532488.png" alt="">
                <div></div>
            </div>
            <div class="ad3 ad">
                <p>买车宝典APP</p>
                <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/40ab1d6a3ed0757b51ad19cbec3b29c4.png" alt="">
                <div></div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped lang="scss">
.exam_app{
    height: 560px;
    background: #f5f5f5;
    .content{
        width: 1200px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin: 0 auto;
        position: relative;
        font-size: 20px;
        line-height: 1.01;
        overflow: hidden;
        div{
            position: absolute;
            bottom: -40px;
        }
        .ad{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            div{
                width: 100%;
                height: 100%;
                display: none;
            }
        }
        .ad:hover div{
            display: block;
        }
        .ad:hover{
            bottom:0;
            transition-duration: 1000ms;
        }
        .ad1{
            left: 30px;
            width: 300px;
            height: 500px;
            div{
                background: url('https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/2d1920df784226626de9efd062e808a2.png') center no-repeat;
            }
        }
        .ad2{
            left: 400px;
            width: 430px;
            height: 540px;
            div{
                margin-top: 52px;
                background: url('https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/47b4a64f54ae7eaace0daaf9dc3446c5.png') center no-repeat;
                background-size: 150px 150px;
                background-color: rgba(255, 255, 255, .5);
            }

        }
        .ad3{
            left: 905px;
            width: 265px;
            height: 428px;
            div{
                margin-top: 37px;
                
                background: url('https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/188c7ffa5035c0976ff6e06a1ca89666.png') center no-repeat;
            }
        }
    }
}
  </style>