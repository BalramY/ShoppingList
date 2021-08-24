import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: ' AAAAjlqsCzw:APA91bEadhjsVu9yxrKxrOnTyK3gPfRbCKhfH5FQ-CpdNy5ze-1J5KAzyLqNcJd9nUsAxjpBfUuy6bNm_j4OM4DKDFgzhIYjWjDpC50XzH8AW-7rx9vPdtbQMgmkRCr1yTg1p9X1CKB0',
    authDomain: 'shoppinglist-4ed11.firebaseapp.com',
    databaseURL: 'https://shoppinglist-4ed11-default-rtdb.firebaseio.com/',
    projectId: 'shoppinglist-4ed11',
    storageBucket: 'shoppinglist-4ed11.appspot.com',
    appId: '1:611406580540:android:810742a5f1412e782cac39',
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app(); // if already initialized, use that one
}

export default firebase;
