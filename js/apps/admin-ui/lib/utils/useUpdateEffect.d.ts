import { DependencyList, EffectCallback } from 'react';

/**
 * A `useEffect` hook that only triggers on updates, not on initial render.
 */
export declare function useUpdateEffect(effect: EffectCallback, deps?: DependencyList): void;
