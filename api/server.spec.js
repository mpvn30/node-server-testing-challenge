const request = require("supertest");

const server = require("./server.js");

it("Check if db env is running on testing", function() {
    expect(process.env.DB_ENV).toBe("testing");
})