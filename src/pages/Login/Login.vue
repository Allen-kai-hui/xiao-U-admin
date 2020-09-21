<template>
    <div>
        <el-form
                 label-width="80px"
                 >
            <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="login" type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login() {
            this.$http.post("userlogin", {username: this.username,password: this.password}).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.$store.commit("setUser", res.data.list)
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped></style>