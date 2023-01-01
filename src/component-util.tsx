import {ComponentProps, createElement, isValidElement as isElem,JSXElementConstructor, ComponentPropsWithRef, useEffect, useState, useRef, ChangeEventHandler, ReactElement, FunctionComponent, ReactNode} from "react"

// lodash-es version of flow works fine to 7 fns, then types break after.  This works up to 20 for more complex components.
export const flow = function<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T,>(
  ab: (...args:A)=>B,
  bc?: (x:B)=>C,
  cd?: (x:C)=>D,
  de?: (x:D)=>E,
  ef?: (x:E)=>F,
  fg?: (x:F)=>G,
  gh?: (x:G)=>H,
  hi?: (x:H)=>I,
  ij?: (x:I)=>J,
  jk?: (x:J)=>K,
  kl?: (x:K)=>L,
  lm?: (x:L)=>M,
  mn?: (x:M)=>N,
  no?: (x:N)=>O,
  op?: (x:O)=>P,
  pq?: (x:P)=>Q,
  qr?: (x:Q)=>R,
  rs?: (x:R)=>S,
  st?: (x:S)=>T,
) {
  // note that this implementation may be able to be faster with fn.apply.
  // See https://github.com/gcanti/fp-ts/blob/9da2137efb295b82fb59b7b0c2114f2ceb40a2b5/src/function.ts#L245
  switch (arguments.length) {
    case 1: return ab;
    case 2: return (...args:A)=>bc!(ab(...args));
    case 3: return (...args:A)=>cd!(bc!(ab(...args)));
    case 4: return (...args:A)=>de!(cd!(bc!(ab(...args))));
    case 5: return (...args:A)=>ef!(de!(cd!(bc!(ab(...args)))));
    case 6: return (...args:A)=>fg!(ef!(de!(cd!(bc!(ab(...args))))));
    case 7: return (...args:A)=>gh!(fg!(ef!(de!(cd!(bc!(ab(...args)))))));
    case 8: return (...args:A)=>hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args))))))));
    case 9: return (...args:A)=>ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args)))))))));
    case 10: return (...args:A)=>ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args)))))))));
    case 11: return (...args:A)=>jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args))))))))));
    case 12: return (...args:A)=>kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args)))))))))));
    case 13: return (...args:A)=>lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args))))))))))));
    case 14: return (...args:A)=>mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args)))))))))))));
    case 15: return (...args:A)=>no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args))))))))))))));
    case 16: return (...args:A)=>op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args)))))))))))))));
    case 17: return (...args:A)=>pq!(op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args))))))))))))))));
    case 18: return (...args:A)=>qr!(pq!(op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args)))))))))))))))));
    case 19: return (...args:A)=>rs!(qr!(pq!(op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args))))))))))))))))));
    case 20: return (...args:A)=>st!(rs!(qr!(pq!(op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab(...args)))))))))))))))))));
    default: return (...args:A)=>new Error('flow does not support over 20 functions yet');
  }
}

export const flowProps = <
  Cmp extends JSXElementConstructor<any> | keyof JSX.IntrinsicElements,
  A extends ComponentProps<Cmp>,
>(component: Cmp) =>
  function flowedProps<B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T,>(
  ab: (p:A)=>B,
  bc?: (p:B)=>C,
  cd?: (p:C)=>D,
  de?: (p:D)=>E,
  ef?: (p:E)=>F,
  fg?: (p:F)=>G,
  gh?: (p:G)=>H,
  hi?: (p:H)=>I,
  ij?: (p:I)=>J,
  jk?: (p:J)=>K,
  kl?: (p:K)=>L,
  lm?: (p:L)=>M,
  mn?: (p:M)=>N,
  no?: (p:N)=>O,
  op?: (p:O)=>P,
  pq?: (p:P)=>Q,
  qr?: (p:Q)=>R,
  rs?: (p:R)=>S,
  st?: (p:S)=>T,
):FunctionComponent<A> {
  switch (arguments.length) {
    case 1: return (props:A) => createElement(component,ab({...props}));
    case 2: return (props:A) => createElement(component,bc!(ab({...props})));
    case 3: return (props:A) => createElement(component,cd!(bc!(ab({...props}))));
    case 4: return (props:A) => createElement(component,de!(cd!(bc!(ab({...props})))));
    case 5: return (props:A) => createElement(component,ef!(de!(cd!(bc!(ab({...props}))))));
    case 6: return (props:A) => createElement(component,fg!(ef!(de!(cd!(bc!(ab({...props})))))));
    case 7: return (props:A) => createElement(component,gh!(fg!(ef!(de!(cd!(bc!(ab({...props}))))))));
    case 8: return (props:A) => createElement(component,hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props})))))))));
    case 9: return (props:A) => createElement(component,ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props}))))))))));
    case 10: return (props:A) => createElement(component,ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props}))))))))));
    case 11: return (props:A) => createElement(component,jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props})))))))))));
    case 12: return (props:A) => createElement(component,kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props}))))))))))));
    case 13: return (props:A) => createElement(component,lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props})))))))))))));
    case 14: return (props:A) => createElement(component,mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props}))))))))))))));
    case 15: return (props:A) => createElement(component,no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props})))))))))))))));
    case 16: return (props:A) => createElement(component,op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props}))))))))))))))));
    case 17: return (props:A) => createElement(component,pq!(op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props})))))))))))))))));
    case 18: return (props:A) => createElement(component,qr!(pq!(op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props}))))))))))))))))));
    case 19: return (props:A) => createElement(component,rs!(qr!(pq!(op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props})))))))))))))))))));
    case 20: return (props:A) => createElement(component,st!(rs!(qr!(pq!(op!(no!(mn!(lm!(kl!(jk!(ij!(hi!(gh!(fg!(ef!(de!(cd!(bc!(ab({...props}))))))))))))))))))));
    default: return (props:A)=><div>flowProps does not support over 20 props yet</div>;
  }
}

