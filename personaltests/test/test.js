var expect = require("chai").expect;
var assert = require('chai').assert;
var should = require('chai').should();
var tags = require("../lib/tags.js");

describe("addition", function(){
   	it("should give 9 as the sum", function(){
   	   var x = 4;
   	   var y = 5;

       expect(x+y).to.equal(9);
   });
});

describe("atLeast", function(){
   	it("should be at least 30", function(){
   	   var x = 49;

       expect(x).to.be.at.least(30);
   });
});

describe("stringLength", function(){
   	it("should be a length of 12", function(){
   	   var message = "Hello World!";

       expect(message).to.have.length(12);
   });
});

describe("equal", function(){
   	it("should equal", function(){
   		
		  var test = 'results';
		
		assert.equal(test, 'results', 'test equal `results`');
   });
});

describe("shouldBeAString", function(){
   	it("should be a string", function(){
   		
		  var test = 'personal';
		
		test.should.be.a('string');
   });
});

describe("subtraction", function(){
   	it("should give 10 as the difference", function(){
   	   var x = 20;
   	   var y = 11;

       expect(x-y).to.equal(10);
   });
});

describe("equal", function(){
   	it("should equal", function(){
   		
		  var a = 'results';
		
		assert.equal(a, 'result', 'a equal `result`');
   });
});

describe("shouldBeAString", function(){
   	it("should be a string", function(){
   		
		  var b = 2014;
		
		b.should.be.a('string');
   });
});