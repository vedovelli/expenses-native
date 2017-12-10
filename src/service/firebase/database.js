
import * as firebase from 'firebase'
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
} from 'react-native-dotenv'

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
}

const connection = firebase.initializeApp(config)
const database = connection.database()

export default database
