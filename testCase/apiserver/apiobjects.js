const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalvariable/baseUrl");

const url = baseUrl; //define global variable

async function getMethod() {
  const response = await request(url).get("/api/users?page=2");
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  console.log(response.body);
}

async function deletemethod() {
    const response = await request(url).delete("/api/users/2");
    //assertation / verifikasi
    expect(response.status).to.equal(204);
    console.log(response.body);
  }

async function postMethod() {
  const response = await request(url).post("/api/users")
    .send({
      name: "morpheus",
      job: "leader",

    });


  //assertation / verifikasi
  expect(response.status).to.equal(201);
  expect(response.body.name).to.equal("morpheus");

  console.log(response.body);
}

module.exports = { getMethod, postMethod, deletemethod };