const localStorage = window.localStorage;

export const setItem = (key, value) =>
  new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      resolve(value);
    } catch (e) {
      reject(e);
    }
  });

export const removeItem = (key) =>
  new Promise((resolve, reject) => {
    try {
      localStorage.removeItem(key);
      resolve();
    } catch (e) {
      reject(e);
    }
  });

export const removeItems = (key) => Promise.all(key.map((k) => removeItem(k)));

export const getItem = (key) =>
  new Promise((resolve, reject) => {
    try {
      const serializedValue = localStorage.getItem(key);
      resolve(JSON.parse(serializedValue));
    } catch (e) {
      reject(e);
    }
  });
