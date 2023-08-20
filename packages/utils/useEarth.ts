// import { getCurrentInstance, inject } from 'vue'
import emitter from './eventBus'
export default function useVueCesium(containerId?: string) {
    return new Promise((resolve, reject) => {
        emitter.on('earth', vc => {
            // console.log('vc', vc)
            resolve(vc)
        })
    })
}
