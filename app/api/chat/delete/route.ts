import { adminFirestore } from '@/firebase-admin';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
    const { chatId } = await req.json();

    const ref = adminFirestore.collection('chats').doc(chatId);

    const bulkWriter = adminFirestore.bulkWriter();
    const MAX_RETRY_ATTEMPTS = 5;

    bulkWriter.onWriteError((error) => {
        if (error.failedAttempts < MAX_RETRY_ATTEMPTS) {
            return true;
        } else {
            console.log('Failed write at document: ', error.documentRef.path);
            return false;
        }
    });

    try {
        await adminFirestore.recursiveDelete(ref, bulkWriter);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Promise rejected: ', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
