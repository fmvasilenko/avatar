import addProperties from '../utils/addProperties';
import { IImg } from './types';

const img: IImg = (props) => {
  const root = new Image();

  if (props) {
    addProperties(root, props);

    const {
      alt,
      crossorigin,
      decoding,
      ismap,
      src,
    } = props;

    if (alt) root.alt = alt;
    if (crossorigin) root.crossOrigin = crossorigin;
    if (decoding) root.decoding = decoding;
    if (ismap) root.isMap = ismap;
    if (src) root.src = src;
  }

  return root;
};

export default img;
