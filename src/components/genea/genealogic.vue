<template>
    <div>
        <search></search>

        <div class="xipu-container">
            <div class="bread-wrapper">
              这是文字  
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/search'
import { queryGenea } from '@/util/getdata'
import { isReqSuccessful } from '@/util/jskit'

export default {
    components: {
        Search
    },

    data () {
        return {
            loading: false,
        }
    },

    methods: {
    }
}
</script>

<style lang="stylus">
@import '~@/assets/css/color'

.xipu-container
    .bread-wrapper
        height 100px
</style>
