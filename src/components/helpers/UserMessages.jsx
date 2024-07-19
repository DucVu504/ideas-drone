import { useIntl } from 'react-intl';

const useMessages = (namespace) => {
  const intl = useIntl();
  return (id, values = {}) => intl.formatMessage({ id: `${namespace}.${id}` }, values);
};

export default useMessages;
