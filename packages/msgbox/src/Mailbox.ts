import MsgBox from './msgbox'

export default class MailBox<T, S>{
    home: MsgBox<T>
    target: MsgBox<S>
    listen<K extends keyof T>(name: K, fn: T[K]): this {
        this.home.define(name, fn)
        return this
    }
    send<K extends keyof S>(name: K): S[K] {
        return this.target.emit(name)
    }

    static create<T, S>(home: MsgBox<T>, target: MsgBox<S>) {
        const res = new MailBox<T, S>()
        res.target = target
        res.home = home
        return res
    }
}
