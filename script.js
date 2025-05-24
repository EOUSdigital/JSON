//TODO 📦 Module 3 - Lesson 09.02: JSON for Beginners - Challenges

//TODO  🌍 Real-World JSON + API Simulations

//* ✅ What You’ll Practice:

//? Topic                               What You’ll Do
//  📨 Sending data                     Simulate sending user input to an API
//  📥 Receiving data                   Parse and use API responses
//  🛠️ Handling nested JSON             Work with structured API payloads
//  🚨 Failing safely                   Simulate errors, missing fields, nulls

//* ✅ POST to API

// A user filled out the following form:

const formData = {
    name: "Jordan",
    email: "jordan@example.com",
    subscribed: true
};

//  Send this data to an API at /api/subscribe.

//? 🧠 Task:
//  1. Convert formData to a JSON string.
//  2. Simulate sending it via fetch() (just log the payload)
//  3. Simulate a response from the server:
//  {
//      "status": "success",
//      "userId": 301
//  }
//  4. Parse and log the message:
//* User subscribed! ID: 301

//! Solution

//* Step 1. Convert formData to a JSON string.
const jsonPayload = JSON.stringify(formData);

//* Step 2. Simulate sending it via fetch() (just log the payload)
console.log("Simulating fetch() POST request to /api/subscribe with payload:");
console.log(jsonPayload);

//* Step 3. Simulate a response from the server:
const simulatedResponse = {
    status: "success",
    userId: 301
};

//* Step 4. Parse and log the message:
if (simulatedResponse.status === "success") {
    console.log(`User subscribed! ID: ${simulatedResponse.userId}`);
} else {
    console.log("Subscription failed.");
};

