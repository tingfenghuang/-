import { ref, computed, onUnmounted } from "vue"
import dayjs from "dayjs"
export const useCountdown = () => {
    const timer = null
    const time = ref(0)
    const start = (currentTime) => {
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)

    }
    const formatTime = computed(() => {
        return dayjs.unix(time.value).format("mm分ss秒")
    })
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }

}