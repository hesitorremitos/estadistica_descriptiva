import { expect, test, describe } from 'vitest'
import { filterData } from '../filter'
import FrequencyTable from '../FrecuencyTable'
import caseTests from "./FrecuencyTable.json"



caseTests.forEach((caseTest, index) => {
	describe(`Para los datos ${caseTest.data}`, () => {
		var table = new FrequencyTable(filterData(caseTest.data))
		test(`n=${table.n}`, () => {
			expect(table.n).toBe(caseTest.n)
		})
		test("minValue : " + caseTest.minValue, () => {
			expect(table.minValue).toString(caseTest.minValue)
		})
		test("maxValue : " + caseTest.maxValue, () => {
			expect(table.maxValue).toString(caseTest.maxValue)
		})
		test(`R : ${caseTest.R}`, () => {
			expect(table.R).toString(caseTest.R)
		})
	});
})