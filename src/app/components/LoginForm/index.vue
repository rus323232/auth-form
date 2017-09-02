<template>
    <div class="loginform-component">
        <form class="login-form" method="POST">
            <h1>Вход</h1>
            <div class="form-group ">
                <input type="email" class="form-control" placeholder="email " name="email" v-model="email" required>
                <span class="glyphicon glyphicon-envelope"></span>
                <div class="input-error-message">
                    Не правильный email
                </div>
            </div>
            <div class="form-group log-status">
                <input type="password" class="form-control" placeholder="Password" name="password" required>
                <span class="glyphicon glyphicon-lock"></span>
                <div class="input-error-message">
                    Не правильный пароль<br>
                    Не правильный пароль<br>
                </div>
            </div>
            <a class="link" href="#">Забыли пароль?</a>
            <button type="submit" class="log-btn" >Войти</button>
        </form>
        <div class="alerts-block">
            <div class="alert alert-danger alert-dismissable">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong></strong>Ошибка при передаче данных
            </div>
        </div>
    </div>
</template>

<script lang="js" src="./script.js"></script>
<style scope lang="scss" src="./styles.scss"></style>