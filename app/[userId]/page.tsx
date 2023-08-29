"use client";
import React, { useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  getFirestore,
  query,
  where,
  DocumentData
} from "firebase/firestore";
import UserProfile from "../components/UserProfile";
import PinList from "../components/Pins/PinList";

interface UserData {
    email: string;
    userImage: string;
    userName: string;
  }

  interface ProfileProps {
    params: {
      userId: string;
    };
  }
  

const Profile: React.FC<ProfileProps> = ({ params }) => {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState<UserData | undefined>(undefined);
  const [listOfPins, setListOfPins] = useState<DocumentData[]>([]);
  useEffect(() => {
    console.log(params.userId.replace("%40", "@"));
    if (params) {
      getUserInfo(params.userId.replace("%40", "@"));
    }
  }, [params]);

  const getUserInfo = async (email: string) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const userData = docSnap.data() as UserData;
        setUserInfo(userData);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(()=> {
      if(userInfo){
      getUserPins()
      }
  }, [userInfo])
  const getUserPins=async()=> {
      const q = query(collection(db, 'pinterest-post'), where("email", "==", userInfo?.email))
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc)=> {
          console.log(doc.id, "=>", doc.data())
          setListOfPins(listOfPins=> [...listOfPins, doc.data()])
      })

  }

  return (
    <div>
      {userInfo ? <UserProfile userInfo={userInfo}/> : null}
      <PinList listOfPins = {listOfPins}/>
    </div>
  );
};

export default Profile;
