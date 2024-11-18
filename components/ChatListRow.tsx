'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { limitedSortedMessagesRef, Message } from '@/lib/converters/Message';

function ChatListRow({ chatId }: { chatId: string }) {
    const [messages, loading, error] = useCollectionData<Message>(limitedSortedMessagesRef(chatId));

    return <div>ChatListRow</div>;
}

export default ChatListRow;
