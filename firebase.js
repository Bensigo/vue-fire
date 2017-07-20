import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDpKhk2rtU1bAdpXQi4Qo6xNcd_XRIKsBE',
  authDomain: 'vue-pwa-b78ef.firebaseapp.com',
  databaseURL: ' https://vue-pwa-b78ef.firebaseio.com',
  projectId: 'vue-pwa-b78ef',
  storageBucket: 'vue-pwa-b78ef.appspot.com',
  messagingSenderId: '142147013788'

}

const fire = firebase.initailizeApp(config)
export default fire
