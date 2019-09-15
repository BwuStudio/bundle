import * as assert from "power-assert"
import * as sinon from "sinon"

import { Some, None, Option } from '../src/index'

describe("Option", () => {
    it("should be instance of `Option`.", () => assert(Some.create("foo") instanceof Option === true))
    it("should instance of `Option`.", () => assert(None.create() instanceof Option === true))
})

describe("#exists", () => {
    const v = Some.create('foo')
    const x = None.create<string>()
    it("test some.exists return true",
        () => assert(v.exists(a => a === "foo") === true)
    )
    it("test some.exists return false",
        () => assert(v.exists(a => a === "bar") === false)
    )
    it("test none.filter always return false",
        () => assert(x.exists(a => a === 'foo') === false)
    )
});

describe("#filter", () => {
    const v = Some.create('foo')
    const x = None.create<string>()
    it("test some.filter return Some",
        () => assert(v.filter(a => a === 'foo') instanceof Some)
    )
    it("test some.filter return None",
        () => assert(v.filter(a => a === 'bar') instanceof None)
    )
    it("test none.filter always return None",
        () => assert(x.filter(a => a === 'foo') instanceof None)
    )
})

describe("#filterNot", () => {
    const v = Some.create('foo')
    const x = None.create<string>()
    it("test some.filterNot return Some",
        () => assert(v.filterNot(a => a === 'foo') instanceof None)
    )
    it("test some.filterNot return None",
        () => assert(v.filterNot(a => a === 'bar') instanceof Some)
    )
    it("test none.filterNot always return None",
        () => assert(x.filterNot(a => a === 'foo') instanceof None)
    )
})

describe("#flatMap", () => {
    const v = Some.create('foo')
    const x = None.create<string>()
    it("test some.flatMap return Some",
        () => assert(v.flatMap(a => Some.create(a.length)) instanceof Some)
    )
    it("test some.flatMap return None",
        () => assert(v.flatMap(a => None.create<number>()) instanceof None)
    )
    it("test none.flatMap always return None",
        () => assert(x.flatMap(a => Some.create(a.length)) instanceof None)
    )
})

describe("#map", () => {
    const v = Some.create('foo')
    const x = None.create<string>()
    it("test some.map return Some",
        () => assert(v.map(a => a.length) instanceof Some)
    )
    it("test none.map always return None",
        () => assert(x.map(a => a.length) instanceof None)
    )
})