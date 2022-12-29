import { useEffect, useState } from 'react';
import create,{StoreApi} from 'zustand/vanilla';
const getterToHookThunk=<V,>(
  getter:StoreApi<V>['getState'],
  subscriber:StoreApi<V>['subscribe']
)=>()=>{
  const [foo, setLocalFoo] = useState(getter());
  useEffect(()=>subscriber(setLocalFoo),[]);
  return foo;
}


const { getState:getFoo, setState:setFoo, subscribe:subFoo } = create(()=>'foo');
export const [useFoo,toFoo]=[getterToHookThunk(getFoo,subFoo),setFoo]

const { getState:getCount_, setState:setCount, subscribe:subCount } = create(()=>0);
export const [useCount,toCount,fromCount]=[getterToHookThunk(getCount_,subCount),setCount,getCount_];