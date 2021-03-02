import type {MutableRefObject} from 'react';
import {useRef, useEffect} from 'react';

const useUnmountRef = (): MutableRefObject<boolean> => {
  const unmountRef = useRef(false);

  useEffect(
    () => () => {
      unmountRef.current = true;
    },
    [],
  );

  return unmountRef;
};

export default useUnmountRef;
