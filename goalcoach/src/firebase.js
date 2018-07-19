import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDWAbGSIQzZzSDqJyDDdwAVg0sawazl-5c",
    authDomain: "goalcoach-d2446.firebaseapp.com",
    databaseURL: "https://goalcoach-d2446.firebaseio.com",
    projectId: "goalcoach-d2446",
    storageBucket: "",
    messagingSenderId: "450472472305"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
