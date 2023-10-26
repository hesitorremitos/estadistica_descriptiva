export default class FrequencyTable {
	constructor(data) {
		this.data = data
		// El numero de datos
		this.n = data.length
		// los valores mas grandes y minimos
		this.minValue = data[0]
		this.maxValue = data[data.length - 1]
		//Calculo del rango
		this.R = this.maxValue - this.minValue
		//Numero de intervalo
		this.K = Math.ceil(1 + 3.3 * Math.log10(this.n))
		//Ancho de clase
		this.a = this.R / this.K

		// TABLA
		//Para la columna i
		this.i = (() => {
			var data = []
			for (let j = 1; j <= this.K; j++) {
				data.push(j)
			}
			return data;
		})()
	}
}

let table = new FrequencyTable([4, 5, 89])
console.log((table.R))