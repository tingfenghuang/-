import { ref, computed } from "vue"
import dayjs from "dayjs"
export const useCountdown = () => {
    const time = ref(0)
    const start = (currentTime) => {
        time.value = currentTime
        setInterval(() => {
            time.value--
        }, 1000)

    }
    const formatTime = computed(() => {
        return dayjs.unix(time.value).format("mm分ss秒")
    })
    return {
        formatTime,
        start
    }

}