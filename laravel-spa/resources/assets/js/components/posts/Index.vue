<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">文章列表</div>
                <div class="panel-body">
                    <!--v-for 循環輸出-->
                    <div v-for="post in posts" :key="post.id" class="bs-callout bs-callout-danger">
                        <h3><router-link :to="{name:'posts',params:{id:post.id}}">{{ post.title }}</router-link></h3>
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            axios.get('/api/posts').then(response => {
                //這邊用到response.data.data，兩個data是因為後端取數據時有用到分頁功能
                this.posts = response.data.data;
            });
        },
        data() {
            return {
                posts :[]
            }
        }
    }
</script>
