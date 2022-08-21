export const getFromLocalStorage = (key: string) => {
  const localStorageValue = localStorage.getItem(key)
  if (localStorageValue) {
    return JSON.parse(localStorageValue)
  } else {
    return null
  }
}
