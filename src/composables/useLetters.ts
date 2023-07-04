import {computed, type Ref, ref} from "vue";

export const useLetters = (word:Ref<string>) => {
    const letters = ref<string[]>([])
    const correctLetters = computed(() => letters.value.filter(x => word.value.includes(x)))
    const wrongLetters = computed(() => letters.value.filter(x => !word.value.includes(x)))

    return {
        letters,
        correctLetters,
        wrongLetters
    }

}