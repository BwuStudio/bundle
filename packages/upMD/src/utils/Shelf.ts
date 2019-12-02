import { Msgbox, Mailbox, FuncType } from 'msgbox'
import { JsDomable, JsSelector, JsElement } from './jsdom'
import { Option, Some, None } from 'zfp'
import uuid from './uuid'


export default abstract class Shelf<Event, Method> {

    protected mail: Mailbox<Event, Method>

    constructor(event: FuncType<Event>, method: FuncType<Method>) {

        this.mail = Mailbox.create(
            Msgbox.create().regist(Object.assign({}, event)),
            Msgbox.create().regist(Object.assign({}, method))
        )

    }

    send<K extends keyof Method>(name: K): Method[K] {
        return this.mail.send(name)
    }

    listen<K extends keyof Event>(name: K, fn: Event[K]): this {
        this.mail.listen(name, fn)
        return this
    }

    protected emit<K extends keyof Event>(name: K): Event[K] {
        return this.mail.emit(name)
    }

    protected regist<K extends keyof Method>(name: K, fn: Method[K]): this {
        this.mail.regist(name, fn)
        return this
    }

}

abstract class DomShelf<Event, Method> extends Shelf<Event, Method>

    implements JsDomable {

    id: string

    placeholder: Comment

    protected ele: JsElement

    constructor(event: FuncType<Event>, method: FuncType<Method>) {
        super(event, method)
        this.id = uuid()
        this.placeholder = document.createComment(this.id)
    }

    dom() { 
        return this.ele.dom() 
    }

    // 将真实节点插入父元素中
    insert() { 
        return this.ele.insert() 
    }

    // 在某个节点的位置上插入节点
    replace(target: Element) { 
        return this.ele.replace(target) 
    }

    apppendTo(parent: Element) { 
        return this.ele.apppendTo(parent) 
    }

    find(s: string | JsSelector): Option<HTMLElement> {
        return this.ele.find(s)
    }

    findAll(s: string | JsSelector): HTMLElement[] {
        return this.ele.findAll(s)
    }

    toPromise():Promise<this>{
        return new Promise(res=>res(this))
    }
}

export {
    DomShelf
}