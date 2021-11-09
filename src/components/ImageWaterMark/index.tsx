import ReactImageProcess from 'react-image-process';
import { ImgHTMLAttributes, useEffect, useState } from 'react';
interface ImageWaterMarkProps {
  children: any;
  src?: string;
}

const WaterMark = ({ children, src, ...rest } : ImageWaterMarkProps & ImgHTMLAttributes<HTMLImageElement>) => {
  const [imageComponent, setImageComponent] = useState<any>();

  const createImageComponent = async (imgUrl: string) => {
    // const config = {
    //   'Access-Control-Allow-Origin': '*',
    //   'Sec-Fetch-Mode': 'no-cors'
    // };
    // axios
    //   .get(imgUrl, { headers: config })
    //   .then((response) => {
    //     setImageComponent(response.data)
    //   })
    //   .catch((err) => console.log('error', err));
  };
  useEffect(() => {
    if (src) {
      createImageComponent(src);
    }
  }, [src]);
  return (
    <>
      <ReactImageProcess
        mode="waterMark"
        waterMarkType="text"
        waterMark={'CarOkta.com'}
        width={60}
        height={60}
        opacity={1}
        coordinate={[10, 10]}
        fontColor={333}
      >
        {children}
        {/* <img src={imageComponent || src} alt="" {...rest}/> */}
      </ReactImageProcess>
    </>
  );
};

export default WaterMark;
