'use client';

import { useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';
import { subscriptionRef } from '@/lib/converters/Subscription';
import { onSnapshot } from '@firebase/firestore';
import { useSubscriptionStore } from '@/store/store';

function SubscriptionProvider({ children }: { children: ReactNode }) {
    const { data: session } = useSession();
    const setSubscription = useSubscriptionStore((state) => state.setSubscription);

    useEffect(() => {
        if (!session) return;

        return onSnapshot(
            subscriptionRef(session?.user.id),
            (snapshot) => {
                if (snapshot.empty) {
                    console.log('User has NO subscription.');
                    setSubscription(null);
                    return;
                } else {
                    console.log('User has subscription.');
                    setSubscription(snapshot.docs[0].data());
                }
            },
            (error) => {
                console.error('error');
            }
        );
    }, [session, setSubscription]);

    return <div>{children}</div>;
}

export default SubscriptionProvider;
