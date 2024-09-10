'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserAvatar from '@/components/UserAvatar';
import { Session } from 'next-auth';
import { Button } from '@/components/ui/button';
import { signIn, signOut } from 'next-auth/react';

function UserButton({ session }: { session: Session | null }) {
    //Subscription listener

    if (!session)
        return (
            <Button variant="outline" onClick={() => signIn()}>
                Sign In
            </Button>
        );

    return (
        session && (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <UserAvatar image={session.user?.image} name={session.user?.name}></UserAvatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    );
}

export default UserButton;
