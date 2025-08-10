import { db } from "@/config/firebase.config";
import LoaderPage from "@/routes/loader-page";
import { useAuth, useUser } from "@clerk/clerk-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        setLoading(true);
        try {
          const userRef = doc(db, "users", user.id);
          const userSnap = await getDoc(userRef);

          const userData = {
            id: user.id,
            name: user.fullName || user.firstName || "Anonymous",
            email: user.primaryEmailAddress?.emailAddress || "No Email",
            imageUrl: user.imageUrl,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          };

          // If user doesn't exist, create it; otherwise update the timestamp
          if (!userSnap.exists()) {
            await setDoc(userRef, userData);
          } else {
            await setDoc(
              userRef,
              { updatedAt: serverTimestamp() },
              { merge: true }
            );
          }
        } catch (error) {
          console.error("Error in AuthHandler:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    storeUserData();
  }, [isSignedIn, user, pathname, navigate]);

  if (loading) {
    return <LoaderPage />;
  }

  return null;
};

export default AuthHandler;
