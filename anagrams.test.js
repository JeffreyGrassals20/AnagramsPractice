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

})