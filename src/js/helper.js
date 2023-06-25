import { timeoutTime } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export async function AJAX(url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(timeoutTime)]);
    const data = await res.json();
    if (!res.ok)
      throw new Error(`${data.status} ${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
}

// export async function getJson(url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout(timeoutTime)]);
//     const data = await res.json();
//     if (!res.ok)
//       throw new Error(`${data.status} ${data.message} ${res.status}`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// }

// export async function sendJson(url, uploadData) {
//   try {
//     const fetchPro = fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(uploadData),
//     });
//     const res = await Promise.race([fetchPro, timeout(timeoutTime)]);
//     const data = await res.json();
//     if (!res.ok)
//       throw new Error(`${data.status} ${data.message} ${res.status}`);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// }
