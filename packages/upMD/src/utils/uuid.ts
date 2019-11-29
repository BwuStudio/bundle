export default function uuid() {
    const c = '0123456789abcdef'
    return (
        'c16b1432-5f00-46a3-94ab-0bf4251edeba'
            .split('')
            .map(v => v === '-' ? '-' : c[Math.floor(Math.random() * c.length)])
            .join('')
    )
}