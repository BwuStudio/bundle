declare abstract class Option<T> {
    abstract exists(p: (_: T) => boolean): boolean;
    abstract filter(p: (_: T) => boolean): Option<T>;
    abstract filterNot(p: (_: T) => boolean): Option<T>;
    abstract flatMap<A>(f: (_: T) => Option<A>): Option<A>;
    abstract fold<B>(ifEmpty: () => B): (f: (_: T) => B) => B;
    abstract forAll(p: (_: T) => boolean): boolean;
    abstract forEach(f: (_: T) => any): void;
    abstract getOrElse(defaultValue: T | (() => T)): T;
    abstract map<B>(f: (_: T) => B): Option<B>;
    abstract orElse(alternative: () => Option<T>): Option<T>;
}
declare class Some<T> extends Option<T> {
    value: T;
    _tag: Symbol;
    constructor(v: T);
    static create<T>(a: T): Some<T>;
    exists(p: (_: T) => boolean): boolean;
    filter(p: (_: T) => boolean): Option<T>;
    filterNot(p: (_: T) => boolean): Option<T>;
    flatMap<A>(f: (_: T) => Option<A>): Option<A>;
    fold<A>(ifEmpty: () => A): (f: (_: T) => A) => A;
    forAll(p: (_: T) => boolean): boolean;
    forEach(f: (_: T) => any): void;
    getOrElse(defaultValue: T | (() => T)): T;
    map<B>(f: (_: T) => B): Option<B>;
    orElse(alternative: () => Option<T>): Option<T>;
}
declare class None<T> extends Option<T> {
    _tag: Symbol;
    static create<T>(): None<T>;
    exists(p: (_: T) => boolean): boolean;
    filter(p: (_: T) => boolean): this;
    filterNot(p: (_: T) => boolean): this;
    flatMap<A>(f: (_: T) => Option<A>): Option<A>;
    fold<A>(ifEmpty: () => A): (f: (_: T) => A) => A;
    forAll(p: (_: T) => boolean): boolean;
    forEach(f: (_: T) => any): void;
    getOrElse(defaultValue: T | (() => T)): T;
    map<B>(f: (_: T) => B): Option<B>;
    orElse(alternative: () => Option<T>): Option<T>;
}
export { Some, None, Option };
