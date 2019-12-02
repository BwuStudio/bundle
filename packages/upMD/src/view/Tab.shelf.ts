import { DomShelf } from "../utils/Shelf"
import Injcss from '../utils/injcss'
import { html, JsTag, JsDomable, JsControl, JsElement, AsyncJsDomable } from '../utils/jsdom'



const tags = JsTag.create({
    cntr: {
        panel: '',
        head: '',
        body: ''
    },
    tab: {
        title: '',
        content: ''
    }
})


type TabInfo = {
    id: string,
    title: string,
    dom: AsyncJsDomable,
}

// const render = (info: TabInfo[]) => 

export default class Tab extends DomShelf<{
    change: () => void
}, {
    load: () => void,
    switchTo: () => void
}> {

    private tabs: TabInfo[] = []

    static css = Injcss.create().push({
        '': {
            position: 'relative',
            height: '100%',
            width: '100%',
            paddingTop: '32px',
            background:"#f2eee5"
        },
        [tags.cntr.head.sel()]:{
            position:"absolute",
            width:"100%",
            height:'32px',
            top:'0',left:'0',
            padding:'0 2px'
        },
        [tags.tab.title.sel()]:{
            cssFloat:'left',
            background:"#fff",
            height:"28px",
            margin:'2px 2px',
            padding:'0 8px',
            lineHeight:'28px',
            color:"#333",
            borderRadius:'2px',
            boxShadow:"0 1px 2px rgba(0,0,0,0.05)"
        }
    })

    static gen(info: TabInfo[]): Promise<Tab> {
        return new Tab().render(info)
    }

    constructor() {
        super({
            change: () => { }
        }, {
            load: () => { },
            switchTo: () => { },
        })

        this.render()
    }

    render(info?: TabInfo[]): Promise<Tab> {
        this.tabs = info || this.tabs
        return html`
        <div class="cntr">
            <div ${tags.cntr.head}>        
                ${JsControl.map(this.tabs, v => html`
                    <div ${tags.tab.title}>${v.title}</div>
                `)}
            </div>
            <div  ${tags.tab.content}>         
                ${JsControl.map(this.tabs, v => html`
                    <div class="content">${v.dom}</div>
                `)}       
            </div>
        </div>`.then(v => {
            Tab.css.injectTo(v.realElement)
            this.ele = v
        }).then(() => this)
    }
}