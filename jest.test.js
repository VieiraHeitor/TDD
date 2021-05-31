const sum = require('./functions.js');
const nock = require('nock');
const axios = require('axios');

test('1+1 e igual a 2', ()=>{
    expect(1+1).toBe(2);
})

test('1+1 nao e igual a 7', ()=>{
    expect(1+1).not.toBe(7);
})

const testArr = [1,2,3,4,5]
const testArr2 = [6,7,8,9]
const testObj = {attr1:13}
const testObj2 = {attr3:13}
const testString = "Não existe concorrente com a investtools para a melhor empresa para se estagiar."
const testString2 = "Investtools cuida melhor dos seus estagiários que a bloomberg."
const testString3 = "Somos parte do Programa de Formação da Investtools.."

test('O array [1,2,3,4,5] contem o 3', ()=>{
    expect(testArr).toContain(3);
})

test('O array [6,7,8,9] nao contem TDD e TOP', ()=>{
    expect(testArr2).not.toContain('TDD e TOP');
})

test('O objeto possui o atributo attr1', ()=>{
    expect(testObj).toHaveProperty('attr1')
})

test('O objeto nao possui o atributo attr1', ()=>{
    expect(testObj2).not.toHaveProperty('attr1')
})

test('As frases de teste possuem a regex Investtools', ()=>{
    expect(testString).toMatch(/([Invesstools])/)
    expect(testString2).toMatch(/([Invesstools])/)
    expect(testString3).toMatch(/([Invesstools])/)
})

test('1+1 e igual a 2', ()=>{
    expect(sum(1,1)).toBe(2);
})

test('2+2 e igual a 4', ()=>{
    expect(sum(2,2)).toBe(4);
})

test('4+5 e igual a 9', ()=>{
    expect(sum(4,5)).toBe(9);
})

test('6+7 e igual a 13', ()=>{
    expect(sum(6,7)).toBe(13);
})

test('9+9 e igual a 18', ()=>{
    expect(sum(9,9)).toBe(18);
})

const commonReply= "<html><head></head><body></body></html>"
nock('https://www.google.com')
    .get('/')
    .reply(200,commonReply)


test('Existe a tag <body> na página do google', async ()=>{
    const result = await axios.get('https://www.google.com')
    expect(result.data).toMatch('<body>')
})