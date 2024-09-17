// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Request]({
    name: "get-user-by-id",
    id: "700b3d81-65a7-4263-8287-2e3e6ed29514",
    method: "GET",
    address: "https://reqres.in/api/users/2",
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });

      pm.test("Response time is less than 200ms", function() {
        pm.expect(pm.response.responseTime).to.be.below(50);
      });
    }
  });
}
