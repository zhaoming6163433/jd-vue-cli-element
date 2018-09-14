<template>
    <div class="detail">
        <title>咨询详情</title>
        <article v-html="detail.content"></article>
    </div>
</template>

<script>
    import util from 'src/util/util.js'
    import { health_details } from 'src/model/api.js'

    export default {
        name: 'home',
        props: [],
        data() {
            return {
                detail:{}
            }
        },
        components: {

        },
        computed: {

        },
        created() {
        },
        methods: {
            async typedetail(){
                util.loadingopen();
                try {
                    let res = await health_details({id:this.$route.query.id});
                    this.detail = res;
                    util.loadingclose();
                } catch (err) {
                    util.loadingclose();
                    console.log(err)
                }
            }
        },
        mounted() {
            this.typedetail();
        }
    }
</script>


<style lang="scss" scoped>
    .detail {
        article{
            max-width: 50rem;
            margin: 1rem auto;
            padding:0 1rem;
        }
        title{
            margin-top:1rem;
            font-size:1.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            color:#5f5f5f;
            font-weight: bold;
            text-align: center;
            display: block;
        }

    }
</style>
