var rgba = document.querySelector('#rgba');
		var ie8 = document.querySelector('#ie8');
		var tip = document.querySelector('.tip');
		var IEfilter = {
			'0.1':'19',
			'0.2':'33',
			'0.3':'4C',
			'0.4':'66',
			'0.5':'7F',
			'0.6':'99',
			'0.7':'B2',
			'0.8':'C8',
			'0.9':'E5'
		}
		function hexToRgbaFun(){
			var hexReg = /^#[\da-f]{3}([\da-f]{3})?$/;
			var opReg = /0(\.[0-9]{0,2})/;
			var hex = document.querySelector('#hex').value;
			var opacity = document.querySelector('#opacity').value;
			console.log(parseInt(opacity))
			
			if(!hexReg.test(hex)){
				tip.classList.remove('tada')
				tip.classList.add('shake');
				tip.style.display = "block";
				tip.innerHTML = "请输入合适的色值!";
			}else if(!opReg.test(opacity)){
				tip.classList.remove('tada');
				tip.classList.add('shake');
				tip.style.display = "block"
				tip.innerHTML = "透明度取值为0~1";
			}else{
				tip.classList.remove('shake');
				tip.classList.add('tada');
				tip.style.display = "block"
				tip.innerHTML = "查询成功！";
				IEfilter[opacity]
				var color = hex.substring(1)
				var filterText = 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#'+IEfilter[opacity]+color+',endColorstr=#'+IEfilter[opacity]+color+');'
				var rgbaInfo = hexToRgba(hex,opacity)
				rgba.innerHTML = rgbaInfo;
				ie8.innerHTML = filterText;
			}
			
			
			setTimeout(function(){
				tip.style.display = "none"
			},2000)
			
			
		}
		
		function hexToRgba(hex, opacity) { 
			return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")"; 
		}