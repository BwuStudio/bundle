import uuid from './uuid'
import { Option, Some, None } from 'zfp'

interface Selector {
    sel(): string
}

interface JsDomable {
    id: string
    replace(target: Element): void
    apppendTo(parent: Element): void
    find(s: string | Selector): Option<HTMLElement>
    findAll(s: string | Selector): HTMLElement[]
}

interface JsHtmlable {
    toHTML: () => string
}

function isJsDom(pet: JsDomable | JsHtmlable): pet is JsDomable {
    return (<JsDomable>pet).replace ? true : false
}

function isJsHtml(pet: JsDomable | JsHtmlable): pet is JsHtmlable { 
    return (<JsHtmlable>pet).toHTML ? true : false
}

const strToElement = (s: string): HTMLElement => {
    const template = document.createElement('template')
    template.innerHTML = s
    const f = template.content.children[0]

        ; (window as any).f = template
    if (!f) throw new Error('JsHTML: Parse Error!')
    return <HTMLElement>f
}

class JsElement implements JsDomable {

    id: string = uuid()

    placeholder: Comment

    realElement: HTMLElement

    children: JsDomable[]

    constructor(c: ReadonlyArray<string>, other: (string | JsDomable | JsHtmlable)[]) {

        this.id = uuid()
        this.placeholder = document.createComment(this.id)
        this.children = []

        const str = c.map((v, i) => {

            const next = other[i] ? other[i] : ''

            if (typeof next !== 'string' && isJsDom(next))
                this.children.push(next)

            return v + (typeof next === 'string' ? next : isJsDom(next) ? `<span id="${next.id}"></span>` : next.toHTML())

        }).join('')

        this.realElement = strToElement(str)

        this.children
            .map<[JsDomable, Element]>(v => [v, this.realElement.querySelector('#' + v.id)])
            .forEach(([jd, span]) => {
                jd.replace(span)
            })
    }

    // 将真实节点插入父元素中
    insert() {
        const parentNode = this.placeholder.parentNode

        if (!parentNode) throw new Error("JsDom insert Error: placeholder without parentNode!")

        parentNode.insertBefore(this.realElement, this.placeholder)
    }

    // 在某个节点的位置上插入节点
    replace(target: Element) {
        const parentNode = target.parentNode
        if (!parentNode) throw new Error("JsDom replace Error: target without parentNode!")
        parentNode.replaceChild(this.placeholder, target)
        this.insert()
    }

    apppendTo(parent: Element) {
        parent.appendChild(this.placeholder)
        this.insert()
    }

    find(s: string | Selector): Option<HTMLElement> {
        const res = this.realElement.querySelector(typeof s === 'string' ? s : s.sel())
        return res ? Some.create(<HTMLElement>res) : None.create<HTMLElement>()
    }

    findAll(s: string | Selector): HTMLElement[] {
        const res = this.realElement.querySelectorAll(typeof s === 'string' ? s : s.sel())
        return Array.prototype.filter.call(res, v => v instanceof HTMLElement)
    }
}

class JsFragment implements JsDomable {

    id: string = uuid()

    placeholder: Comment

    realElement: HTMLTemplateElement

    children: JsDomable[]

    constructor(c: ReadonlyArray<string>, other: (string | JsDomable | JsHtmlable)[]) {

        this.id = uuid()
        this.placeholder = document.createComment(this.id)
        this.children = []

        this.realElement = document.createElement('template')
        this.realElement.innerHTML = c.map((v, i) => {

            const next = other[i] ? other[i] : ''

            if (typeof next !== 'string' && isJsDom(next))
                this.children.push(next)

            return v + (typeof next === 'string' ? next : isJsDom(next) ? `<span id="${next.id}"></span>` : next.toHTML())

        }).join('')


        this.children
            .map<[JsDomable, Element]>(v => [v, this.realElement.content.querySelector('#' + v.id)])
            .forEach(([jd, span]) => { jd.replace(span) })
    }

    // 将真实节点插入父元素中
    insert() {
        const parentNode = this.placeholder.parentNode

        if (!parentNode) throw new Error("JsDom insert Error: placeholder without parentNode!")

        parentNode.insertBefore(this.realElement.content, this.placeholder)
    }

    // 在某个节点的位置上插入节点
    replace(target: Element) {
        const parentNode = target.parentNode
        if (!parentNode) throw new Error("JsDom replace Error: target without parentNode!")
        parentNode.replaceChild(this.placeholder, target)
        this.insert()
    }

    apppendTo(parent: Element) {
        parent.appendChild(this.placeholder)
        this.insert()
    }

    find(s: string | Selector): Option<HTMLElement> {
        const res = this.realElement.content.querySelector(typeof s === 'string' ? s : s.sel())
        return res ? Some.create(<HTMLElement>res) : None.create<HTMLElement>()
    }
    
    findAll(s: string | Selector):HTMLElement[] {
        const res = this.realElement.content.querySelectorAll(typeof s === 'string' ? s : s.sel())
        return Array.prototype.filter.call(res, v => v instanceof HTMLElement)
    }
}

type TagTree<T> = { [P in keyof T]: T[P] extends string ? JsTag : TagTree<T[P]> }

class JsTag implements JsHtmlable ,Selector {
    tag: string

    static create = <T>(s: T): TagTree<T> => {
        if (!s || typeof s !== 'object') throw new Error('JsTag: parse error!')

        const res = {}
        Object.keys(s).forEach(key => {
            if (typeof s[key] === 'string') {
                res[key] = new JsTag()
            } else {
                res[key] = JsTag.create(s[key])
            }
        })

        return <TagTree<T>>res
    }

    constructor() { this.tag = 'data-tag-' + uuid() }

    toHTML() { return this.tag }

    sel() { return `[${this.tag}]` }


}

const html = (c: ReadonlyArray<string>, ...other: (string | JsDomable | JsHtmlable)[]): JsElement => {
    return new JsElement(c, other)
}


const JsControl = {
    map: <T>(arr: T[], fn: (t: T) => JsDomable): JsDomable => {
        const str: string[] = new Array(arr.length).fill('')
        return new JsFragment(str, arr.map(fn))
    }
}






export {
    JsControl,
    JsElement,
    JsFragment,
    JsDomable,
    JsHtmlable,
    JsTag,

    isJsDom,
    isJsHtml

    html
}