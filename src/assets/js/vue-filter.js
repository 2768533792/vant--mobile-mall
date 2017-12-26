export default {
	yuan(value){
		return '¥' + (value / 100).toFixed(2);
	}
}