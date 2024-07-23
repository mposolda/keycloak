/**
 * A hook that allows you toggle a boolean value, useful for toggle buttons, showing and hiding modals, etc.
 *
 * @param initialValue The initial value to use, false by default.
 */
export default function useToggle(initialValue?: boolean): readonly [boolean, () => void, import('react').Dispatch<import('react').SetStateAction<boolean>>];
