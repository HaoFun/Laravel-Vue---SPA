<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="/" class="navbar-brand">Laravel & Vue - SPA</router-link>
            </div>
            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <ul class="nav navbar-nav">
                    &nbsp;
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <router-link to="/" tag="li"><a>Home</a></router-link>
                    <router-link v-if="!user.authenticated" to="/login" tag="li"><a>Login</a></router-link>
                    <router-link v-if="!user.authenticated" to="/register" tag="li"><a>Register</a></router-link>
                    <router-link v-if="user.authenticated" to="/profile" tag="li"><a>Profile</a></router-link>
                    <router-link to="/about" tag="li"><a>About</a></router-link>
                    <li v-if="user.authenticated"><a href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        computed:{
            ...mapState({
                user:state => state.AuthUser
            })
        }
    }
</script>