<template>
    <div class="theory_test">
        <div class="test_title">
            <p class="split"></p>
            <div class="title_text">2024小车理论考试</div>
        </div>
        <div class="content_test">
            <div class="subject1">
                <div class="subject_title">   
                    <a href="">
                        <img src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png" alt="">
                        <p>科目一交规</p>
                    </a>
                </div>
                <div class="subject_content">
                    <div class="item">
                        <img style="width: 25px;height: 28px;" src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/7920c46acf795cfe91990d3bb8c8635c.png" alt="">
                        <div>
                            <p class="p1"><a href="">顺序练习</a></p>
                            <p class="p2">按照顺序练习做题</p>
                        </div>
                    </div>
                    <div class="item">
                        <img style="width: 28px;height: 25px;" src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/29f60eac40621dffb37c38f8d584f215.png" alt="">
                        <div>
                            <p class="p1"><a href="">随机练习</a></p>
                            <p class="p2">按照随机顺序做题</p>
                        </div>
                    </div>
                    <div class="item">
                        <img style="width: 30px;height: 30px;" src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png" alt="">
                        <div>
                            <p class="p1"><a href="">专项练习</a></p>
                            <p class="p2">分门别类重点突破</p>
                        </div>
                    </div>
                    <div class="item">
                        <img style="width: 29px;height: 29px;" src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/f117d8ae0fca3bffd25ff4511664e607.png" alt="">
                        <div>
                            <p class="p1"><a href="">难题攻克</a></p>
                            <p class="p2">准确把握考试难点</p>
                        </div>
                    </div>
                </div>
                <button class="btn">模拟考试</button>
            </div>
            <div class="subject4">
                <div class="subject_title">   
                    <a href="">
                        <img src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png" alt="">
                        <p>科目四安全文明驾驶</p>
                    </a>
                </div>
                <div class="subject_content">
                    <div class="item">
                        <img style="width: 25px;height: 28px;" src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/7920c46acf795cfe91990d3bb8c8635c.png" alt="">
                        <div>
                            <p class="p1"><a href="">顺序练习</a></p>
                            <p class="p2">按照顺序练习做题</p>
                        </div>
                    </div>
                    <div class="item">
                        <img style="width: 28px;height: 25px;" src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/29f60eac40621dffb37c38f8d584f215.png" alt="">
                        <div>
                            <p class="p1"><a href="">随机练习</a></p>
                            <p class="p2">按照随机顺序做题</p>
                        </div>
                    </div>
                    <div class="item">
                        <img style="width: 30px;height: 30px;" src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/cd9c3b69a1d8d0bc72b839ebdaeb5fd4.png" alt="">
                        <div>
                            <p class="p1"><a href="">专项练习</a></p>
                            <p class="p2">分门别类重点突破</p>
                        </div>
                    </div>
                    <div class="item">
                        <img style="width: 29px;height: 29px;" src="https://nanyang.jiakaobaodian.com/core-assets/jiakao/application/home/files/f117d8ae0fca3bffd25ff4511664e607.png" alt="">
                        <div>
                            <p class="p1"><a href="">难题攻克</a></p>
                            <p class="p2">准确把握考试难点</p>
                        </div>
                    </div>
                </div>
                <button class="btn">模拟考试</button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.theory_test {
    width: 1200px;
    height: 455px;
    margin: 60px auto;

    // background-color: red;
    .test_title {
        margin-bottom: 40px;
        padding-top: 20px;

        .split {
            height: 1px;
            border-bottom: 1px dotted #e9e9e9;
        }

        .title_text {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            padding: 0 45px;
            font-size: 30px;
            margin-top: -20px;
            background-color: #fff;
        }
    }

    .content_test {
        display: flex;
        justify-content: space-between;

        .subject1,
        .subject4 {
            border: 1px solid #e9e9e9;
            height: 371px;
            width: 580px;

            .subject_title {
                width: 100%;
                height: 110px;
                line-height: 110px;
                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    color: #333;
                    img{
                        margin-right: 10px;
                    }
                }
                a:hover{
                    color: #37B5F8;
                }
            }
            .subject_content{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                .item{
                    background-color: #FAFAFA;
                    width: 250px;
                    height: 70px;
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    color: #999;
                    img{
                        margin-right: 10px;
                    }
                    a{
                        color: #333;
                        font-size: 16px;
                    }
                    a:hover{
                        color: #37B5F8;
                    }
                    p{
                        text-align: left;
                        // height: 20px;
                    }
                    .p2{
                        margin-top: 5px;
                    }
                }
            }
            .btn{
                background: #37B5F8;
                color: #fff;
                border-radius: 4px;
                width: 300px;
                height: 46px;
                margin-top: 15px;
                font-size: 18px;
            }
        }
    }
}
</style>