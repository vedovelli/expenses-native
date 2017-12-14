
import Firebase from 'firebase'

const signin = (email, password) => {
  Firebase.auth().signInWithEmailAndPassword(email, password)
}

export default {
  signin
}
