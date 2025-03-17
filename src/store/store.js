import {create} from 'zustand'

const useNewProductTab = create((set) => ({
    tab : '여성 신상품',
    setTab : (tabname) => set({tab :  tabname})
}))

const viewToggle = create((set) => ({
    view : 'two',
    setView : (view) => set({view})
}))

export default useNewProductTab;