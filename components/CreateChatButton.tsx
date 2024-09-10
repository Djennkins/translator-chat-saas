'use client';

import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

function CreateChatButton() {
    const router = useRouter();

    const createNewChat = async () => {
        // all the logic here...

        router.push('/chat/abc');
    };

    return (
        <Button variant="outline" onClick={createNewChat}>
            <MessageSquarePlus />
        </Button>
    );
}

export default CreateChatButton;
