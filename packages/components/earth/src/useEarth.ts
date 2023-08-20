import { onMounted } from 'vue'

export default function (container?: any) {
    let earth: any = null
    let isReady = false
    const load = async (): Promise<boolean> => {
        earth = new XE.Earth(container)
        // instance.earth = earth
        isReady = true
        createResolve(earth)
        return earth
    }

    let createResolve: any
    const createPromise = new Promise((resolve, reject) => {
        createResolve = resolve
    })

    onMounted(async () => {
        console.log('onMounted')
        load().then(e => {
            createResolve(e)
        })
    })

    return {
        isReady,
        load,
        earth,
        createPromise
    }
}
