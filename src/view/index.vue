<template>
    <div class="index">
        <div class="content content1">
            <div class="contentin">
                <router-view class="child-view"></router-view>
                <Skeleton class="loadingpage" v-show="showLoading"></Skeleton>
            </div>
        </div>
    </div>
</template>

<script>
    import util from 'src/util/util.js'
    import Skeleton from 'src/Skeleton'
    export default {
        name: 'index',
        props: [],
        data() {
            return {
                showLoading:false
            }
        },
        components: {
            Skeleton
        },
        computed: {

        },
        created() {
            util.vueEvent.$on("disloadingpage", () => {
                this.showLoading = false;
            });
            util.vueEvent.$on("loadingpage", () => {
                this.showLoading = true;
            });
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .child-view {
        // @include minw(50rem);
         @include font(0.8rem, 0.8rem);
    }
    .content1 {
        min-width: 300px;
        overflow-x: auto;
        background-color: #ffffff;
        // .contentin {
        //     min-width: 50rem;
        // }
    }
    .loadingpage{
        position:absolute;
        top:0;
        height:100%;
        background-color:#ffffff;
    }
</style>
