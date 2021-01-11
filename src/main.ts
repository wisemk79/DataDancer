import NumberMethods from './function/NumberMethods';
import StringMethods from './function/StringMethods';
import VisualMethods from './function/VisualMethods';
import DateMethods from './function/DateMethods';
import ArrayMethods from './function/ArrayMethods';

export default class DataDancer {

    /**
     * 버전 확인
     */
    static getVersion (): string {
        return "";
    }

    static NumberMethods = NumberMethods;
    static StringMethods = StringMethods;
    static VisualMethods = VisualMethods;
    static DateMethods = DateMethods;
    static ArrayMethods = ArrayMethods;
}