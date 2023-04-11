import { atom } from 'nanostores'

export const isMenuOpen = atom(false)
export const toggle = (): void => { isMenuOpen.set(!isMenuOpen.get()) }
