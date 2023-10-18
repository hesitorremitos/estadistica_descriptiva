import { expect, test, describe } from 'vitest'
import { filterData } from '../filter'
import testCases from "./filter.json"

describe("Filtrado de los datos de entrada para convertirlo a un ARRAY", () => {
	testCases.forEach(({ input, output, desc, separator }, index) => {
		if (separator) {
			test(`Test case ${index}: ${desc}`, () => {
				expect(filterData(input, separator)).toStrictEqual(output)
			})
		}
		else {
			test(`Test case ${index}: ${desc}`, () => {
				expect(filterData(input)).toStrictEqual(output);
			});
		}
	});
});
