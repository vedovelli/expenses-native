
import axios from 'axios'
import { bitvalor_endpoint } from 'react-native-dotenv'

const foxbit = () => {
  return axios.get(bitvalor_endpoint)
}

export default {
  foxbit
}
