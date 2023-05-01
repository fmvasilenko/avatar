import background_dark from '../svg/17_fon/fon_dark.svg';
import background_light from '../svg/17_fon/fon_light.svg';

import text_for_dark from '../svg/14_Text/text_for_dark.svg';
import text_for_light from '../svg/14_Text/text_for_light.svg';

type Map = {
  [key: string]: string;
};

const map: Map = {
  [background_dark]: text_for_dark,
  [background_light]: text_for_light,
};

const updateText = (backgroundUrl: string) => map[backgroundUrl];

export default updateText;
