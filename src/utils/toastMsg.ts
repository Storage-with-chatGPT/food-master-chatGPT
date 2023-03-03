import { toast } from 'react-toastify';

import { Toast } from '@/types';

export const showToastMessage = ({ message, type }: Toast) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      break;
    case 'warn':
      toast.warning(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case 'error':
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};
