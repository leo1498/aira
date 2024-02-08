const DOMAIN = 'http://hans-api.marysia'

/**
 * @param {string} url
 * @param {object} data
 */
export const postRequest = async (url, data) => {
    const response = await fetch(DOMAIN + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer itsme-superadmin'
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    const responseData = await response.json()

    return responseData.data
}

/**
 * @param {string} url
 */
export const getRequest = async (url) => {
    return await fetch(DOMAIN + url)
}
