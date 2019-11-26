
export type M<A> = {
    [P in keyof A]: A[P] extends (..._: infer M) => infer Q ? A[P] : never
}

export default class MsgBox<T> {

    box: T

    regist<A>(_: M<A>) {
        return new MsgBox<T & M<A>>(Object.assign(_, this.box))
    }

    define<K extends keyof T>(name: K, fn: T[K]): this {
        this.box[name] = fn
        return this
    }

    emit<K extends keyof T>(name: K): T[K] {
        return this.box[name]
    }

    constructor(m: T) {
        this.box = m
    }

    static create() {
        return new this({})
    }
}


