export default {
	debounce(func, wait, immediate) {
		let timeout, args, context, timestamp, result;
		return function () {
			context = this;
			args = arguments;
			timestamp = new Date();
			const later = () => {
				const last = (new Date()) - timestamp;
				if (last < wait) {
					timeout = setTimeout(later, wait - last);
				} else {
					timeout = null;
					result = func.apply(context, args);
				}
			};
			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
			return result;
		};
	},
	throttle(func, wait, options) {
		var timeout, context, args, result;
		var previous = 0;
		if (!options) options = {};

		var later = function () {
			previous = options.leading === false ? 0 : new Date();
			timeout = null;
			result = func.apply(context, args);
			if (!timeout) context = args = null; //显示地释放内存，防止内存泄漏
		};

		var throttled = function () {
			var now = new Date();
			if (!previous && options.leading === false) previous = now;
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now;
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};

		throttled.cancel = function () {
			clearTimeout(timeout);
			previous = 0;
			timeout = context = args = null;
		};

		return throttled;
	},
	// 判断元素是否被加入到页面节点内
	isAttached(element) {
		let currentNode = element.parentNode;
		while (currentNode) {
			if (currentNode.tagName === 'HTML') {
				return true;
			}
			if (currentNode.nodeType === 11) {
				return false;
			}
			currentNode = currentNode.parentNode;
		}
		return false;
	},

	getScrollLeft(element) {
		return 'scrollLeft' in element ? element.scrollLeft : element.pageXOffset;
	},

	getVisibleHeight(element) {
		return element === window ? element.innerHeight : element.getBoundingClientRect().height;
	},
	
	getVisibleWidth(element) {
		return element === window ? element.innerWidth : element.getBoundingClientRect().width;
	},
}
