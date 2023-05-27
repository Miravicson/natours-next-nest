import { Readable } from 'stream';

export function convertBufferToStream(buffer: Buffer | string, chunkSize?: number) {
  let normalizedBuffer: Buffer;

  if (typeof buffer === 'string') {
    normalizedBuffer = Buffer.from(buffer, 'utf8');
  } else {
    normalizedBuffer = buffer;
  }

  if (!Buffer.isBuffer(normalizedBuffer)) {
    throw new TypeError(`"buffer" argument must be a string or an instance of Buffer`);
  }

  const reader = new Readable();
  const hwm = reader.readableHighWaterMark;

  // If chunkSize is invalid, set to highWaterMark.
  if (!chunkSize || typeof chunkSize !== 'number' || chunkSize < 1 || chunkSize > hwm) {
    chunkSize = hwm;
  }

  const length = normalizedBuffer.length;
  let start = 0;

  // Overwrite _read method to push data from buffer.
  reader._read = function () {
    while (reader.push(normalizedBuffer.slice(start, (start += chunkSize!)))) {
      // If all data pushed, just break the loop.
      if (start >= length) {
        reader.push(null);
        break;
      }
    }
  };
  return reader;
}
