export const RATE_LIMITS= [
    {
      name: 'short',
      ttl: 2000,
      limit: 3,
    },
    {
      name: 'medium',
      ttl: 10000,
      limit: 20
    },
    {
      name: 'long',
      ttl: 60000,
      limit: 100
    }
  ]