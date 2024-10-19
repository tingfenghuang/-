<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <template v-if="userInfo.token">
                    <li><a href="#"><i class="iconfont icon-user">{{ userInfo.nickname }}</i></a></li>
                    <li><a href="#">My Order</a></li>

                    <li><a href="#" @click="$router.push('/member')">Member Center</a></li>

                    <li>
                        <el-popconfirm title="确认登出吗?" @confirm="logout" confirm-button-text="确认"
                            cancel-button-text="取消">
                            <template #reference>
                                <a href="#">Logout</a>
                            </template>
                        </el-popconfirm>
                    </li>
                </template>
                <template v-else>
                    <li><a href="#" @click="$router.push('/login')">Please Login</a></li>
                    <li><a href="#">Register</a></li>
                </template>
            </ul>
        </div>
    </nav>

</template>
<script setup>
import { ref, toRefs } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const { userInfo } = toRefs(useUserStore())
const logout = () => {
    useUserStore().logoutAction()
    router.replace('/login')

}

</script>
<style lang="scss">
.app-topnav {
    background-color: #333;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end; //右对齐
        align-items: center; //垂直居中

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1; //行高
                display: line-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }

}
</style>