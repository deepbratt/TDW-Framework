import firebase from "../../firebase-config";

const socialMediaAuth = (provider: any) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      return error;
    });
};

export default socialMediaAuth;
