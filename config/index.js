const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:5789' : 'https://oioci.com';