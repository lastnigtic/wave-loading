(function(){
	var wave = function(parentNode, option){
		var option = option || {};
		if(!parentNode){
			throw new Error('please insert a parentNode');
		}	
		this.parentNode = parentNode;
		this.rad = option.rad || 100;
		this.innerColor = option.innerColor || '#ffcd4d';
		this.borderColor = option.borderColor || '#e45931';
		this.beforeColor = option.beforeColor || '#e45931';
		this.afterColor = option.afterColor || '#f37b32';
		this.fontColor = option.fontColor || 'white';
		this.init();
		return this;
	};
	wave.prototype.init = function(){
		this.container = document.createElement('div');
		this.container.className = 'wave-container';

		setStyle(this.container,{
			width: this.rad + 'px',
			height: this.rad + 'px',
			border: `10px solid ${this.borderColor}`
		});
		this.percent = document.createElement('span');
		this.percent.className = 'percent';
		this.percent.style.color = this.fontColor;
		this.percent.innerText = '0%';
		this.container.appendChild(this.percent);

		this.wave = document.createElement('div');
		this.wave.className = 'wave';
		setStyle(this.wave,{
			width: this.rad + 'px',
			height: this.rad + 'px',
			background: this.innerColor
		});

		this.waveBefore = document.createElement('div');
		this.waveBefore.className = 'waves before';
		setStyle(this.waveBefore,{
			width: this.rad*3 + 'px',
			height: this.rad*3 + 'px',
			backgroundColor: this.beforeColor,
			marginTop: -20 + 'px',
			zIndex: 20
		});

		this.waveAfter = document.createElement('div');
		this.waveAfter.className = 'waves after';
		setStyle(this.waveAfter,{
			width: this.rad*3 + 'px',
			height: this.rad*3 + 'px',
			backgroundColor: this.afterColor,
			marginTop: -20 + 'px',
			zIndex: 10
		});

		this.container.appendChild(this.wave);
		this.wave.appendChild(this.waveBefore);
		this.wave.appendChild(this.waveAfter);
		this.parentNode.appendChild(this.container);
	};
	wave.prototype.refresh = function(value){
		this.percent.innerText = value+'%';
		setStyle(this.waveBefore,{
			marginTop: -(value*0.01*this.rad + 20) + 'px'
		});
		setStyle(this.waveAfter,{
			marginTop: -(value*0.01*this.rad + 20) + 'px'
		});

	};
	function setStyle(item, sty){
		for(var i in sty){
			item.style[i] = sty[i];
		}
	}
	window.wave = wave;
}());

$(function(){
	var i = new wave(document.getElementsByClassName('ss')[0]);
	i.refresh(50)
});
