import * as assert from "power-assert"

import MsgBox from '../src/Msgbox'

describe("static create", () => {
    it("should be instance of `MsgBox`.", () => assert(MsgBox.create() instanceof MsgBox === true))
})

describe("#regist/emit", () => {
    let m = MsgBox.create()
    let n = m.regist({
        fn(_: number): string { return _.toString() }
    })

    it("test regist return new MsgBox",
        () => assert(m !== n))

    it("test regist/emit return true",
        () => assert(n.emit('fn')(1) === '1'))

})

describe("#define", () => {
    let m = MsgBox.create()
    let n = m.regist({
        fn(_: number): string { return _.toString() }
    })
    let z = n.define('fn',(i:number)=> (++i).toString())

    it("test define return the exist MsgBox",
        () => assert(z === n))

    it("test define overwrite the exist function",
        () => assert(n.emit('fn')(1) === '2'))
})
