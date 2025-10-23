import { expect, test, vi, describe, beforeEach } from 'vitest';
import CartListLocalStorage from '../../../js/CartListManager/providers/CartListProviderLocalStorage';
import { mockedData } from '../mockedData';

const STORAGE_KEY = 'ITAcademy/shopping-cart';
const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

describe ('CartList Provider Local storage', () => {
  beforeEach(() => {
    getItemSpy.mockClear();
    setItemSpy.mockClear();
    localStorage.clear();
  });

  test('get with no previous data in localstorage', () => {
    const provider = new CartListLocalStorage();
    const localStorageData = '';

    getItemSpy.mockReturnValue(localStorageData);
    const data = provider.getCartList();

    expect(getItemSpy).toHaveBeenCalledWith(STORAGE_KEY);
    expect(data).toStrictEqual([]);
  });

  test('get', () => {
    const provider = new CartListLocalStorage();
    const localStorageData = JSON.stringify(mockedData);
    getItemSpy.mockReturnValue(localStorageData);
    const data = provider.getCartList();

    expect(getItemSpy).toHaveBeenCalledWith(STORAGE_KEY);
    expect(data).toStrictEqual(JSON.parse(localStorageData));
  });

  test('set', () => {
    const provider = new CartListLocalStorage();

    provider.setCartList(mockedData);

    expect(setItemSpy).toHaveBeenCalledWith(STORAGE_KEY, JSON.stringify(mockedData));
  });
})

