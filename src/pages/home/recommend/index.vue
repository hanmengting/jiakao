<template>
    <div class="recommend">
        <div class="recommend_title">
            <p class="split"></p>
            <div class="title_text">驾校推荐</div>
        </div>
        <div class="recommend_content">
            <div class="school_list">
                <div class="school">
                    <div class="item_top">
                        <div class="left">
                            <div class="eval1">
                                <span>龙泉驾校</span>
                                <el-rate v-model="value.val1" disabled />
                            </div>
                            <div class="eval2">
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>口碑好</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>规模大</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>拿本快</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>包接送</span>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="price">
                                <p>￥3480</p>
                            </div>
                            <div>
                                <button class="btn">学车报名</button>
                            </div>
                        </div>
                    </div>
                    <div class="item_bottom">
                        <img src="https://avatar-user.mc-cdn.cn/user-avatar/2024/03/20/09/3725aef96d3e452b8708fb7d519d593d.jpg!100x100" alt="">
                        <p>教练态度好，学校环境好，约课方便，有班车接送</p>
                    </div>
                </div>
                <div class="school">
                    <div class="item_top">
                        <div class="left">
                            <div class="eval1">
                                <span>公交驾校</span>
                                <el-rate v-model="value.val2" disabled />
                            </div>
                            <div class="eval2">
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>口碑好</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>规模大</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>拿本快</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>包接送</span>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="price">
                                <p>￥4900</p>
                            </div>
                            <div>
                                <button class="btn">学车报名</button>
                            </div>
                        </div>
                    </div>
                    <div class="item_bottom">
                        <img src="https://avatar-user.mucang.cn/user-avatar/default/XeCvtUX-AE0.jpg!100x100" alt="">
                        <p>今天很顺利考完科一，一把过</p>
                    </div>
                </div>
                <div class="school">
                    <div class="item_top">
                        <div class="left">
                            <div class="eval1">
                                <span>金菱驾校</span>
                                <el-rate v-model="value.val3" disabled />
                            </div>
                            <div class="eval2">
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>口碑好</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>规模大</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>拿本快</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>包接送</span>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="price">
                                <p>￥3980</p>
                            </div>
                            <div>
                                <button class="btn">学车报名</button>
                            </div>
                        </div>
                    </div>
                    <div class="item_bottom">
                        <img src="https://avatar-user.mucang.cn/user-avatar/default/DWLYxmRNYe8.jpg!100x100" alt="">
                        <p>一人一车，教练挺专业的，各个点位准确，通过率高</p>
                    </div>
                </div>
                <div class="school">
                    <div class="item_top">
                        <div class="left">
                            <div class="eval1">
                                <span>嘉安驾校</span>
                                <el-rate v-model="value.val4" disabled />
                            </div>
                            <div class="eval2">
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>口碑好</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>规模大</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>拿本快</span>
                                </div>
                                <div>
                                    <img src="https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/24bc3d8a827f32b86d0ed191681125f9.png" alt="">
                                    <span>包接送</span>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="price">
                                <p>￥4000</p>
                            </div>
                            <div>
                                <button class="btn">学车报名</button>
                            </div>
                        </div>
                    </div>
                    <div class="item_bottom">
                        <img src="https://avatar-user.mucang.cn/user-avatar/default/adK3Vu70DEQ.jpg!100x100" alt="">
                        <p>。。。。。。。。</p>
                    </div>
                </div>
            </div>
            <div class="search_more">
                <button class="search_btn">查看更多</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref({
    val1:4,
    val2:4.2,
    val3:4.5,
    val4:4.5
})
</script>

<style lang="scss" scoped>
.recommend {
    width: 1200px;
    height: 710px;
    margin: 60px auto;

    .recommend_title {
        padding-top: 20px;
        margin-bottom: 40px;

        .split {
            height: 1px;
            border-bottom: 1px dotted #e9e9e9;
        }

        .title_text {
            height: 40px;
            line-height: 40px;
            display: inline-block;
            background: #fff;
            font-size: 30px;
            padding: 0 45px;
            margin-top: -20px;
            color: #333;
        }
    }

    .recommend_content {
        width: 100%;
        height: 658px;

        .school_list {
            width: 100%;
            height: 566px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .school {
                width: 585px;
                height: 253px;
                padding: 40px 30px;
                border: 1px solid #e9e9e9;
                color: #666;

                .item_top {
                    height: 63px;
                    display: flex;
                    .left {
                        width: 305px;
                        height: 60px;
                        // border-right: 1px solid #e9e9e9; 
                        .eval1{
                            display: flex;
                            align-items: center;
                            font-size: 22px;
                            span{
                                display: inline-block;
                                margin-right: 10px;
                            }
                        }
                        .eval2{
                            display: flex;
                            justify-content: left;
                            font-size: 14px;
                            margin-top: 10px;
                            height: 20px;
                            div{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                margin-right: 10px;
                                img{
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                    .right{
                        display: flex;
                        .price{
                            width: 130px;
                            height: 63px;
                            line-height: 63px;
                            border-left: 1px solid #e9e9e9;
                            font-size: 30px;
                            text-align: center;
                            color: #ee4653;
                        }
                        .btn{
                            width: 80px;
                            line-height: 28px;
                            font-size: 14px;
                            color: black;
                            border-radius: 4px;
                            text-align: center;
                            background: #fff;
                            padding: 0;
                            border: 1px solid #e9e9e9;
                            margin: 17px 0 0 10px;
                            // margin: -30px 0 0 -30px;
                        }
                    }
                }
                .item_bottom{
                    height: 80px;
                    margin-top: 30px;
                    padding: 20px;
                    background: #fafafa;
                    color: #999;
                    display: flex;
                    img{
                        width: 40px;
                        height: 40px;
                        margin-right: 20px;
                    }
                    p{
                        font-size: 14px;
                        line-height: 20px;
                        // 多行文字溢出显示省略号
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2; //第几行
                        -webkit-box-orient: vertical;
                        
                    }
                }
            }
        }
        .search_more{
            .search_btn{
                width: 280px;
                height: 48px;
                background: #fff;
                border: 1px solid #e9e9e9;
                border-radius: 4px;
                color:#999;
                font-size: 16px;
            }
            .search_btn:hover{
                color: #37B5F8;
                border: 1px solid #37B5F8;
            }
        }
    }
}
</style>