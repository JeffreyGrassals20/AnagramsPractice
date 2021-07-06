const File = require('./index.js')



describe("Anagrams Test", () => {

    it("Verify if the path of the file is correct", () => {

        expect(File.IfExist()).toBe(true);


    })


})