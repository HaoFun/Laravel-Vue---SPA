<template>
    <div>
        <form class="form-horizontal" @submit.prevent="login">
            <div class="form-group">
                <label for="email" class="col-md-3 control-label">信箱</label>
                <div class="col-md-7" :class="{'has-error' : errors.has('email')}">
                    <input v-model="email"
                           v-validate data-vv-rules="required|email|min:3" data-vv-as="信箱"
                           id="email" type="email" class="form-control" name="email"  required>
                    <span class="help-block" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                </div>
            </div>

            <div class="form-group">
                <label for="password" class="col-md-3 control-label">密碼</label>
                <div class="col-md-7" :class="{'has-error' : errors.has('password')}">
                    <input v-model="password"
                           v-validate data-vv-rules="required|min:6" data-vv-as="密碼"
                           id="password" type="password" class="form-control" name="password" required>
                    <span class="help-block" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-7 col-md-offset-3">
                    <button type="submit" class="btn btn-primary form-control">
                        登入
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import JWTToken from './../../helpers/jwt';
    export default {
        data() {
            return {
                email:'',
                password:''
            }
        },
        methods:{
            login() {
                let formData = {
                    client_id:'2',
                    client_secret:'9JQ2esvBnm6oyn7J0F6IY0O909ArOLc3U9GASIXJ',
                    grant_type:'password',
                    scope:'',
                    username : this.email,
                    password : this.password
                };
                axios.post('/oauth/token',formData).then(response => {
                    JWTToken.setToken(response.data.access_token);
                    console.log(JWTToken.getToken());
                });
            }
        }
    }
</script>