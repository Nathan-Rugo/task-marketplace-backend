import IntaSend from 'intasend-node';

const client = new IntaSend(
  process.env.INTASEND_PUBLISHABLE_KEY!,
  process.env.INTASEND_SECRET_KEY!,
  true
);

export default client;
