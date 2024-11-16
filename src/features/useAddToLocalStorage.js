export const useAddToLocalStorage = ( storageName, values ) => {
    localStorage.setItem(storageName, JSON.stringify(values))
}