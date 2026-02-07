import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 50 },   // ramp up to 50 users
    { duration: "1m", target: 100 },    // ramp to 100 users
    { duration: "1m", target: 200 },    // ramp to 200 users
    { duration: "1m30s", target: 100 }, // ramp down to 100
    { duration: "30s", target: 0 },     // ramp down to 0
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95th percentile response < 500ms
    http_req_failed: ["rate<0.01"],   // error rate < 1%
  },
};

const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";

export default function () {
  const res = http.get(BASE_URL);

  check(res, {
    "status is 200": (r) => r.status === 200,
    "body contains Camp Stanley": (r) => r.body.includes("Camp Stanley"),
  });

  sleep(1);
}
