import { useCallback, useMemo, useState } from 'react';

import { UseInputReturnType } from './types';

import { EMPTY_STRING } from 'constants/baseConstants';

export const useInput = (initialValue?: string): UseInputReturnType => {
  const [value, setValue] = useState(initialValue || EMPTY_STRING);

  const onChange = useCallback((newValue: string) => setValue(newValue), []);

  return useMemo(() => ({ value, onChange }), [value, onChange]);
};
