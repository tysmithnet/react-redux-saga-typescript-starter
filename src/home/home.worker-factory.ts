export default function createWorker(): Worker {
  return new Worker("/home/home.worker.js");
}
