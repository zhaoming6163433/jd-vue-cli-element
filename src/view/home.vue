<template>
    <div class="home">
        <title>健康列表</title>
        <section class="mylist">
            <ul>
                <li v-for="(obj,index) in list" :key="index" @click="godetail(obj.id)"><span class="em"></span><img :src="obj.icon" alt="" @error="loaderrimg"/><span class="titlespan">{{obj.title}}</span></li>
            </ul>
        </section>
    </div>
</template>

<script>
import util from 'src/util/util.js'
import { health_list } from 'src/model/api.js'

export default {
    name: 'home',
    props: [],
    data() {
        return {
            list: []
        }
    },
    components: {

    },
    computed: {

    },
    created() { },
    methods: {
        async typelist() {
            try {
                let res = await health_list();
                this.list = res.list;
                util.vueEvent.$emit("disloadingpage");
            } catch (err) {
                util.vueEvent.$emit("disloadingpage");
            }
        },
        godetail(id) {
            this.$router.push({ "name": "detail", query: { id: id } });
        }
    },
    mounted() {
        util.vueEvent.$emit("loadingpage");

        this.typelist();
    }
}
</script>


<style lang="scss" scoped>
.home {
    title {
        font-size: 1.5rem;
        height: 1.5rem;
        margin-top:1rem;
        line-height: 1.5rem;
        color: #5f5f5f;
        font-weight: bold;
        text-align: center;
        display: block;
    }
    .mylist {
        ul > li {
            margin: 0.2rem 0.3rem;
            border-radius: 10px;
            padding: 0.2rem;
            background-color: #ececec;
            border: 1px solid #fefefe;
            cursor: pointer;
            position:relative;
            height: 3.5rem;
            .em{
                height: 100%;
                vertical-align: middle;
                display: inline-block;
            }
            img {
                border-radius: 10px;
                width: 5rem;
                vertical-align: middle;
            }
            .titlespan {
                line-height: 1rem;
                margin-left: 0.5rem;
                margin-top:0.1rem;
                font-size: 0.75rem;
                height: 100%;
                position: absolute;
                top: 0.2rem;
            }
        }
    }
}
</style>
