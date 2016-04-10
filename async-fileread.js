'use strict'

var fs = require('fs')

function parseLog(callback)
{
	fs.readFile('production.log', function(err, data){
		fs.readFile('production.log', function(){
			var dataArray = data.toString().split('/n')

			var dateArray = dataArray.map(function(element){
				var pattern = new RegExp(/((?=\d{4})\d{4}|(?=[a-zA-Z]{3})[a-zA-Z]{3}|\d{2})((?=\/)\/|\-)((?=[0-9]{2})[0-9]{2}|(?=[0-9]{1,2})[0-9]{1,2}|[a-zA-Z]{3})((?=\/)\/|\-)((?=[0-9]{4})[0-9]{4}|(?=[0-9]{2})[0-9]{2}|[a-zA-Z]{3})/);

				var parsedData = element.split(',')
				console.log(parsedData)
    			var match = pattern.exec(parsedData[1]);

    			return match[0]
			})
			var dates = dateArray.join('/n')
			console.log(dateArray)
			console.log(callback(err, '* What are all the dates the log covers?/n' + dates))
		})
	})
}

module.exports = {parseLog: parseLog}