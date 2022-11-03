//👉 Write your tests below here:
import {test,expect} from '@jest/globals'
import {Enigma} from "./main"

const myCode = "Java$Scrip2t was i14nve56nt12ed by Bre122nd764an Eic1231h in n13i4ne1te4en nin67et165y fiv35e, an00d b123ec4536ame an E141C6MA sta67867867ndar123d in nine24234teen sev4525enty s2ev7en"


test(`Should decode Enigma machine`, () => {
 expect(Enigma("l2o1z w6e5n4t t2o su1p5e4r1cuts")).toBe("loz went to supercuts")
})

test(`should not contain numbers`, () => {
    expect(Enigma(code)).not.toContain(Number)
})