function data() {
    const data = new Date()

    const dia = String(data.getDate())
    const mes = String(data.getMonth() + 1).padStart(2, 0)
    const ano = String(data.getFullYear()).padStart(2, 0)

    const hora = String(data.getHours()).padStart(2, 0)
    const minuto = String(data.getMinutes()).padStart(2, 0)
    const segundo = String(data.getSeconds()).padStart(2, 0)

    return `${ano}-${mes}-${dia} ${hora}:${minuto}:${segundo}`
}

module.exports = data