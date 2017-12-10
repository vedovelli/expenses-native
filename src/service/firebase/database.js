
import * as firebase from 'firebase'

/**
* see .env.example
*/
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
} from 'react-native-dotenv'

const connection = firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
})

export default connection.database()
