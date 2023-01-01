import { create } from "./datagraph-util";

export const [useFoo, toFoo] = create(()=>'foo');
export const [useCount, toCount, fromCount] = create(()=>0);