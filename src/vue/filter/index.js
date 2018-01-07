export const yuan = (value) => {
	return !isNaN(value) ? '¥' + (value / 100).toFixed(2) : value;
}

export default {
	install(Vue) {
		Vue.filter('yuan', yuan)
	},
}
