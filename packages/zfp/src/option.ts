abstract class Option<T>{
    /**
     * Returns true if the option is non-empty and the predicate p returns true when applied to the option's value.
     */
    abstract exists(p: (_: T) => boolean): boolean;
    /**
     * Returns the option if it is non-empty and applying the predicate p to the option's value returns true.
     */
    abstract filter(p: (_: T) => boolean): Option<T>;
    /**
     * Returns the option if it is non-empty and applying the predicate p to the option's value returns false.
     */
    abstract filterNot(p: (_: T) => boolean): Option<T>;
    /**
     * Returns the result of applying f to the option's value if the option is non-empty.
     */
    abstract flatMap<A>(f: (_: T) => Option<A>): Option<A>;
    /**
     * Returns the result of applying f to the option's value if the option is non-empty.
     * Otherwise, evaluates expression ifEmpty.
     */
    abstract fold<B>(ifEmpty: () => B): (f: (_: T) => B) => B;
    /**
     * Tests whether a predicate holds for all elements of the option.
     */
    abstract forAll(p: (_: T) => boolean): boolean;
    /**
    * Apply the given procedure f to the option's value, if it is non-empty.
    */
    abstract forEach(f: (_: T) => any): void;
    /**
     * Returns the option's value if the option is non-empty, otherwise return the result of evaluating default.
     */
    abstract getOrElse(defaultValue: T | (() => T)): T;
    /**
     * Builds a new option by applying a function to all elements of this option.
     */
    abstract map<B>(f: (_: T) => B): Option<B>;
    /**
   * Returns the option itself if it is non-empty, otherwise return the result of evaluating alternative.
   */
    abstract orElse(alternative: () => Option<T>): Option<T>;

}

const SomeTag = Symbol("SOME")
class Some<T> extends Option<T>{
    value: T
    _tag: Symbol = SomeTag
    constructor(v: T) {
        super()
        this.value = v
    }
    static create<T>(a: T) {
        return new Some<T>(a)
    }

    exists(p: (_: T) => boolean) { return p(this.value) }
    filter(p: (_: T) => boolean): Option<T> { return p(this.value) ? this : None.create<T>() }
    filterNot(p: (_: T) => boolean): Option<T> { return p(this.value) ? None.create<T>() : this }
    flatMap<A>(f: (_: T) => Option<A>): Option<A> { return f(this.value) }
    fold<A>(ifEmpty: () => A): (f: (_: T) => A) => A { return (f: (_: T) => A) => f(this.value) }
    forAll(p: (_: T) => boolean): boolean { return p(this.value) }
    forEach(f: (_: T) => any): void { f(this.value) }
    getOrElse(defaultValue: T | (() => T)): T { return this.value }
    map<B>(f: (_: T) => B): Option<B> { return Some.create(f(this.value)) }
    orElse(alternative: () => Option<T>): Option<T>{return this}

}


const NoneTag = Symbol("None")
class None<T> extends Option<T> {
    _tag: Symbol = NoneTag
    static create<T>() { return new None<T>() }

    exists(p: (_: T) => boolean) { return false }
    filter(p: (_: T) => boolean) { return this }
    filterNot(p: (_: T) => boolean) { return this }
    flatMap<A>(f: (_: T) => Option<A>): Option<A> { return None.create<A>() }
    fold<A>(ifEmpty: () => A): (f: (_: T) => A) => A { return () => ifEmpty() }
    forAll(p: (_: T) => boolean): boolean { return true; }
    forEach(f: (_: T) => any): void { }
    getOrElse(defaultValue: T | (() => T)): T { return typeof defaultValue === 'function' ? (<() => T>defaultValue)() : defaultValue }
    map<B>(f: (_: T) => B): Option<B> { return None.create<B>() }
    orElse(alternative: () => Option<T>): Option<T>{return alternative()}

}



export { Some, None, Option }
