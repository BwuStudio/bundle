export declare type M<A> = {
    [P in keyof A]: A[P] extends (..._: infer M) => infer Q ? A[P] : never;
};
export default class MsgBox<T> {
    box: T;
    regist<A>(_: M<A>): MsgBox<T & M<A>>;
    define<K extends keyof T>(name: K, fn: T[K]): this;
    emit<K extends keyof T>(name: K): T[K];
    constructor(m: T);
    static create(): MsgBox<{}>;
}
