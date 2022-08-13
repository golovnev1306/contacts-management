import { useCallback, useState } from 'react';

const useVisible = (): [boolean, VoidFunction, VoidFunction] => {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  return [
    visible,
    show,
    close,
  ]
}

export default useVisible;