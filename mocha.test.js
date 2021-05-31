const assert = require('assert');
const chai = require('chai');
const sum = require('./functions.js');
const nock = require('nock');
const sinon = require('sinon')
const axios = require('axios');
const { expect } = require('chai');

describe('string', function(){
    it('1+1 e igual a 2', function(){
        chai.expect(1+1).to.equal(2)
    })
})

describe('string', function(){
    it('1+1 n e igual a 7', function(){
        chai.expect(1+1).to.not.equal(7)
    })
})

describe('Array', function(){
    it('O array [1,2,3,4,5] possui o numero 3', function(){
        chai.expect(testArr).to.include(3)
    })
})

describe('Array', function(){
    it('O array [6,7,8,9] n possui a frase TDD e TOP', function(){
        chai.expect(testArr2).to.not.include('TDD e TOP')
    })
})

describe('Object', function(){
    it('O objeto de teste possui a chave attr1', function(){
        chai.expect(testObj).to.have.property('attr1')
    })
})

describe('Object', function(){
    it('O objeto de teste 2 n possui a chave attr1', function(){
        chai.expect(testObj2).to.not.have.property('attr1')
    })
})

describe('String', function(){
    it('As frases de teste possuem a Regex Investtools', function(){
        chai.expect(testString).to.match(/[Investtools]/)
        chai.expect(testString2).to.match(/[Investtools]/)
        chai.expect(testString3).to.match(/[Investtools]/)
    })
})

describe('Function', function(){
    it('Os resultados das somas são verdadeiros', function(){
        var suma = once(sum);

        assert(suma(1,1), 2)
        assert(suma(2,2), 4)
        assert(suma(4,5), 9)
        assert(suma(6,7), 13)
        assert(suma(9,9), 18)
    })
})

describe('Assync Function', function(){
    it('Google tem <body>', async function(){
        axios.get('https://www.google.com').then((response)=>{
            expect(response.data).to.match('<body')
       }).catch()
    })
})


// test('Existe a tag <body> na página do google', async ()=>{
//     const result = await axios.get('https://www.google.com')
//     expect(result.data).toMatch('<body>')
// })




const testArr = [1,2,3,4,5]
const testArr2 = [6,7,8,9]
const testObj = {attr1:13}
const testObj2 = {attr3:13}
const testString = "Não existe concorrente com a investtools para a melhor empresa para se estagiar."
const testString2 = "Investtools cuida melhor dos seus estagiários que a bloomberg."
const testString3 = "Somos parte do Programa de Formação da Investtools.."


const commonReply= "<html><head></head><body></body></html>"

nock('https://www.google.com')
    .get('/')
    .reply(200,commonReply)


function once( fn ){
    var returnValue, called =false;
    return function(){
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments)
        }
        return returnValue
    }
}
