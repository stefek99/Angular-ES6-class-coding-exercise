let auth = ($firebaseAuth) => {
  return $firebaseAuth(firebase.auth());
};

export default auth;