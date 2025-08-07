import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  User as FirebaseUser 
} from "firebase/auth";
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc,
  serverTimestamp 
} from "firebase/firestore";
import { auth, db } from "../config";
import { User, CreateUserData } from "./usersModel";

// Interface for login data we want to store
export interface LoginAttempt {
  email: string;
  timestamp: any; // Firestore timestamp
  success: boolean;
  userId?: string;
  errorMessage?: string;
}

// Sign in with email and password
export async function signInUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Log the successful login attempt
    await logLoginAttempt({
      email,
      timestamp: serverTimestamp(),
      success: true,
      userId: user.uid
    });
    
    return { user, error: null };
  } catch (error: any) {
    // Log the failed login attempt
    await logLoginAttempt({
      email,
      timestamp: serverTimestamp(),
      success: false,
      errorMessage: error.message
    });
    
    return { user: null, error: error.message };
  }
}

// Create a new user account
export async function createUser(userData: CreateUserData) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      userData.email, 
      userData.password
    );
    const firebaseUser = userCredential.user;
    
    // Create user document in Firestore
    const userDoc: User = {
      id: firebaseUser.uid,
      email: userData.email,
      password: userData.password, // Note: In production, don't store plain text passwords
      name: userData.name,
      socialSecurityNumber: userData.socialSecurityNumber,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    await setDoc(doc(db, "users", firebaseUser.uid), userDoc);
    
    return { user: firebaseUser, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
}

// Sign out user
export async function signOutUser() {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Get user data from Firestore
export async function getUserData(userId: string): Promise<User | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return userDoc.data() as User;
    }
    return null;
  } catch (error) {
    console.error("Error getting user data:", error);
    return null;
  }
}

// Log login attempts to Firestore
export async function logLoginAttempt(loginData: LoginAttempt) {
  try {
    await addDoc(collection(db, "loginAttempts"), loginData);
  } catch (error) {
    console.error("Error logging login attempt:", error);
  }
}

// Get current authenticated user
export function getCurrentUser(): FirebaseUser | null {
  return auth.currentUser;
} 