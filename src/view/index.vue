<template>
    <div class="index">
        <div class="content content1">
            <div class="contentin">
                <router-view class="child-view"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import util from 'src/util/util.js'

    export default {
        name: 'index',
        props: [],
        data() {
            return {

            }
        },
        components: {

        },
        computed: {

        },
        created() {},
        methods: {

        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .child-view {
        @include minw(50rem);
        @include font(0.8rem, 0.8rem);
    }
    .content1 {
        overflow-x: auto;
        background-color: #ffffff;
        .contentin {
            min-width: 50rem;
        }
    }
</style>
