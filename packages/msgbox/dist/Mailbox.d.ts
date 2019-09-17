import MsgBox from './msgbox';
export default class MailBox<T, S> {
    home: MsgBox<T>;
    target: MsgBox<S>;
    listen<K extends keyof T>(name: K, fn: T[K]): this;
    send<K extends keyof S>(name: K): S[K];
    static create<T, S>(home: MsgBox<T>, target: MsgBox<S>): MailBox<T, S>;
}
