import { makeStyles } from '@material-ui/core';

const PostAdStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  itemRoot: {
    display: 'flex',
    alignContent: 'center',
    margin: '10px 0'
  },
  featureImgStyle: {
    maxWidth: '425px'
  },
  iconStyle: {
    maxHeight: '20px',
    maxWidth: '20px',
    marginRight: '10px'
  }
}));

export default PostAdStyles;
