import {NumberMethods} from '../../src/function/NumberMethods';
import { assert } from 'chai';

describe('NumberMethods Test', () => {
        const n = new NumberMethods();
        it('getRanDigitNum',()=>{
            let num: number | string = 0;

            num = n.getRanDigitNum(3);
            assert.equal(typeof num, "number");
            assert.equal(num.toString().length, 3);
            
            num = 0;
            num = n.getRanDigitNum(3, false,2);
            assert.equal(typeof num, "number");
            assert.equal(num.toString().length, 3);

            num = n.getRanDigitNum(3, true);
            assert.equal(typeof num, "string");
        })

        it('getRanRangeNum', ()=>{
            let num: number = 0;
            
            num = n.getRanRangeNum(1, 10);
            for (let i = 0; i < 1000; i++) {
                assert.isTrue(num >= 1 && num <= 10);
            }
        })

        it('sum', ()=>{
            const numArr = [1,3,5];
            assert.equal(n.sum(numArr), 9);
        })

        it('avarage', ()=>{
            const numArr = [1,3,5];
            assert.equal(n.avarage(numArr), 3);
        })

        it('deviation', ()=>{
            const numArr = [175, 177, 179, 181, 183];
            console.log(n.deviation(numArr));
        })
        
        it('variance', ()=>{
            const numArr = [175, 177, 179, 181, 183];
            console.log(n.variance(numArr));
        })

        it('standardDeviation', ()=>{
            const numArr = [175, 177, 179, 181, 183];
            console.log(n.standardDeviation(numArr));
        })

        it('standardDeviation', ()=>{
            const numArr = [3,4,2,1,6,5,-1];
            // for (let i = 0; i < 100; i++) {
            //     numArr.push(n.getRanRangeNum(0, 10000));
            // }
            console.log(numArr, n.getMinMax(numArr));
        })

});