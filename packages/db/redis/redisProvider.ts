import { createClient } from 'redis';

// const client = createClient({
//     password: '0yScEXMAufjYd75gKQtVTTV25JSK0jcB',
//     socket: {
//         host: 'redis-12089.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 12089
//     }
// });
const host = process.env.REDIS_HOST;
const port = 12089;
export const redisClient = createClient({
    password: process.env.REDIS_PASSWORD || "0yScEXMAufjYd75gKQtVTTV25JSK0jcB",
    socket: {
        host,
        port
    }
});