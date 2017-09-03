export default {
    name: 'loginform-component',
    props: {
        url : {
            type: String,
            required: true
        }
    },
    data () {
        return {
            email: '',
            password: '',
            inputErrors: {
                password: '',
                email: ''
            },
            alerts: [],
            isEmailValid: true,
            isPasswordValid: true
        }
    },
    methods: {
        checkEmail () {
            if (this.email === '') {
                return false;
            }

            let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            this.isEmailValid = pattern.test(this.email);

            if (!this.isEmailValid) {
                this.inputErrors.email = 'Не верно введен email';
            }
        },
        checkPassword () {
            if (this.password === '') {
                return false;
            }

            let pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

            if (this.password.length < 6) {
                this.isPasswordValid = false;
                this.inputErrors.password = 'Пароль должен содержать не менее 6 символов';
                return false;
            }

            if (pattern.test(this.password) === false) {
                this.inputErrors.password = 'Пароль должен состоять из латинских букв и цифр ';
                this.inputErrors.password += 'с применением верхнего и нижнего регистра';
                this.isPasswordValid = false;
                return false;
            }

            this.isPasswordValid = true;
        },
        checkFormState () {
            this.checkEmail();
            this.checkPassword();
        },
        sendRequest () {
            if (!this.isFormReady) {
                return false;
            }

            let data = {
                email: this.email,
                password: this.password
            };
            this.alerts = [];
            let HttpRequest = $.post(this.url, data)
                .done( (data) => {
                    this.alerts.push({
                        type: 'success',
                        message: 'Успешный запрос'
                    });

                    alert( `Ответ сервера: ${data}` );
                })
                .fail(er => {
                    this.alerts.push({
                        type: 'error',
                        message: `Ошибка ${er.status}: Ошибка при отправке данных`
                    });
                });
        },
    },
    computed: {
        isFormEmpty () {
            return this.email === '' || this.password === '';
        },
        isFormReady () {
            this.checkFormState();
            return this.isEmailValid && this.isPasswordValid && !this.isFormEmpty;
        }
    }
}