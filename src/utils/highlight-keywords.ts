const keywords = [
    'Médico general a domicilio',
    'Videoconsulta',
    'Indemnización',
    'Consultas en clínica',
    'Medicinas y exámenes',
    'más de 200 clínicas del país',
    'Un Chequeo preventivo general',
    'Vacunas',
    'Incluye todos los beneficios del Plan en Casa.',
]

export const highlightKeywords = (phrase: string) => {
    keywords.forEach((keyword) => {
        const regex = new RegExp(`(${keyword})`, 'gi')
        phrase = phrase.replace(regex, '<span class="font-bold">$1</span>')
    })
    return phrase
}

export const highlightPhrases = (phrases: string[]) => {
    return phrases.map((phrase) => highlightKeywords(phrase))
}
