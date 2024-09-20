export function calculateAge(birthDateString: string) {
    const birthDate = new Date(birthDateString)

    const currentDate = new Date()

    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDate()

    const birthYear = birthDate.getFullYear()
    const birthMonth = birthDate.getMonth()
    const birthDay = birthDate.getDate()

    let age = currentYear - birthYear

    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDay < birthDay)
    ) {
        age--
    }

    return age
}

// const birthDateString = '1990-04-02' // Format "yyyy-mm-dd"
// console.log('The age is:', calculateAge(birthDateString)) // Output the calculated age
