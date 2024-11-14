'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { subscriptionRef } from '@/lib/converters/Subscription';
import { onSnapshot } from '@firebase/firestore';

function SubscriptionProvider() {
    const { data: session } = useSession();

    useEffect(() => {
        if (!session) return;

        return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
            if (snapshot.empty) {
                console.log('User has NO subscription.');
                return;
            } else {
                console.log('User has subscription.');

                //set Subscription
            }
        });
    }, [session]);

    return <div>Subscription Provider</div>;
}

export default SubscriptionProvider;
