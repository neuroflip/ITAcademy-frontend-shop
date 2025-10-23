import { expect, test, vi, describe } from 'vitest';
import CartListManager from '../../js/CartListManager/CartListManager';
import CartListMemory from '../../js/CartListManager/providers/CartListProviderMemory';
import { mockedData } from './mockedData'

vi.mock('../../js/CartListManager/providers/CartListProviderMemory', () => ({
    default: vi.fn(class FakeClass {
      getCartList = vi.fn(() => mockedData)
      setCartList = vi.fn()
    })
  }));

describe ('CartListManager', () => {
  test('getCardList', () => {
    const cartListManager = new CartListManager(new CartListMemory());
    const data = cartListManager.getCartList();

    expect(data).toStrictEqual(mockedData);
  });

  test('setCartList', () => {
    const cartListManager = new CartListManager(new CartListMemory());
    
    cartListManager.setCartList(mockedData);

    expect(cartListManager.provider.setCartList).toHaveBeenCalledWith(mockedData);
  });
})

