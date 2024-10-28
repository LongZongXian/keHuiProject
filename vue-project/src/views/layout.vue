<script setup lang="ts">

import { ref } from 'vue'


import {
    User,
    HomeFilled,
    SuitcaseLine
} from '@element-plus/icons-vue'

import router from '@/router';
</script>

<template>
    <el-header>
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router :ellipsis="false">
            <img style="margin-left:100px ;margin-top: 2px;width: 95px;height: 94.8px;" src="../assets/wust-logo.png" />

            <el-menu-item index="/homepage" style="margin-left: 30px;">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span style="font-size:20px">首页</span>
            </el-menu-item>

            <el-menu-item index="/resource" style="margin-left: 30px;">
                <span style="font-size: 20px;">资源中心</span>
            </el-menu-item>

            <el-menu-item index="/transaction" style="margin-left: 30px;">
                <span style="font-size: 20px;">交易中心</span>
            </el-menu-item>

            <el-menu-item index="/active" style="margin-left: 30px;">
                <span style="font-size: 20px;">活动中心</span>
            </el-menu-item>

            <el-menu-item index="/information" style="margin-left: 30px;">
                <span style="font-size: 20px;">资讯中心</span>
            </el-menu-item>

            <el-menu-item index="/search" style="margin-left: 30px;">
                <span style="font-size: 20px;">科创智搜</span>
            </el-menu-item>


            <div class="flex-grow" />
            <el-menu-item index="/workbench" style="margin-right: 30px;">
                <el-icon>
                    <SuitcaseLine />
                </el-icon>
                <span style="font-size: 20px;">我的工作台</span>
            </el-menu-item>
            <el-menu-item index="/login" style="margin-right: 100px;">
                <el-icon>
                    <User />
                </el-icon>
                <span style="font-size: 20px;">登录/注册</span>
            </el-menu-item>






        </el-menu>

    </el-header>
    <el-main>
        <router-view :key="$route.path"></router-view>
        <!-- <el-divider /> -->
    </el-main>





</template>

<style>
.el-menu--horizontal {
    --el-menu-horizontal-height: 100px;
}


.el-header {
    padding: 0;
    height: 100px;
}

.el-main {
    padding: 0;
    margin-top: 1px;
}

.flex-grow {
    flex-grow: 1;
}
</style>