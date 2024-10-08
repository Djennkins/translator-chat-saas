'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Session } from 'next-auth';
import { signInWithCustomToken } from '@firebase/auth';
import { auth } from '@/firebase';

async function syncFirebaseAuth(session: Session) {
    if (session && session.firebaseToken) {
        try {
            await signInWithCustomToken(auth, session.firebaseToken);
        } catch (error) {
            console.error('Error signing in with custom token', error);
        }
    } else {
        auth.signOut();
        console.log('signedout');
    }
}

function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) return;
        console.log('session triggered');
        syncFirebaseAuth(session);
    }, [session]);

    return <>{children}</>;
}

export default FirebaseAuthProvider;