/**
 * mapValue appends a static value:  k => v => props => props[k] = v
 */
export const mapValue =
  <K extends string>(k: K) =>
    <P extends {[kk in K]?:unknown},V extends P[K]>(v: V) =>
      (props: P) => {
        props[k] = v
        return props as {[kk in K | keyof P]: kk extends K ? V : P[kk]}
      }

/**
 * mapThunk returns a value at runtime: k => fn => props => props[k]=fn()
 */
export const mapThunk =
  <K extends string>(key: K) =>
    <P extends {[k in K]?:unknown},V extends P[K]>(fn: () => V) =>
      (props:P)=>{
        props[key] = fn();
        return props as {[k in K | keyof P]: k extends K ? V : P[k]}
      }

/**
 * mapProps appends a fn that returns a value at runtime: k => fn => props=> props[k]=fn(props)
 * NOTE: Included for compatibility. Avoid using this when possible.
 * It encourages stateful components vs keeping app state in an external graph.
 */
export const mapProps =
  <K extends string>(key: K) =>
    <P extends {[k in K]?:unknown},V extends P[K]>(fn: (props:P) => V) =>
      (props:P)=>{
        props[key] = fn(props);
        return props as {[k in K | keyof P]: k extends K ? NonNullable<V> : P[k]}
      }


// Events: Partial list from https://reactjs.org/docs/events.html#supported-events. Add others as needed.
/* c8 ignore next 40 */
export const onKeyDown = mapValue('onKeyDown');
export const onKeyUp = mapValue('onKeyUp');
export const onKeyPress = mapValue('onKeyPress');
export const onHover = mapValue('onHover');
export const onFocus = mapValue('onFocus');
export const onBlur = mapValue('onBlur');
export const onChange = mapValue('onChange');
export const onInput = mapValue('onInput');
export const onInvalid = mapValue('onInvalid');
export const onReset = mapValue('onReset');
export const onSubmit = mapValue('onSubmit');
export const onClick = mapValue('onClick');
export const onContextMenu = mapValue('onContextMenu');
export const onDoubleClick = mapValue('onDoubleClick');
export const onDrag = mapValue('onDrag');
export const onDragEnd = mapValue('onDragEnd');
export const onDragEnter = mapValue('onDragEnter');
export const onDragExit = mapValue('onDragExit');
export const onDragLeave = mapValue('onDragLeave');
export const onDragOver = mapValue('onDragOver');
export const onDragStart = mapValue('onDragStart');
export const onDrop = mapValue('onDrop');
export const onPointerEnter = mapValue('onPointerEnter');
export const onPointerLeave = mapValue('onPointerLeave');
export const onPointerOver = mapValue('onPointerOver');
export const onPointerOut = mapValue('onPointerOut');
export const onPointerDown = mapValue('onPointerDown');
export const onPointerMove = mapValue('onPointerMove');
export const onPointerUp = mapValue('onPointerUp');
export const onPointerCancel = mapValue('onPointerCancel');
export const onGotPointerCapture = mapValue('onGotPointerCapture');
export const onLostPointerCapture = mapValue('onLostPointerCapture');
export const onSelect = mapValue('onSelect');
export const onScroll = mapValue('onScroll');
export const onLoad = mapValue('onLoad');
export const onError = mapValue('onError');
export const onAnimationStart = mapValue('onAnimationStart');
export const onAnimationEnd = mapValue('onAnimationEnd');
export const onAnimationIteration = mapValue('onAnimationIteration');
export const onTransitionEnd = mapValue('onTransitionEnd');

// Values
export const checked = mapThunk('checked');
/**
 * children: add children prop to component - supports values and functions.
 */
const childrenThunk = mapThunk('children');
export const children = <N extends ReactNode|ReactNode[],FN extends ()=>ReactNode|ReactNode[]>(...v:(N|FN)[]) =>
  // use thunk so that hook values can be children
  childrenThunk(()=>v.flatMap(child => typeof child === 'function' ? child() : child)) as <
    P extends {children?:unknown}
  >(props:P) => {[k in keyof P | 'children']:k extends 'children' ? ReactNode[] : P[k]}
  
export const className = mapThunk('className');
export const id = mapThunk('id');
export const title = mapThunk('title');
export const style = mapThunk('style');
export const value = mapThunk('value');

// Element Property Value selectors
export const fromEventValue = ({target:{value}}:{target:{value:string}})=>value;
export const fromEventKey = ({key}:{key:string})=>key;

// Elements
export const Input = flowProps('input');
export const Div = flowProps('div');
export const Button = flowProps('button');
export const Span = flowProps('span');