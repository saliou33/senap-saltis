import Slight from '../assets/slight.svg';
import Serious from '../assets/serious.svg';
import Fatal from '../assets/fatal.svg';

export const fields = [
  ['Age du Conducteur', 'age_of_driver'],
  ['Age du Véhicule', 'age_of_vehicle'],
  ['Capacité Moteur Véhicule', 'engine_capacity_cc'],
  [
    'Type du véhicule',
    'vehicle_type',
    [
      'Vélo',
      'Moto 50cc',
      'Moto 50cc',
      'Moto 50-125cc',
      'Moto 125-500cc',
      'Moto +500cc',
      'Taxi',
      'Voirture',
      'Minibus',
      'Bus',
      'Tram',
      'Camion',
      'Moto Electrique',
    ],
  ],
  ['Jour', 'day_of_week', ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']],
  [
    'Conditon Météréologique',
    'weather_conditions',
    [
      'Normal - Sans Vent',
      'Pluvieux - Sans Vent',
      'Neigeux',
      'Normal - Avec Vent',
      'Pluvieux - Avec Vent',
      'Neige Avec Vent',
      'Brouillard',
    ],
  ],
  ['Lumiére', 'light_conditions', ['Jour', 'Nuit Avec Lumiere', 'Nuit Sans Lumiere', 'Sombre']],
  [
    'Condition de route',
    'road_surface_conditions',
    ['Sec', 'Mouillé', 'Neige', 'Glace', 'Brouillard', 'Argile'],
  ],
  ['Genre', 'sex_of_driver', ['M', 'F']],
  ['Limite Vitesse', 'speed_limit'],
];

export const cases = [
  {
    msg: 'Risque Léger',
    image: Slight,
    cons: 'Respecter le code de la route et faites attention à votre environnement.',
  },
  {
    msg: 'Risque Grave',
    image: Serious,
    cons: 'Prenez les dispositions responsables nécessaire pour le trajet, et ne pas être trop distrait.',
  },
  {
    msg: 'Risque Fatal',
    image: Fatal,
    cons: "Vous n'avez qu'une seule vie, donc conduisez de maniére sobre, prenez de bon chemin et faites attention!",
  },
];
