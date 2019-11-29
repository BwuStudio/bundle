import Shelf from "../utils/Shelf"
import Injcss from '../utils/injcss'
import { html, JsTag } from '../utils/jsDom'

const tags = JsTag.create({
    title: '',
    panel: '',
    head: '',
    content: '',
    close: ''
})


export default class Modal extends Shelf<{
    hide: () => void
}, {
    show: (title: string, dom: HTMLElement) => void
    hide: () => void
}> {

    static dom(title: string, dom: HTMLElement) {
        return new Modal().send('show')(title, dom)
    }

    static url(title: string, url: string) {
        const dom = document.createElement('iframe')
        dom.src = url
        dom.style.height = '100%'
        dom.style.width = '100%'
        dom.style.border = 'none'
        return new Modal().send('show')(title, dom)
    }

    private static css = Injcss.create().push({
        '': {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0,0,0,0.2)',
            display: 'none',
            transition: 'all 0.2s ease-out'
        },
        '*': {
            transition: 'all 0.2s ease-out'
        },
        [tags.panel.sel()]: {
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
        [tags.close.sel()]: {
            position: 'absolute',
            top: '0', right: '0',
            height: '32px', width: '32px', lineHeight: '32px',
            color: '#fff',
            textAlign: 'center',
            transform: 'scaleX(1.2)',
            cursor: 'pointer'
        },
        [tags.close.sel() + '::after']: {
            content: '"X"'
        },
        [tags.head.sel()]: {
            position: 'absolute',
            top: '0', left: '0', right: '0',
            height: '32px', lineHeight: '32px',
            paddingLeft: '8px', paddingRight: '32px',
            color: '#fff'
        },
        [tags.content.sel()]: {
            border: 'none',
            background: '#fff',
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

        const dom = html`
            <div>
                <div ${tags.panel}>
                    <div ${tags.head}>
                        <span ${tags.title}></span>
                        <div  ${tags.close}></div>
                    </div>
                    <div ${tags.content}></div>
                </div>
            </div>
        `

        Modal.css.injectTo(dom.realElement)

        document.body.appendChild(dom.realElement)

        this.regist('show', (title, targetDom) => {
            dom.realElement.style.display = 'block'

            dom.find(tags.title).map(v => {
                v.innerHTML = title
            })

            dom.find(tags.close).map(v => {
                v.onclick = e => { this.send('hide')() }
            })

            dom.find(tags.content).map((v: HTMLElement) => {
                v.appendChild(targetDom)
            })
        })

        this.regist('hide', () => {
            dom.realElement.style.opacity = '0'
            setTimeout(e => {
                dom.realElement.style.display = 'none'
            }, 300)
        })

    }
}
