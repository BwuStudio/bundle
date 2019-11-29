import Shelf from "../utils/Shelf"
import Injcss from '../utils/injcss'
import { html, JsTag } from '../utils/jsDom'



const tags = JsTag.create({
    cntr:{
        panel:'',
        head:'',
        body:''
    },
    tab:{
        title:'',
        content:''
    }
})


type TabInfo = {
    id: string,
    title: string,
    dom: JsDomable,
}

const render = (info: TabInfo[]) => html`
    <div class="cntr">
        <div class="head">        
            ${JsControl.map(info, v => html`
                <div class="title">${v.title}</div>
            `)}
        </div>
        <div class="body">         
            ${JsControl.map(info, v => html`
                <div class="content">${v.dom}</div>
            `)}       
        </div>
    </div>
`

export default class Tab extends Shelf<{
    change: () => void
}, {
    load: () => void,
    switchTo: () => void
}> {

    private tabs:TabInfo[] = []

    constructor(){
        super({
            change:()=>{}
        },{
            load:()=>{},
            switchTo:()=>{},
        })

        const dom = html`
            <div ${tags.cntr.panel}>
                <div ${tags.cntr.head}>
                
                </div>
                <div ${tags.cntr.head}>
                
                </div>
            </div>
        `
        

    }
}