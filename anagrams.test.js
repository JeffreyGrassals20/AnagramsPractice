const File = require('./index.js')
const{AreAnagrams} = require('./index.js');


describe("Anagrams Test", () => {

    it("Verify if the path of the file is correct", () => {

        expect(File.IfExist()).toBe(true);


    })

    it("Verify that there are anagrams", () => {
        const array = ["fresa","frase", "hola", "adios"];
        expect(File.AreAnagrams2(array)).toBe(true);
    })

    it("Verify if amount of anagrams is 1", () => {
        const array = ["fresa","frase", "hola", "adios"];
        expect(File.CountAnagrams(File.AreAnagrams2())).toBe(20683)
    })

})