import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import ChatInput from '@/components/ChatInput';
import { sortedMessagesRef } from '@/lib/converters/Message';
import { getDocs } from '@firebase/firestore';
import ChatMessages from '@/components/ChatMessages';
import ChatMembersBadges from '@/components/ChatMembersBadges';

type Props = {
    params: {
        chatId: string;
    };
};

async function ChatPage({ params: { chatId } }: Props) {
    const session = await getServerSession(authOptions);

    const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map((doc) =>
        doc.data()
    );

    return (
        <>
            <ChatMembersBadges chatId={chatId} />
            <div className="flex-1">
                <ChatMessages chatId={chatId} session={session} initialMessages={initialMessages} />
            </div>

            <ChatInput chatId={chatId} />
        </>
    );
}

export default ChatPage;
