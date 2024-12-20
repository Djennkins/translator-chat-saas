import Logo from '@/components/Logo';
import DarkModeToggle from '@/components/DarkModeToggle';
import UserButton from '@/components/UserButton';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { MessagesSquareIcon } from 'lucide-react';
import CreateChatButton from '@/components/CreateChatButton';
import UpgradeBanner from '@/components/UpgradeBanner';
import LanguageSelect from '@/components/LanguageSelect';

async function Header() {
    const session = await getServerSession();
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
            <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
                <Logo />
                <div className="flex-1 flex items-center justify-end space-x-4">
                    <LanguageSelect />
                    {session ? (
                        <>
                            <Link href="/chat" prefetch={false}>
                                <MessagesSquareIcon />
                            </Link>
                            <CreateChatButton />
                        </>
                    ) : (
                        <Link href="/pricing" prefetch={false}>
                            Pricing
                        </Link>
                    )}
                    <DarkModeToggle />
                    <UserButton session={session}></UserButton>
                </div>
            </nav>
            <UpgradeBanner />
        </header>
    );
}

export default Header;
