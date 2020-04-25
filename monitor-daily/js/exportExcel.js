/**
 * Created by miinow on 2017/11/4.
 */
(function(){

	if($.query.get('inner') !== 'true'){
		$('#btn').css('display', 'none')
	}

	$('#btn').on('click', function(){
		let tableStr = '';
		for(let i=1;i<5;i++){
			tableStr += getInnerHtml('#t'+ i ) + '\n';
		}

		let uri = 'data:text/csv;charset=utf-8,\uFEFF' + tableStr;
		let downloadLink = document.createElement("a");
		downloadLink.href = uri;
		downloadLink.download = "export.csv";

		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	})

	function getInnerHtml (select) {

		let el = $(select);
		let arr = [], str = '';

		arr.push(el.children().eq(0).html());


		for(let i=1,len=el.children().length;i<len;i++){
			let child = el.children().eq(i);
			let subArr = [];
			if(child.children()){
				for(let j=0,jLen = child.children().length;j<jLen;j++){

					let td =  child.children().eq(j);

					let innerHtml = td.html();
					innerHtml.replace(/,/ig, '\,')
					innerHtml = '\"' + innerHtml + '\"'
					subArr.push(innerHtml);

				}
			}
			let subStr = subArr.join(',')
			arr.push(subStr);

		}


		str = arr.join('\n');


		return str
	}



})()



