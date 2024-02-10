import cache from 'memory-cache';
import { logger } from '../config/logger';
import { getAllReviews } from '../database/commands';

const MINUTE = 60 * 1000;
const CACHE_TIME = 30 * MINUTE;

export class GetReviewsService {
  private isCacheExpired = false;
  private cacheTimer: NodeJS.Timeout | null = null;

  constructor() {
    const cachedReviews = cache.get('get-reviews');

    if (cachedReviews) {
      this.startCacheExpirationTimer();
    }
  }

  private startCacheExpirationTimer() {
    if (!this.cacheTimer) {
      this.cacheTimer = setInterval(this.checkCacheExpiration, MINUTE);
    }
  }

  private checkCacheExpiration = () => {
    const cacheTimestamp = cache.get('get-reviews-timestamp');
    const currentTime = Date.now();

    if (!cacheTimestamp || currentTime - cacheTimestamp > CACHE_TIME) {
      if (!this.isCacheExpired) {
        logger.warn('Get all reviews: cache expired');
        this.isCacheExpired = true;
      }
    } else {
      this.isCacheExpired = false;
    }
  };

  public getReviews = async () => {
    const cachedReviews = cache.get('get-reviews');

    if (cachedReviews) {
      logger.info('Get all reviews: retrieved from cache');
      return cachedReviews;
    }

    const result = await getAllReviews();

    cache.put('get-reviews', result, CACHE_TIME);
    cache.put('get-reviews-timestamp', Date.now(), CACHE_TIME);

    this.startCacheExpirationTimer();

    return result;
  };
}
