import { useEffect, useState } from 'react';
import zcreate from 'zustand/vanilla';

type Create = <V>(fn:()=>V) =>[ ()=>V, (v:V)=>void, ()=>V ];
export const create:Create = fn => {
  const { getState, setState, subscribe } = zcreate(fn);
  const useLocalState = ()=>{
    const [state, setLocal] = useState(getState());
    useEffect(()=>subscribe(setLocal),[]);
    return state;
  }
  return [useLocalState, setState, getState];
}