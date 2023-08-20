<template>
    <div id="container"></div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, provide, inject } from 'vue'
import useEarth from './useEarth'
import emitter from '../../../utils/eventBus'
import './index.scss'
export default defineComponent({
    name: 'lg-earth',
    components: {},
    props: {},
    emits: {},
    setup(props, ctx) {
        onMounted(async () => {
            const container = document.querySelector('#container')
            let { load } = useEarth(container)
            // console.log(createPromise)
            let earth = await load()
            // console.log(earth)
            emitter.emit('earth', earth)
            provide('earth', earth)

            const app = getCurrentInstance()
            app?.appContext.app.provide('earth', earth)
            app?.appContext.app.provide('aaa', 222)
            // console.log(inject('earth'))
            // console.log(app)
        })
        return {}
    }
})
</script>
