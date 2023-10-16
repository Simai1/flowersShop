import cors from 'cors';

export default cors({
    credentials: true,
    origin: [],
    exposedHeaders: '*',
});
