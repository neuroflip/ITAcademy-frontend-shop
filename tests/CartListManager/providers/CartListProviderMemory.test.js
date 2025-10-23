import { expect, test, describe } from 'vitest';
import CartListMemory from '../../../js/CartListManager/providers/CartListProviderMemory';
import { mockedData } from '../mockedData';

describe ('CartList Provider Memory', () => {
  test('get with no previous data', () => {
    const provider = new CartListMemory();
    const data = provider.getCartList();

    expect(data).toStrictEqual([]);
  });

  test('get with previous data in memory', () => {
    const provider = new CartListMemory();

    provider.cartList = mockedData;
    const data = provider.getCartList();

    expect(data).toStrictEqual(data);
  });

  test('set', () => {
    const provider = new CartListMemory();

    provider.setCartList(mockedData);

    expect(provider.cartList).toStrictEqual(mockedData);
  });
})

