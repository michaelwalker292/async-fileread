'use strict'

var chai = require('chai')
var expect = chai.expect

var parseLog = require('../day2Labs').parseLog

describe('parseLog', function(){
	it('calls the callback method', function(done){
		function callback(){
			done()
		}
		parseLog(callback)
	})
	it('returns the correct 1st line', function(done){
		function callback(err, data)
		{
			expect(data.toString().split('/n')[0]).to.equal('* What are all the dates the log covers?')
			done()
		}
		parseLog(callback)
	})
	it('returns the correct 2nd line', function(done){
		function callback(err, data){
			expect(data.toString().split('/n')[1]).to.equal('2014-05-10')
			done()
		}
		parseLog(callback)
	})
	it('returns 6 distinct dates for the 1st question', function(done){
		function callback(err, data){
			var expectedData = '* What are all the dates the log covers?/n2014-05-10\n2014-05-11\n2014-05-12\n2014-05-13\n2014-05-14\n2014-05-15'

			expect(data.toString()).to.equal(expectedData)
			done()
		}
		parseLog(callback)
	})
})