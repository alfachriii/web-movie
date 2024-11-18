export const useAddToLocalStorage = (storageName, values) => {
  if (!values || values === undefined) {
    localStorage.setItem(storageName, JSON.stringify([]));
  }
  localStorage.setItem(storageName, JSON.stringify(values));
};
