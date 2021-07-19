import {ref} from "vue";

const useDebounce = (timeoutCount = 800) => {
    let timeoutRef = null;
    const displayValue = ref("");
    const debouncedValue = ref("");

    const debounceListener = e => {
        if (timeoutRef !== null) {
            clearTimeout(timeoutRef);
        }

        displayValue.value = e.target.value;
        timeoutRef = setTimeout(() => {
            debouncedValue.value = e.target.value;
        }, timeoutCount);
    };

    return {debouncedValue, displayValue, debounceListener};
}
export default useDebounce
