export default function uuid(str?:string) {
    const c = '0123456789abcdef'
    return (
        (str||'') + 'c16b1432-5f00-46a3-94ab-0bf4251edeba'
            .split('')
            .map(v => v === '-' ? '-' : c[Math.floor(Math.random() * c.length)])
            .join('')
    )
}