<template>
    <div id="app">
        <el-container>
            <el-aside width="200px">
                <!-- 侧边栏，拆成组件 -->
                <Navbar />
            </el-aside>
            <el-container>
                <el-header>
                    <!-- 渲染当前登录的用户名 -->
                    <!-- {{ username }} -->
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    name: 'App',
    components: {
        Navbar
    },
    computed: {
        // username() {
        //     return this.$store.state.user.username
        // }
    }
}
</script>




                                      







nnnnnnbhjhyt    tag="r"export default class wq extends a {
    sdfzxcvbnm,.axios.get('axios', {
      params: {             }
    }).then((ret) => {
      console.log(ret.data)
    })
};

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body,
#app,
.el-container {
    width: 100%;
    height: 100%;
}
.el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: right;
    line-height: 60px;
    padding-right: 20px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    height: 100%;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    height: 100%;
}
.el-menu-item, .el-submenu {
    width: 200px;
}
.el-button--primary {
    margin: 10px 0;
}
</style>
