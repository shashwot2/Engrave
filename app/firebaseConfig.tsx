import { getFireBaseConfig } from '@/hooks/useFirebase';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFunctions, Functions } from 'firebase/functions';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const app = getApps().length === 0 ? initializeApp(getFireBaseConfig()) : getApps()[0];

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firebase Functions only after Firebase App is initialized
const functions: Functions = getFunctions(app);

export { app, auth, functions };
