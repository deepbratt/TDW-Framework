import { Button } from '@material-ui/core';
import { createPortal } from 'react-dom';

interface DrawBtnProps {
  draw: boolean;
  setDraw: React.Dispatch<React.SetStateAction<boolean>>;
  position: any;
}

const DrawBtn = ({ draw, setDraw, position }: DrawBtnProps) => {
  // const mapContext = position[MAP]
  const controlDiv = document.createElement('div');
  return (
    <Button
      onClick={() => setDraw(!draw)}
      variant={draw ? 'contained' : 'outlined'}
      size="small"
      color={'secondary'}
    >
      Draw
    </Button>
    // controlDiv
  );
};

export default DrawBtn;
