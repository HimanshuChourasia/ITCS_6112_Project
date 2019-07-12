var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://172-31-25-230:3000");

// UNIT test begin

describe("Check the home page access",function(){

    // #1 should return home page
    it("should return home page",function(done){
        // calling home page
        server
            .get("/")
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                // HTTP status should be 200
                res.status.should.equal(200);
                done();
            });
    });

});