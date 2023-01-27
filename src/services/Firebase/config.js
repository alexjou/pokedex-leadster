import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

export let fireAuth;
export let fireStore;
export let fireStorage;

export let FbProvider;
export let GlugluProvider;
export let persistenceProvider;
export let EmailAuthProvider;

export let FieldValue;

export const setFirebaseVariables = (config) => {
  if (config.auth) {
    fireAuth = config.auth;
  }
  if (config.store) {
    fireStore = config.store;
  }
  if (config.storage) {
    fireStorage = config.storage;
  }
  if (config.FieldValue) {
    FieldValue = config.FieldValue;
  }
};

export const initializeFirebase = async (firebaseConfig) => {
  try {
    if (!firebase?.apps?.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    const firestore = firebase.firestore();

    const firebaseVariables = {
      auth: firebase.auth(),
      store: firebase.firestore(),
      storage: firebase.storage(),
      FieldValue: firestore.FieldValue,
    };
    setFirebaseVariables(firebaseVariables);

    FbProvider = auth.FacebookAuthProvider;
    GlugluProvider = auth.GoogleAuthProvider;
    persistenceProvider = auth.Auth;
    EmailAuthProvider = auth.EmailAuthProvider;
    return true;
  } catch (e) {
    console.warn("error: ", e.message);
    return false;
  }
};
