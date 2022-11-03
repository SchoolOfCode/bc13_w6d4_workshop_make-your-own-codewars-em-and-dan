//👉 Write your tests below here:
import {test,expect} from '@jest/globals'
import {Enigma} from "./main"

test(`Should decode Enigma machine`, () => {
 expect(Enigma("Java$Scrip2t was i14nve56nt12ed by Bre122nd764an Eic1231h in n13i4ne1te4en nin67et165y fiv35e, an00d b123ec4536ame an E141C6MA sta67867867ndar123d in nine24234teen ni4n5e2ty s2ev7en"))
 .toBe("javascript was invented by brendan eich in nineteen ninety five and became an ecma standard in nineteen ninety seven")
});

test(`should not contain numbers`, () => {
    expect(Enigma("12345")).toBe("");
});

test(`Should only contain lowercase letters`, () => {
    expect(Enigma("YOU CRACKED THE CODE")).toBe("you cracked the code");
});
