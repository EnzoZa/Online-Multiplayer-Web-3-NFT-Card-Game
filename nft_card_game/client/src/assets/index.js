// backgrounds
import saiman from './background/saiman.jpg';
import astral from './background/astral.jpg';
import eoaalien from './background/eoaalien.jpg';
import panight from './background/panight.jpg';
import heroImg from './background/hero-img.jpg';

// cards
import ace from './Ace.png';
import bakezori from './Bakezori.png';
import blackSolus from './Black_Solus.png';
import calligrapher from './Calligrapher.png';
import chakriAvatar from './Chakri_Avatar.png';
import coalfist from './Coalfist.png';
import desolator from './Desolator.png';
import duskRigger from './Dusk_Rigger.png';
import flamewreath from './Flamewreath.png';
import furiosa from './Furiosa.png';
import geomancer from './Geomancer.png';
import goreHorn from './Gore_Horn.png';
import heartseeker from './Heartseeker.png';
import jadeMonk from './Jade_Monk.png';
import kaidoExpert from './Kaido_Expert.png';
import katara from './Katara.png';
import kiBeholder from './Ki_Beholder.png';
import kindling from './Kindling.png';
import lanternFox from './Lantern_Fox.png';
import mizuchi from './Mizuchi.png';
import orizuru from './Orizuru.png';
import scarletViper from './Scarlet_Viper.png';
import stormKage from './Storm_Kage.png';
import suzumebachi from './Suzumebachi.png';
import tuskBoar from './Tusk_Boar.png';
import twilightFox from './Twilight_Fox.png';
import voidTalon from './Void_Talon.png';
import whiplash from './Whiplash.png';
import widowmaker from './Widowmaker.png';
import xho from './Xho.png';

// logo
import logo from './logo.svg';

// icon
import attack from './attack.png';
import defense from './defense.png';
import alertIcon from './alertIcon.svg';
import AlertIcon from './AlertIcon.jsx';

// players
import player01 from './player01.png';
import player02 from './player02.png';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';

export const allCards = [
  ace,
  bakezori,
  blackSolus,
  calligrapher,
  chakriAvatar,
  coalfist,
  desolator,
  duskRigger,
  flamewreath,
  furiosa,
  geomancer,
  goreHorn,
  heartseeker,
  jadeMonk,
  kaidoExpert,
  katara,
  kiBeholder,
  kindling,
  lanternFox,
  mizuchi,
  orizuru,
  scarletViper,
  stormKage,
  suzumebachi,
  tuskBoar,
  twilightFox,
  voidTalon,
  whiplash,
  widowmaker,
  xho,
];

export {
  saiman,
  astral,
  eoaalien,
  panight,
  heroImg,

  ace,
  bakezori,
  blackSolus,
  calligrapher,
  chakriAvatar,
  coalfist,
  desolator,
  duskRigger,
  flamewreath,
  furiosa,
  geomancer,
  goreHorn,
  heartseeker,
  jadeMonk,
  kaidoExpert,
  katara,
  kiBeholder,
  kindling,
  lanternFox,
  mizuchi,
  orizuru,
  scarletViper,
  stormKage,
  suzumebachi,
  tuskBoar,
  twilightFox,
  voidTalon,
  whiplash,
  widowmaker,
  xho,

  logo,

  attack,
  defense,
  alertIcon,
  AlertIcon,

  player01,
  player02,

  attackSound,
  defenseSound,
  explosion,
};

export const battlegrounds = [
  { id: 'bg-saiman', image: saiman, name: 'Saiman' },
  { id: 'bg-astral', image: astral, name: 'Astral' },
  { id: 'bg-eoaalien', image: eoaalien, name: 'Eoaalien' },
  { id: 'bg-panight', image: panight, name: 'Panight' },
];

export const gameRules = [
  "Une carte avec le m??me point de d??fense et d'attaque s'annulera.",
  "Les points d'attaque de la carte attaquante d??duiront les points de vie du joueur adverse.",
  'Si P1 ne d??fend pas, sa sant?? sera d??duite par l\'attaque de P2.',
  'Si P1 d??fend, l\'attaque de P2 est ??gale ?? l\'attaque de P2 - la d??fense de P1.',
  'Si un joueur d??fend, il recharge 3 Mana',
  'Si un joueur attaque, il d??pense 3 Mana',
];