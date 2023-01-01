import { useSyncExternalStore } from 'react';
import zcreate from 'zustand/vanilla';
import zcreater from 'zustand';

type Create = <V>(fn:()=>V) =>[ ()=>V, (v:V)=>void, ()=>V ];
export const create:Create = fn => {
  const { getState, setState, subscribe } = zcreate(fn);
  const useLocalState = () => useSyncExternalStore(subscribe, getState, getState);
  return [useLocalState, v => setState(v, true), getState];
}
