import { create } from 'zustand';

type ModuleTypes = {
    isNavOpen: boolean;
    navHeight: number;
    openNav: () => void;
    closeNav: () => void;
    setNavHeight: (height: number) => void;
}
const useModuelStore = create<ModuleTypes>((set) => ({
    isNavOpen: false,
    navHeight:0,
    setNavHeight: (height: number) => set({ navHeight: height }),
    openNav: () => set({ isNavOpen: true }),
    closeNav: () => set({ isNavOpen: false }),
})
);

export default useModuelStore;