import { Mailbox } from 'msgbox'

export interface Shelf<Event, Method> {
    msg: () => Mailbox<Event, Method>
}

export type ShelFn = <Porp, Event, Method>(p: Porp) => Shelf<Event, Method>



class Domo<Event, Method> implements Shelf<Event, Method>{
    private inner: Mailbox<Method, Event>
    private outer: Mailbox<Event, Method>

    private Tree

    constructor(params) {
        
    }

    msg() { return this.outer }
}
