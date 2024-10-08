'use client';

import { useSession } from 'next-auth/react';

function CheckoutButton() {
    const { data: session } = useSession();

    const createCheckoutSession = () => {
        if (!session) return;
        //push a doc into firestore db
        //... stripe extension on firebase will create a checkout session
        // redirect user to check out page
    };

    return (
        <div className="flex flex-col space-y-2">
            {/*If subscribed show me the user is subscribed*/}
            <button
                onClick={() => createCheckoutSession()}
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold
								leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
								focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80">
                Sign Up
            </button>
        </div>
    );
}

export default CheckoutButton;
