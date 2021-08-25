import SlideArr from "./SlideArr";
import Slider from "../../../../components/Slider/index";
import { useState } from "react";
import Actions from "./useFunctions";
import { addToFavs } from "../../../../Utils/hooks/endpoints";
import Toast from "../../../../components/Toast";
import { IContainer } from "../../Utils/types";
import useStyles from "./useStyles";
const SlideContainer = ({ payload }: IContainer) => {
  const { dotsIndicator } = useStyles();
  const { addFavs,setOpen,open,responseMessage} = Actions();
  const [favs, setFavs] = useState(payload);


  const handleFavs = (id: string) => {
    let mapped = payload.map((data) => {
      return data._id === id ? { ...data, isFav: !data.isFav } : { ...data };
    });
    setFavs(mapped);

    addFavs(addToFavs, id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const arr = [
    <SlideArr payload={favs} handleAddFavs={handleFavs} />,
    <SlideArr payload={favs} handleAddFavs={handleFavs} />,
  ];

  return (
    <>
      <Slider styles={dotsIndicator}>{arr}</Slider>
      <Toast
        type={responseMessage.status}
        open={open}
        message={responseMessage.message}
        onClose={handleClose}
      />
    </>
  );
};

export default SlideContainer;
