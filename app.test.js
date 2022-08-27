const request = require("supertest");
const { describe, expect, test } = require("@jest/globals");
const app = require("./app");

describe("app", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      // .expect((res) => {
      //   res.json({ msg: "Hello there....." });
      // })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  // More things come here
});
