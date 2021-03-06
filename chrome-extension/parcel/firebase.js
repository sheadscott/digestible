import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import { config } from "./config";:webkitCancelAnimationFrame

export default (yelpId, facility_id, found) => {

  firebase.initializeApp(config);

  const database = firebase.database();

  const ref = database.ref(yelpId);
  ref.orderByChild("found").on("child_added", function(snapshot) {
    console.log(snapshot.key, snapshot.val());
  });
  ref.set({
    facility_id: facility_id,
    found: found
  });
};
