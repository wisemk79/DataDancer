import { Base } from '../common/Base';
import { engData, symbolData, numData } from '../data/passwordData';
import {
	k_first_name,
	k_last_name,
	e_female_name,
	e_male_name,
	jp_female_name,
	jp_male_name,
	jp_last_name,
	c_male_name,
	c_female_name
} from '../data/nameData';

export class StringMethods extends Base {
	/**
	 * fields
	 */

	/**
	 * properties
	 */

	/**
	 *  constructor
	 */
	constructor() {
		super();
	}

	/**
	 * methods
	 */

	/**
	 * nameGenerator
	 *
	 * support eng, japan, korea, chinese name
	 *
	 * if you generate eng, japanese, chinese Name, you can choose gender
	 *
	 * (lang?: "kor" | "eng" | "jp" | "chi", gender?: "male" | "female")
	 */
	nameGenerator(lang: "kor" | "eng" | "jp" | "chi" = 'eng', gender: "male" | "female" = 'male') {
		if (lang === 'kor') {
			const idx1 = this.$_ranRangeNum(0, k_last_name.length - 1);
			const idx2 = this.$_ranRangeNum(0, k_first_name.length - 1);
			let idx3 = this.$_ranRangeNum(0, k_first_name.length - 1);

			while (true) {
				if (idx2 === idx3) idx3 = this.$_ranRangeNum(0, k_first_name.length - 1);
				else break;
			}
			return k_last_name[idx1] + k_first_name[idx2] + k_first_name[idx3];
		} else if (lang === 'eng') {
			if (gender === 'male') {
				const idx = this.$_ranRangeNum(0, e_male_name.length - 1);
				return e_male_name[idx];
			} else {
				const idx = this.$_ranRangeNum(0, e_female_name.length - 1);
				return e_female_name[idx];
			}
		} else if (lang === 'jp') {
			const laIdx = this.$_ranRangeNum(0, jp_last_name.length - 1);
			const lastName = jp_last_name[laIdx].split(', ');
			if (gender === 'male') {
				const idx = this.$_ranRangeNum(0, jp_male_name.length - 1);
				const name = jp_male_name[idx].split(', ');
				return `${name[0]} ${lastName[0]}(${name[1]} ${lastName[1]})`;
			} else {
				const idx = this.$_ranRangeNum(0, jp_female_name.length - 1);
				const name = jp_female_name[idx].split(', ');
				return `${name[0]} ${lastName[0]}(${name[1]} ${lastName[1]})`;
			}
		} else if (lang === 'chi') {
			if (gender === 'male') {
				const idx = this.$_ranRangeNum(0, c_male_name.length - 1);
				return c_male_name[idx];
			} else {
				const idx = this.$_ranRangeNum(0, c_female_name.length - 1);
				return c_female_name[idx];
			}
		} 
	}

	/**
	 * UUID 생성 메서드
	 */

	/**
	 * MAC 주소 생성 메서드
	 */

	/**
	 * you can get password Randomly, use sum nameGenerator function.
	 * 
	 * Password must be set at least 4 digits.
	 * 
	 * Default return password value is only inludes String.
	 * 
	 * If you want to inlude number or symbol or both in password,
	 * 
	 * you can also set it
	 *
	 * (digit: number, include?: "string" | "all" | "number" | "symbol")
	 */
	passwordGenerator(digit: number, include: "string" | "all" | "number" | "symbol" = "string") {
		if (digit < 4) return false;

		let result: string = '';
		let howManyIncludeNum: number = this.$_ranRangeNum(1, Math.floor(digit / 3));
		let howManyIncludeSymbol: number = this.$_ranRangeNum(1, Math.floor(digit / 3));

		const typeArr = [];

		this.$_forLoop(0, digit, (i: number) => typeArr.push({ type: null }));

		while (true) {
			if (include === "string") break;

			let index = this.$_ranRangeNum(0, digit - 1);

			if (
				(include === 'all' || include === 'symbol') &&
				typeArr[index].type === null &&
				howManyIncludeSymbol !== 0
			) {
				typeArr[index].type = 'symbol';
				howManyIncludeSymbol -= 1;
			}
			if (
				(include === 'all' || include === 'number') &&
				typeArr[index].type === null &&
				howManyIncludeNum !== 0
			) {
				typeArr[index].type = 'number';
				howManyIncludeNum -= 1;
			}

			if (include === 'all' && howManyIncludeSymbol === 0 && howManyIncludeNum === 0) break;
			if (include === 'symbol' && howManyIncludeSymbol === 0) break;
			if (include === 'number' && howManyIncludeNum === 0) break;
		}

		const createRanPw: () => void = () => {
			typeArr.forEach(item => {
				if (item.type === 'number') result += numData[this.$_ranRangeNum(0, numData.length - 1)];
				else if (item.type === 'symbol')
					result += symbolData[this.$_ranRangeNum(0, symbolData.length - 1)];
				else result += engData[this.$_ranRangeNum(0, engData.length - 1)];
			});
		};

		createRanPw();

		return result;
	}
}
