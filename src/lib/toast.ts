export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'error' | 'info';
}

export function showToast(text: string, type: 'success' | 'error' | 'info' = 'success') {
  const event = new CustomEvent('rateit-toast', {
    detail: { id: `t-${Date.now()}-${Math.random()}`, text, type },
  });
  window.dispatchEvent(event);
}
