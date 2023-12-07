import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import Sushi from '../Sushi.ts';

interface Item {
    count: number;
    id: number;
    name: string;
    price: number;
    img: string;
    first: string;
    second: string;
    third: string;
}

interface ShopStore {
    items: Item[];
    incValue: (id: number) => void;
    decValue: (id: number) => void;
}

const allItems = Sushi.map((v) => ({ ...v, count: 0 }));

export const useShopStore = create<ShopStore>()(persist((set, get) => ({
    items: allItems,
    incValue: (id: number) => {
        const { items } = get();
        set({
            items: items.map((item) => ({
                ...item,
                count: item.id === id ? item.count + 1 : item.count,
            })),
        });
    },
    decValue: (id: number) => {
        const { items } = get();
        set({
            items: items.map((item) => ({
                ...item,
                count: item.id === id && item.count > 0 ? item.count - 1 : item.count,
            })),
        });
    },
}),
        {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
));
    export default useShopStore;