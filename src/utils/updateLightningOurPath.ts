import background_dark from '../svg/17_fon/fon_dark.svg';
import background_light from '../svg/17_fon/fon_light.svg';

import lightingOurPath_light from '../svg/16_text_lighting_our_path_with_positivity/text_light.svg';
import lightingOurPath_dark from '../svg/16_text_lighting_our_path_with_positivity/text_dark.svg';

type Map = {
  [key: string]: string;
};

const map: Map = {
  [background_dark]: lightingOurPath_light,
  [background_light]: lightingOurPath_dark,
};

const updateLightOurPath = (backgroundUrl: string) => map[backgroundUrl];

export default updateLightOurPath;
