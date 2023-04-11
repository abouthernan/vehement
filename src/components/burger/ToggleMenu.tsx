import styles from './toggleMenu.module.css'
import { useStore } from '@nanostores/react';
import { toggle, isMenuOpen } from '../../stores/menuStore'

export function ToggleMenu() {
  const $isMenuOpen = useStore(isMenuOpen)
  return (
    <button
      className={`${styles.burger} ${$isMenuOpen ? 'burger-active' : ''}`}
      type="button"
      aria-label="Toggle menu"
      title="Toggle menu"
      onClick={toggle}
    >
      <span className={styles.burger__span1} />
      <span className={styles.burger__span2} />
    </button>
  );
}
