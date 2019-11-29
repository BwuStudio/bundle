import { Msgbox, Mailbox, FuncType } from 'msgbox'



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
