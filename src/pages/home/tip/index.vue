<template>
    <div class="tip">
        <ul>
            <li class="weixin li1">
                <div class="box"></div>
            </li>
            <li class="weibo li1">
                <div class="box"></div>
            </li>
            <li class="opinion li1">

                <svg t="1716096349256" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3529" width="25" height="25">
                    <path
                        d="M692.650667 113.152a32 32 0 0 1 4.352 63.744l-4.352 0.256H127.018667a9.472 9.472 0 0 0-9.173334 6.997333l-0.341333 2.517334V850.346667c0 4.352 2.986667 8.064 6.954667 9.130666l2.56 0.341334h663.68c4.352 0 8.021333-2.944 9.130666-6.954667l0.341334-2.517333v-337.749334a32 32 0 0 1 63.701333-4.352l0.298667 4.352v337.749334c0 38.442667-29.525333 69.973333-67.114667 73.216l-6.357333 0.256H127.018667c-38.485333 0-70.016-29.525333-73.216-67.114667l-0.298667-6.357333V186.666667c0-38.442667 29.525333-70.016 67.157333-73.216l6.357334-0.298667h565.632z m256.426666 31.872a32 32 0 0 1 0 45.226667l-467.626666 467.626666c-2.901333 2.474667-19.114667 3.712-48.64 3.712 0-29.482667 1.152-45.824 3.413333-48.938666L903.850667 145.066667a32 32 0 0 1 45.226666 0z"
                        fill="#999999" p-id="3530"></path>
                </svg>
                <p style="margin: 2px;">意见反馈</p>
                <div class="yj">
                    <ul>
                        <li>
                            <p class="p1">用户反馈</p>
                            <p>400-056-1617（电话）</p>
                        </li>
                        <li>
                            <p class="p1">教练反馈</p>
                            <picture>jiaolian_service@mucang.cn(邮箱)</picture>
                        </li>
                        <li>
                            <p class="p1">驾校反馈</p>
                            <p>jiaolian_service@mucang.cn(邮箱)</p>
                        </li>
                        <li>
                            <p class="p1">学员反馈</p>
                            <a style="cursor: pointer;" @click="centerDialogVisible = true">点击提交学员反馈</a>
                        </li>

                    </ul>
                </div>
            </li>
            <li class="back li1">
                <svg t="1716099949831" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4864" width="25" height="25">
                    <path
                        d="M877.330034 611.250468 542.062178 273.77841c-7.429203-7.463995-17.135262-11.05273-26.801413-10.978029-1.309832-0.107447-2.426259-0.74599-3.736091-0.74599-5.451152 0-10.527774 1.270946-15.192004 3.361561-4.705162 1.793856-9.18315 4.516874-12.992919 8.328689L180.811554 575.74686c-14.600533 14.559601-14.633279 38.192857-0.039909 52.78725 7.2798 7.315616 16.838503 10.977006 26.429952 10.977006 9.55768 0 19.077497-3.660366 26.396183-10.902304l240.59873-240.222153 0 485.548558c0 20.643156 16.72287 37.332257 37.32714 37.332257 20.609387 0 37.332257-16.690124 37.332257-37.332257L548.855908 386.556986l275.53952 277.328259c7.2798 7.318686 16.912182 11.015891 26.463722 11.015891 9.559727 0 19.042705-3.625574 26.323529-10.862395C891.850749 649.51291 891.889635 625.844861 877.330034 611.250468L877.330034 611.250468zM922.166195 187.393971 100.889293 187.393971c-20.61041 0-37.334303-16.723893-37.334303-37.32714 0-20.608364 16.723893-37.332257 37.334303-37.332257L922.166195 112.734574c20.642133 0 37.32714 16.723893 37.32714 37.332257C959.493336 170.669054 942.808328 187.393971 922.166195 187.393971L922.166195 187.393971zM922.166195 187.393971"
                        fill="#999999" p-id="4865"></path>
                </svg>
                <a style="margin: 2px;" @click="scrollToTop">返回顶部</a>
            </li>
        </ul>
    </div>
    <el-dialog v-model="centerDialogVisible" title="意见反馈" width="400" center>
        <el-input v-model="textarea" style="width: 100%" :rows="5" type="textarea" placeholder="写下您遇到的问题或建议，我们会及时改进" />
        <el-input v-model="contact" style="width: 100%;margin-top: 20px;" placeholder="联系方式(QQ/手机/Email)" />
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="centerDialogVisible = false">
                    提交
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const centerDialogVisible = ref(false)
const textarea = ref('')
const contact=ref('')
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    })
}
</script>

<style scoped lang="scss">
.tip {
    position: fixed;
    right: 0;
    bottom: 102px;
    z-index: 1000;
    width: 117px;
    min-height: 258px;
    background: url('https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/ddf1aabca9786f509b6d60d167fb0111.png') center top no-repeat;
    border: 1px solid #e9e9e9;

    ul {
        color: #999;
        font-size: 12px;
        position: relative;

        .li1 {
            width: 100%;
            height: 33px;
            line-height: 33px;
            cursor: pointer;

            .box {
                position: absolute;
                display: none;

            }
        }

        .li1:hover .box {
            display: block;
        }

        .li1:hover .yj {
            display: block;
        }

        .weixin {
            margin-top: 158px;

            .box {
                width: 179px;
                height: 195px;
                top: 0;
                left: -180px;
                background: url('https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/c4f622fc933083fa8d224db497037fb1.png') center no-repeat;
            }
        }

        .weibo {
            .box {
                width: 179px;
                height: 195px;
                top: 33px;
                left: -180px;
                background: url('https://www.jiakaobaodian.com/core-assets/jiakao/application/home/files/8323b7c6a07700c0ea220e49fe814870.png') center no-repeat;
            }
        }

        .opinion {
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #e9e9e9;

            .yj {
                display: none;
                cursor: default;
                position: absolute;
                left: -180px;
                width: 170px;
                top: -100px;
                background: #fff;

                ul {
                    padding: 5px 15px 0;
                    border: 1px solid #eee;

                    li {
                        text-align: left;
                        padding: 8px 0;
                        border-bottom: 1px solid #eee;
                        line-height: 1.4;
                        word-wrap: break-word;

                        .p1 {
                            font-size: 15px;
                            color: #000;
                        }

                    }
                }
            }
        }

        .back {
            display: flex;
            background: #fff;
            justify-content: center;
            align-items: center;

            a {
                color: #999;
                font-size: 12px;
            }
        }
    }
}
</style>