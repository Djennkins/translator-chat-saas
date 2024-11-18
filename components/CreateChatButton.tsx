'use client';

import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useSubscriptionStore } from '@/store/store';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useToast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';

function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
    const router = useRouter();
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const subscription = useSubscriptionStore((state) => state.subscription);

    const createNewChat = async () => {
        if (!session?.user?.id) return;

        setLoading(true);
        toast({
            title: 'Creating new chat...',
            description: 'Hold tight while we create your new chat...',
            duration: 3000,
        });

        // TODO check if ueser is pro and limit them creatine a new chat
        // ...
        // ---

        const chatId = uuidv4();

        router.push('/chat/abc');
    };

    if (isLarge) {
        return (
            <div>
                <Button variant="default" onClick={createNewChat}>
                    {loading ? <LoadingSpinner /> : 'Create a New Chat'}
                </Button>
            </div>
        );
    }

    return (
        <Button variant="ghost" onClick={createNewChat}>
            <MessageSquarePlus />
        </Button>
    );
}

export default CreateChatButton;
