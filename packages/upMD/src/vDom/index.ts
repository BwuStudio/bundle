import { Msgbox, Mailbox, FuncType } from 'msgbox'
import Injcss, { InjRule } from './injcss'

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

interface toDOM {
    render: () => HTMLElement
}

class Modal extends Shelf<{
    hide: () => void
}, {
    show: (title: string, url: string) => void
    hide: () => void
}> {

    static css = Injcss.create().push({
        '': {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0,0,0,0.2)',
            display: 'none'
        },
        '.sf-modal-panel': {
            position: 'absolute',
            height: '400px', width: '600px',
            top: '50%', left: '50%',
            marginTop: '-200px', marginLeft: '-300px',
            background: '#293a80',
            padding: '1px',
            paddingTop: '32px',
            boxShadow: '0 2px 4px 0 rgba(1,0,56,0.5)',
            borderRadius: '2px'
        },
        '.sf-modal-title': {
            position: 'absolute',
            top: '0', left: '0',
            height: '32px', lineHeight: '32px',
            paddingLeft: '8px',
            color: '#fff'
        },
        '.sf-modal-iframe': {
            border: 'none',
            background:'#fff',
            height: '100%', width: '100%'
        }
    })

    constructor() {

        super({
            hide: () => { }
        }, {
            show: () => { },
            hide: () => { }
        })

        var dom = document.createElement('div')

        document.body.appendChild(dom)

        Object.assign(dom.style, {

        })

        dom.innerHTML = `
            <div class="sf-modal-panel" >
            
            <div class="sf-modal-title" style="" ></div>

            <iframe class="sf-modal-iframe" >

            </div>
        `

        Modal.css.injectTo(dom)

        this.regist('show', (title, url) => {
            dom.style.display = 'block'
            dom.querySelector('.sf-modal-title').innerHTML = title
            dom.querySelector('iframe').src = url
        })

        this.regist('hide', () => {
            dom.style.display = 'none'
        })

    }
}
export {
    Modal
}
