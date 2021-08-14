import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from '../config';

const fb = firebase.initializeApp(config.firebase);

export const auth = fb.auth();
export const db = fb.database();
export default fb;



