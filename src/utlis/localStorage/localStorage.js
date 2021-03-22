// SET ITEM TO LOCAL STORAGE
export const setItemToLocalStorage = (itemName, data) => {
    localStorage.setItem(itemName, data)
    return 'token stored succesfully!'
}

// GET ITEM FROM LOCAL STORAGE
export const getItemFromLocalStorage = itemName => {
    return localStorage.getItem(itemName)
}