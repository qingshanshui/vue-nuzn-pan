<script setup lang="ts">

</script>

<template>
    <div class="login">
        <div class="container">
            <div class="login-content">
                <div class="login-content-logo ">
                    <img src="https://blog.dbsgw.com/logo.png" alt="前端笔记">
                </div>
                <div class="login-content-user">
                    <div class="input-control has-icon-left">
                        <input id="inputAccountExample1" type="text" class="form-control" placeholder="用户名">
                        <label for="inputAccountExample1" class="input-control-icon-left"><i
                                class="icon icon-user "></i></label>
                    </div>
                </div>
                <div class="login-content-pass">
                    <div class="input-control has-icon-left">
                        <input id="inputPasswordExample1" type="password" class="form-control" placeholder="密码">
                        <label for="inputPasswordExample1" class="input-control-icon-left"><i
                                class="icon icon-key"></i></label>
                    </div>
                </div>
                <div class="login-content-submit">
                    <button class="btn btn-primary" type="button" style="width: 100%">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #9cc7ff;
}
.container{
    width: 100%;
    background-color: var(--bag)
}
.login-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 390px;
    width: 100%;
    margin: 0 auto;
}

.login-content > div {
    padding: 8px;
    width: 100%;
}

.login-content-logo {
    text-align: center;
}
.login-content-logo img{
    width: 150px;
}
</style>