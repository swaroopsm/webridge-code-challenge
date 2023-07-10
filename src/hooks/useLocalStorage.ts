const noop = () => undefined;

export function useLocalStorage(key: string) {
  const available = Boolean(window.localStorage);

  return {
    available,
    setItem: available
      ? (value: string) => window.localStorage.setItem(key, value)
      : noop,
    getItem: available ? () => window.localStorage.getItem(key) : noop,
  };
}
