import background_1 from './svg/17_fon/fon_dark.svg';
import background_2 from './svg/17_fon/fon_light.svg';

import chair_1 from './svg/13_Chair/13_chair.svg';

import shirt_1 from './svg/12_Shirt/shirt-blue.svg';
import shirt_2 from './svg/12_Shirt/shirt-green.svg';
import shirt_3 from './svg/12_Shirt/shirt-orange.svg';
import shirt_4 from './svg/12_Shirt/shirt-pink.svg';
import shirt_5 from './svg/12_Shirt/shirt-red.svg';
import shirt_6 from './svg/12_Shirt/shirt-white.svg';
import shirt_7 from './svg/12_Shirt/shirt-yellow.svg';

import body_1 from './svg/11_Body/body_white.svg';
import body_2 from './svg/11_Body/body_tan.svg';
import body_3 from './svg/11_Body/body_tan_1.svg';
import body_4 from './svg/11_Body/body_brown.svg';
import body_5 from './svg/11_Body/body_black.svg';

import hair_straightShort_black from './svg/10_Hair/Shraight short/1/hair_straightShort_black.svg';
import hair_straightShort_blond from './svg/10_Hair/Shraight short/1/hair_straightShort_blond.svg';
import hair_straightShort_brown from './svg/10_Hair/Shraight short/1/hair_straightShort_brown.svg';
import hair_straightShort_grey from './svg/10_Hair/Shraight short/1/hair_straightShort_grey.svg';
import hair_straightShort_purple from './svg/10_Hair/Shraight short/1/hair_straightShort_purple.svg';
import hair_straightShort_red from './svg/10_Hair/Shraight short/1/hair_straightShort_red.svg';

import eyes_1 from './svg/7_Eyes/Eyes_normal/eyes_blue.svg';
import eyes_2 from './svg/7_Eyes/Eyes_normal/eyes_brown.svg';
import eyes_3 from './svg/7_Eyes/Eyes_normal/eyes_green.svg';
import eyes_4 from './svg/7_Eyes/Eyes_big/eyes_big_blue.svg';
import eyes_5 from './svg/7_Eyes/Eyes_big/eyes_big_brown.svg';
import eyes_6 from './svg/7_Eyes/Eyes_big/eyes_big_green.svg';
import eyes_7 from './svg/7_Eyes/Eyes_big_2/eyes_big_2_blue.svg';
import eyes_8 from './svg/7_Eyes/Eyes_big_2/eyes_big_2_brown.svg';
import eyes_9 from './svg/7_Eyes/Eyes_big_2/eyes_big_2_green.svg';
import eyes_10 from './svg/7_Eyes/Eyes_big_3/eyes_big_3_blue.svg';
import eyes_11 from './svg/7_Eyes/Eyes_big_3/eyes_big_3_brown.svg';
import eyes_12 from './svg/7_Eyes/Eyes_big_3/eyes_big_3_green.svg';
import eyes_13 from './svg/7_Eyes/Eyes_skinny/eyes_skinny_blue.svg';
import eyes_14 from './svg/7_Eyes/Eyes_skinny/eyes_skinny_brown.svg';
import eyes_15 from './svg/7_Eyes/Eyes_skinny/eyes_skinny_green.svg';

import eyebrows_1 from './svg/6_Eyebrows/eyebrows_1.svg';
import eyebrows_2 from './svg/6_Eyebrows/eyebrows_2.svg';
import eyebrows_3 from './svg/6_Eyebrows/eyebrows_3.svg';
import eyebrows_4 from './svg/6_Eyebrows/eyebrows_4.svg';
import eyebrows_5 from './svg/6_Eyebrows/eyebrows_5.svg';

import lashes_1 from './svg/8_Lashes/lashes_1-01.svg';
import lashes_2 from './svg/8_Lashes/lashes_2-01.svg';
import lashes_3 from './svg/8_Lashes/lashes_3-01.svg';

import nose_1 from './svg/1_Nose/nose_1.svg';
import nose_2 from './svg/1_Nose/nose_2.svg';
import nose_3 from './svg/1_Nose/nose_3.svg';
import nose_4 from './svg/1_Nose/nose_4.svg';
import nose_5 from './svg/1_Nose/nose_5.svg';
import nose_6 from './svg/1_Nose/nose_6.svg';
import nose_7 from './svg/1_Nose/nose_7.svg';
import nose_8 from './svg/1_Nose/nose_8.svg';

import mouth_1 from './svg/8_Mouth/mouth_1.svg';
import mouth_2 from './svg/8_Mouth/mouth_2-01.svg';

import ear_1 from './svg/5_Ear/ear_white.svg';
import ear_2 from './svg/5_Ear/ear_black.svg';
import ear_3 from './svg/5_Ear/ear_brown.svg';
import ear_4 from './svg/5_Ear/ear_tan.svg';
import ear_5 from './svg/5_Ear/ear_tan_1.svg';

import watch_1 from './svg/9_Watch/9_watch.svg';
import text_1 from './svg/14_Text/text_for_dark.svg';
import text_carma_1 from './svg/15_text_Carma/15_text_Carma.svg';
import lightingOurPath_1 from './svg/16_text_lighting_our_path_with_positivity/text_light.svg';

interface IElements {
  background: string[];
  chair: string[];
  shirt: string[];
  face: string[];
  hair: string[];
  eyes: string[];
  eyebrows: string[];
  lashes: string[];
  nose: string[];
  mouth: string[];
  ear: string[];
  watch: string[];
  text: string[];
  textCarma: string[];
  lightingOurPath: string[];
}

const elements: IElements = {
  background: [
    background_1,
    background_2,
  ],
  chair: [
    chair_1,
  ],
  shirt: [
    shirt_1,
    shirt_2,
    shirt_3,
    shirt_4,
    shirt_5,
    shirt_6,
    shirt_7,
  ],
  face: [
    body_1,
    body_2,
    body_3,
    body_4,
    body_5,
  ],
  hair: [
    hair_straightShort_black,
    hair_straightShort_blond,
    hair_straightShort_brown,
    hair_straightShort_grey,
    hair_straightShort_purple,
    hair_straightShort_red,
  ],
  eyes: [
    eyes_1,
    eyes_2,
    eyes_3,
    eyes_4,
    eyes_5,
    eyes_6,
    eyes_7,
    eyes_8,
    eyes_9,
    eyes_10,
    eyes_11,
    eyes_12,
    eyes_13,
    eyes_14,
    eyes_15,
  ],
  eyebrows: [
    eyebrows_1,
    eyebrows_2,
    eyebrows_3,
    eyebrows_4,
    eyebrows_5,
  ],
  lashes: [
    lashes_1,
    lashes_2,
    lashes_3,
  ],
  nose: [
    nose_1,
    nose_2,
    nose_3,
    nose_4,
    nose_5,
    nose_6,
    nose_7,
    nose_8,
  ],
  mouth: [
    mouth_1,
    mouth_2,
  ],
  ear: [
    ear_1,
    ear_2,
    ear_3,
    ear_4,
    ear_5,
  ],
  watch: [
    watch_1,
  ],
  text: [
    text_1,
  ],
  textCarma: [
    text_carma_1,
  ],
  lightingOurPath: [
    lightingOurPath_1,
  ],
};

export default elements;
