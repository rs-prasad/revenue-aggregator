let timeout: ReturnType<typeof setTimeout>;
export function debounce(cb: CallableFunction, delay = 300) {
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  };
}
