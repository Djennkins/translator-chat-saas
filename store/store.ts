import { create } from 'zustand';
import { Subscription } from '@/types/Subscription';

export type LanguagesSupported =
    | 'en'
    | 'de'
    | 'fr'
    | 'es'
    | 'hi'
    | 'ja'
    | 'la'
    | 'uk'
    | 'zh'
    | 'ar';

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
    en: 'English',
    de: 'German',
    fr: 'French',
    es: 'Spanish',
    hi: 'Hindi',
    ja: 'Japanese',
    la: 'Latin',
    zh: 'Mandarin',
    ar: 'Arabic',
    uk: 'Ukrainian',
};

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
