import ChatList from '@/components/ChatList';

type Props = {
    params: {};
    searchParams: {
        error: string;
    };
};

function ChatPage({ searchParams: { error } }: Props) {
    return (
        <div>
            {/*    Chat Permission Chat*/}
            {/*    Chat List*/}
            <ChatList />
        </div>
    );
}

export default ChatPage;
