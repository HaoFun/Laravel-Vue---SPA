<template>
    <div>
        <form class="form-horizontal" @submit.prevent="register">
            <div class="form-group">
                <label for="name" class="col-md-3 control-label">名稱</label>
                <div class="col-md-7" :class="{'has-error' : errors.has('name')}">
                    <input v-model="name"
                           v-validate data-vv-rules="required|min:3" data-vv-as="名稱"
                           id="name" type="text" class="form-control" name="name"  required autofocus>
                    <span class="help-block" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                </div>
            </div>

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
                <label for="password-confirm" class="col-md-3 control-label">確認密碼</label>
                <div class="col-md-7" :class="{'has-error' : errors.has('password_confirmation')}">
                    <input v-validate data-vv-rules="required|min:6|confirmed:password" data-vv-as="確認密碼"
                           id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                    <span class="help-block" v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</span>
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-7 col-md-offset-3">
                    <button type="submit" class="btn btn-primary form-control">
                        註冊
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
            register() {
                let formData = {
                    name : this.name,
                    email : this.email,
                    password : this.password
                };
                axios.post('/api/register',formData).then(response => {
                    this.$router.push({name:'confirm'});
                });
            }
        }
    }
</script>