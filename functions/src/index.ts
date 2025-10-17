import {onRequest} from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp();

// Example function - you can add your cloud functions here
export const helloWorld = onRequest(
  {region: "us-west1"},
  (request, response) => {
    response.json({message: "Hello from Voto!"});
  }
);