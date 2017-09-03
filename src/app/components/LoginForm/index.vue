<template>
    <div class="loginform-component">
        <form class="login-form" method="POST">
            <h1>Вход</h1>
            <div class="form-group ">
                <input type="email" class="form-control"
                                    v-bind:class="{ 'has-error': !isEmailValid }" placeholder="email" @blur="checkEmail()" v-model="email" >
                <span class="glyphicon glyphicon-envelope"></span>
                <div class="input-error-message" v-show="!isEmailValid">
                    {{inputErrors.email}}
                </div>
            </div>
            <div class="form-group log-status">
                <input type="password" class="form-control"
                                       v-bind:class="{ 'has-error': !isPasswordValid }" v-model="password" placeholder="Password" @blur="checkPassword()" name="password">
                <span class="glyphicon glyphicon-lock"></span>
                <div class="input-error-message" v-show="!isPasswordValid">
                    {{inputErrors.password}}
                </div>
            </div>
            <a class="link" href="#">Забыли пароль?</a>
            <button type="submit" class="log-btn" v-on:click.prevent="sendRequest()">Войти</button>
        </form>
        <div class="alerts-block">
            <div v-for="value in alerts">
                <div class="alert alert-dismissable" v-bind:class="{ 'alert-success': value.type === 'success', 'alert-danger': value.type === 'error'}">
                    <button type="button" class="close"  data-dismiss="alert" aria-hidden="true">&times;</button>
                    {{value.message}}
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="js" src="./script.js"></script>
<style scope lang="scss" src="./styles.scss"></style>