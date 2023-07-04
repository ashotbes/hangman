import {onMounted, ref} from "vue";
import {getRandomName} from "@/api/getRandomName";

export const useRandomWord = () => {
    const word = ref('')
    const getRandomWord = async () => {
        try {
            const name = await getRandomName()
            word.value = (name.toLowerCase())
        } catch (e) {
            console.log("Error was occured,", e)
            word.value = ''
        }
    }

    onMounted(() => {
        getRandomWord().then(r => r)
    })

    return{
        word,
        getRandomWord
    }
}