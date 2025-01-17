import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  User
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  Firestore 
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { UserData } from '@/hooks/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyASs0LXGTm1aRu5lEVz1z9q0gGImqQFBk4",
  authDomain: "fun4eng-virtual-lab.firebaseapp.com",
  projectId: "fun4eng-virtual-lab",
  storageBucket: "fun4eng-virtual-lab.firebasestorage.app",
  messagingSenderId: "1050844988722",
  appId: "1:1050844988722:web:c2a6d3c92c4e53c189832b",
  measurementId: "G-9ZFZBPVXC3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export function useFirebase() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string): Promise<User> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userData: UserData = {
        email,
        displayName: "User",
        module: {
          module1: {
            currentSection: "Not learned yet",
            progress: "0%",
          },
          module2: {
            currentSection: "Not learned yet",
            progress: "0%",
          },
          module3: {
            currentSection: "Not learned yet",
            progress: "0%",
          },                    
        },
        quizScores: {
          overallScore: null,
          quiz1: null,
          quiz2: null,
          quiz3: null,
        }
      };
      await setDoc(doc(db, "users", userCredential.user.uid), userData);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  const logIn = async (email: string, password: string): Promise<User> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  const logOut = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  const getUserData = async (userId: string): Promise<UserData> => {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as UserData;
      } else {
        throw new Error("No such document!");
      }
    } catch (error) {
      throw error;
    }
  };

  const updateUserData = async (userId: string, data: Partial<UserData>): Promise<void> => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, data);
    } catch (error) {
      throw error;
    }
  };

  return { user, signUp, logIn, logOut, getUserData, updateUserData };
}

