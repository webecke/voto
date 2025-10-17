# Voto

A simple, easy web app to let friends make quick group decisions.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Firebase Firestore + Cloud Functions
- **Hosting**: Firebase Hosting

## Project Structure

```
voto/
├── client/          # React frontend application
│   └── src/
│       └── firebase.ts  # Firebase client configuration
├── functions/       # Firebase Cloud Functions
│   └── src/
│       └── index.ts     # Cloud Functions entry point
├── firebase.json    # Firebase configuration
├── firestore.rules  # Firestore security rules
└── firestore.indexes.json  # Firestore indexes
```

## Setup

### Prerequisites

- Node.js (v20 or later recommended)
- Firebase CLI: `npm install -g firebase-tools`

### Installation

1. Clone the repository and install dependencies:

```bash
# Install client dependencies
cd client
npm install

# Install functions dependencies
cd ../functions
npm install
```

2. Set up Firebase:

```bash
# Login to Firebase
firebase login

# Update .firebaserc with your project ID
# Or use: firebase use --add
```

3. Configure environment variables:

```bash
# In the client directory, copy .env.example to .env
cd client
cp .env.example .env

# Update .env with your Firebase configuration values
```

### Development

```bash
# Run the client development server
cd client
npm run dev

# Build and run Cloud Functions locally
cd functions
npm run serve
```

### Deployment

```bash
# Build and deploy everything
firebase deploy

# Deploy only functions
firebase deploy --only functions

# Deploy only hosting
firebase deploy --only hosting
```

## Getting Firebase Configuration

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Go to Project Settings > General
4. Scroll down to "Your apps" and add a web app if you haven't already
5. Copy the configuration values to your `client/.env` file

## Security Rules

The default Firestore rules allow all reads and writes. Update `firestore.rules` with appropriate security rules for your application before deploying to production.
