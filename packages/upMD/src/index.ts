import Modal from './view/Modal.shelf'
import Tab from './view/Tab.shelf'

import { html } from './utils/jsdom'


// Modal.url('百度','http://www.baidu.com')

Modal.dom('测试',Tab.gen([{
    id:'aaa',
    title:'aaa',
    dom:html`<div>aaa</div>`
},{
    id:'bbb',
    title:'bbb',
    dom:html`<div>bbb</div>`
},]))