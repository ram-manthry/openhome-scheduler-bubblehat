/**
 * Created by John on 20/09/2014.
 */
var assert = require('assert');
var should = require('should');

describe("A Feature",function(){
    describe("A Scenario",function(){
        it("should return elements when present",function(){
            [].length.should.be.greaterThan(0);
        });
    });
});

describe("Retrieve Open Homes", function() {
   describe("Watchlist is empty", function() {
       it("Should return empty list", function() {

       })
   })
   describe("Watchlist contains Open Homes only", function() {
       it("Should return exact watch list", function() {

       })
   })
   describe("Watchlist contains Open Homes and other item types", function() {
       it("Should return Open Homes and no other types", function() {

       })
   })
});

describe("Display times of locations", function() {
    describe("")
})