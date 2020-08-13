export default {
	data() {
		return {
			pwdshow: false,
			numberArr: [],
			pwdArr: ["", "", "", "", "", ""],
			temp: ["", "", "", "", "", ""]
		}
	},
	methods: {
		switchKeyboard(index) {
			let length = index; //e.currentTarget.dataset.length;
			let arr = ["", "", "", "", "", ""]
			if (length == 4) {
				arr = ["", "", "", ""]
			}
			this.pwdArr = arr;
			this.temp = arr;
			this.numberArr = [];
			this.pwdshow = true
		},
		closeKeyboard: function() {
			console.log('asdff')
			this.pwdshow = false;
			this.numberArr = [];
			this.pwdArr = this.temp
		},
		getPwd: function() {
			//判断并取出密码
			if (this.numberArr.length === this.pwdArr.length) {
				let pwd = this.numberArr.join('')
				this.closeKeyboard();
				this.getPwdCallback(pwd)
			}
		},
		getPwdCallback(pwd){
			// 返回pwd
		},
		keyboardClick: function(e) {
			let numberArr = this.numberArr;
			let pwdArr = this.pwdArr;
			let index = e.index;
			if (numberArr.length === pwdArr.length || index == undefined) {
				return;
			}
			if (index == 9) { //取消键
				this.closeKeyboard();
				return;
			} else if (index == 11) {
				//退格键
				let len = numberArr.length;
				if (len) {
					pwdArr.splice(len - 1, 1, "");
				} else {
					pwdArr = this.temp;
				}
				numberArr.pop()
			} else if (index == 10) {
				numberArr.push(0);
				pwdArr.splice(numberArr.length - 1, 1, "●");
			} else {
				numberArr.push(index + 1);
				pwdArr.splice(numberArr.length - 1, 1, "●");
			}
			this.numberArr = numberArr;
			this.pwdArr = pwdArr;
			this.getPwd();
		}
	}
}