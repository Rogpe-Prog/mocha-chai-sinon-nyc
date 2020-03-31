const tabuadaControler = require('./tabuada')
const sinon = require('sinon')

describe('tabuada controller', () => {
    it('list', () => {

        const numeros = []
        for(let i=1; i<=100; i++){
            numeros.push(i)
        }

        let res = {
            render: function(){}
        }

        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/list', { numeros })
        tabuadaControler.list({}, res)
    })
    it('calculate the tabuadas', () => {

        const tabuadas = []
        const num = 10
        for(let i=0; i<= 10; i++){
            tabuadas.push({
                num,
                i,
                resultado: num*i
            })
        }
        let res = {
            render: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/tabuada', { 
            num: 10,
            tabuadas
        })
        tabuadaControler.tabuada({ params: { num } }, res)

    })
})