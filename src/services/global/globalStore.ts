import {create} from "zustand/react";

interface BearState {
    bears : number,
    food :string,
    isShow : boolean
    feed : (food : string) => void,
    increase : (bears : number) => void,
    setShow : (state : boolean) => void
}

const globalStore = create<BearState>()((set) => ({
        bears: 1,
        food: 'honey',
        isShow : false,
        feed: (food) => set(() => ({food})),
        increase : (bears) => set(()=>({bears : bears +1})),
        setShow : (state) => set(()=>({isShow : state}))
}))

export default globalStore;
