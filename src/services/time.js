/**
 * @param {object} date
 * @returns {string}
 */
export const getTime = (date) => {
    const d = date
    const ampm = (d.getHours() >= 12) ? 'PM' : 'AM'
    const hours = (d.getHours() >= 12) ? d.getHours() - 12 : d.getHours()

    return `${hours}:${d.getMinutes()} ${ampm}`
}
