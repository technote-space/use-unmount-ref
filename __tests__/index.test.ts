import {renderHook} from '@testing-library/react-hooks';
import useUnmountRef from '../src';

describe('useUnmountRef', () => {
  it('should add number', () => {
    const {result, unmount} = renderHook(() => useUnmountRef());

    expect(result.current.current).toBe(false);

    unmount();

    expect(result.current.current).toBe(true);
  });
});
