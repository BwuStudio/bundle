

type InjRule = { [key: string]: Partial<CSSStyleDeclaration> }

function uuid() {
    const c = '0123456789abcdef'
    return (
        'c16b1432-5f00-46a3-94ab-0bf4251edeba'
            .split('')
            .map(v => v === '-' ? '-' : c[Math.floor(Math.random() * c.length)])
            .join('')
    )
}


class Injcss {

    static create(){return new this()}

    static fieldParse(input: string) {
        return input.split('').map(v => v.toLocaleLowerCase() === v ? v : ('-' + v.toLocaleLowerCase())).join('')
    }

    cid: string = ''

    rules: InjRule[]

    styleNode: HTMLStyleElement

    constructor() {
        this.cid = 'data-injcss-' + uuid()
        this.styleNode = document.createElement('style')
        document.head.appendChild(this.styleNode)
        this.rules = []
    }

    createStyleContent() {
        const c = this.rules.flatMap(v => Object.keys(v).map(selector => `
            [${this.cid}] ${selector} {
                ${Object.keys(v[selector]).map(field => `${Injcss.fieldParse(field)} : ${v[selector][field]}`).join('; \n')}
            }
        `))

        this.styleNode.innerHTML = c.join('\n')
    }

    push(css: InjRule) {
        this.rules.push(css)
        this.createStyleContent()

        return this
    }

    injectTo(e: HTMLElement) {
        e.setAttribute(this.cid, null)
    }

}

export default Injcss

export {
    InjRule
}