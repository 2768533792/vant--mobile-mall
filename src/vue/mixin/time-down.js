export default {
	data(){
		return {
				timer: "",
				isTimeDown: false,
				downTime: 60,
		}
	},

	deactivated(){
		clearInterval(this.timer);	
	},
	
	methods: {
		timeDown(time){
			this.timer = setInterval(() => {
				if(this.isTimeDown){
					this.downTime -= 1;
				}
				if(this.downTime <= 0){
					this.isTimeDown = false;
					this.downTime = time || 60;
				}
			}, 1000);
		},
	}
}