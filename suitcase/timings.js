const sleepMedium = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// Change the ms to 4000 or 5000

const sleepShort = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleepLong = (ms = 5000) => new Promise((r) => setTimeout(r, ms));
const sleepExtraLong = (ms = 10000) => new Promise((r) => setTimeout(r, ms));

export { sleepExtraLong, sleepLong, sleepMedium, sleepShort };
