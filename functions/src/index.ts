import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// Example function - you can add your cloud functions here
export const helloWorld = functions.https.onRequest((request, response) => {
  response.json({message: "Hello from Voto!"});
});