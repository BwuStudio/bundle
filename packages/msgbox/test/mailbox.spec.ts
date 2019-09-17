import * as assert from "power-assert"

import MsgBox from '../src/Msgbox'
import MailBox from '../src/Mailbox'

describe("static create", () => {
    const a = MsgBox.create()
    const b = MsgBox.create()

    it("should be instance of `MsgBox`.", () => assert(MailBox.create(a, b) instanceof MailBox === true))
})

describe("#listen/send", () => {

    const method = MsgBox.create().regist({
        close(_: number) { return _.toString() }
    })

    const event = MsgBox.create().regist({
        click(_: boolean): boolean { return false }
    })

    const _outside = MailBox.create(event, method)

    const outside = _outside.listen('click', _ => !_)

    it("test list return the exist MailBox",
        () => assert(_outside === outside))

    it("test listen return true",
        () => assert(event.emit('click')(false)))


    it("test send return true",
        () => assert(outside.send('close')(1) === '1'))

})

