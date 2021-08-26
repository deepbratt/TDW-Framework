export default function Retry(fn :any , retriesLeft = 5, interval = 1000) {
    return new Promise<{
      default: ({ token }: any) => JSX.Element;
  }>((resolve, reject) => {
      fn()
        .then(resolve)
        .catch((error:any) => {
          setTimeout(() => {
            if (retriesLeft === 1) {
              // reject('maximum retries exceeded');
              reject(error);
              return;
            }
  
            // Passing on "reject" is the important part
            Retry(fn, retriesLeft - 1, interval).then(resolve, reject);
          }, interval);
        });
    });
  }