'use server';

import Stripe from 'stripe';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { headers } from 'next/headers';
import { adminFirestore } from '@/firebase-admin';
import { redirect } from 'next/navigation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-10-28.acacia',
});

export async function generatePortalLink() {
    const session = await getServerSession(authOptions);
    const host = headers().get('host');

    if (!session?.user.id) return console.error('No user found.');

    const {
        user: { id },
    } = session;

    const returnUrl =
        process.env.NODE_ENV === 'development'
            ? `http://${host}/register`
            : `https://${host}/register`;

    const doc = await adminFirestore.collection('customers').doc(id).get();

    if (!doc.data) return console.error('No customer record found withId', id);

    const stripeId = doc.data()!.stripeId;

    const stripeSession = await stripe.billingPortal.sessions.create({
        customer: stripeId,
        return_url: returnUrl,
    });

    redirect(stripeSession.url);
}
