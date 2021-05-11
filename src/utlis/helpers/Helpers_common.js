// to limit the string
export const limitText = (txt, limit = false) => {
    if (txt) {
        if (limit) {
            return txt.substring(0, limit) + "..."
        } else {
            return txt
        }
    }
}

export const stripHTML = (txt) => {
    if (txt) {
        return txt.replace(/(<([^>]+)>)/ig, '')
    }
}