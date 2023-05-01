import body_white from '../svg/11_Body/body_white.svg';
import body_tan from '../svg/11_Body/body_tan.svg';
import body_tan_1 from '../svg/11_Body/body_tan_1.svg';
import body_brown from '../svg/11_Body/body_brown.svg';
import body_black from '../svg/11_Body/body_black.svg';

import ear_white from '../svg/5_Ear/ear_white.svg';
import ear_tan from '../svg/5_Ear/ear_tan.svg';
import ear_tan_1 from '../svg/5_Ear/ear_tan_1.svg';
import ear_brown from '../svg/5_Ear/ear_brown.svg';
import ear_black from '../svg/5_Ear/ear_black.svg';

type Map = {
  [key: string]: string;
};

const map: Map = {
  [body_white]: ear_white,
  [body_tan]: ear_tan,
  [body_tan_1]: ear_tan_1,
  [body_brown]: ear_brown,
  [body_black]: ear_black,
};

const updateEar = (bodyUrl: string) => map[bodyUrl];

export default updateEar;
