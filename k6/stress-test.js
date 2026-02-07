import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 500 },    // ramp up to 500 users
    { duration: "2m", target: 1000 },   // ramp to 1000 users
    { duration: "2m", target: 1500 },   // ramp to 1500 users (stress)
    { duration: "2m", target: 0 },      // ramp down to 0
  ],
  thresholds: {
    http_req_duration: ["p(99)<2000"], // 99th percentile < 2s
    http_req_failed: ["rate<0.05"],    // error rate < 5%
  },
};

const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";

export default function () {
  const res = http.get(BASE_URL);

  check(res, {
    "status is 200": (r) => r.status === 200,
    "body contains Camp Stanley": (r) => r.body.includes("Camp Stanley"),
    "response time < 2s": (r) => r.timings.duration < 2000,
  });

  sleep(0.5);
}
