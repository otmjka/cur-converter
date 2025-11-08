import type { CurrencyListResponse } from '@/shared/api/currencies/types';
import type { CachedRate, CurrencyListCache, RateKey } from './types';

const VERSION = 'v1';
const TTL = 5 * 60 * 1000;

const CURRENCY_LIST_KEY = `currency-list:${VERSION}`;
const CURRENCY_LIST_TTL = 7 * 24 * 60 * 60 * 1000; // 7 дней

const getKey = ({ base, quote }: RateKey) =>
  `rate:${VERSION}:${base}_TO_${quote}`;

class Storage {
  clearAll() {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(`rate:${VERSION}:`))
      .forEach((k) => localStorage.removeItem(k));
  }

  saveRate({ base, quote }: RateKey, rate: number) {
    const key = getKey({ base, quote });
    const data: CachedRate = {
      rate,
      timestamp: Date.now(),
      version: VERSION,
    };
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn('localStorage full?', e);
    }
  }

  getRate(baseQuote: RateKey): number | null {
    const key = getKey(baseQuote);
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    try {
      const { rate, timestamp, version }: CachedRate = JSON.parse(raw);
      if (version !== VERSION) return null;
      if (Date.now() - timestamp > TTL) {
        localStorage.removeItem(key);
        return null;
      }
      return rate;
    } catch {
      return null;
    }
  }

  saveCurrencyList(list: CurrencyListResponse) {
    const data: CurrencyListCache = {
      list,
      timestamp: Date.now(),
      version: 'v1',
    };
    try {
      localStorage.setItem(CURRENCY_LIST_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('localStorage full?', e);
    }
  }

  getCurrencyList(): CurrencyListResponse | null {
    const raw = localStorage.getItem(CURRENCY_LIST_KEY);
    if (!raw) return null;

    try {
      const { list, timestamp, version }: CurrencyListCache = JSON.parse(raw);
      if (version !== 'v1') {
        localStorage.removeItem(CURRENCY_LIST_KEY);
        return null;
      }
      if (Date.now() - timestamp > CURRENCY_LIST_TTL) {
        localStorage.removeItem(CURRENCY_LIST_KEY);
        return null;
      }
      return list;
    } catch {
      return null;
    }
  }
}

const storage = new Storage();

export default storage;
