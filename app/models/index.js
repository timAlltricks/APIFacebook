// USERS
module.exports = [
  {
    'id': '1',
    'first_name': 'Mathieu',
    'last_name': 'SABNA',
    'email': 'jaimal@gmail.com',
    'password': '123456789',
    'age': 25,
    'gender': 'm',
    'height': 1.73,
    'weight': 98,
    'city': 'Paris',
    'city_code': '75000',
    'street_number': 1,
    'street_type': 'avenue',
    'street_name': 'de Versailles',
    'phone': '0655555501',
    'image_profil': 'https://randomAdmin.me/api/portraits/men/85.jpg'
  },
  {
    'id': '2',
    'first_name': 'Régis',
    'last_name': 'Camnal',
    'email': 'pareisien@gmail.com',
    'password': '123456789',
    'age': 49,
    'gender': 'm',
    'height': 1.59,
    'weight': 61,
    'city': 'Lyon',
    'city_code': '69000',
    'street_number': 122,
    'street_type': 'Boulevard',
    'street_name': 'de la Reine',
    'phone': '0655555502',
    'image_profil': 'https://randomAdmin.me/api/portraits/men/84.jpg'
  },
  {
    'id': '3',
    'first_name': 'Camille',
    'last_name': 'Lenée',
    'email': 'icilabas@gmail.com',
    'password': '123456789',
    'age': 29,
    'gender': 'f',
    'height': 1.62,
    'weight': 59,
    'city': 'Tarbes',
    'city_code': '49000',
    'street_number': 12,
    'street_type': 'rue',
    'street_name': 'Jule Verne',
    'phone': '0655555503',
    'image_profil': 'https://randomAdmin.me/api/portraits/women/84.jpg'
  },
  {
    'id': '4',
    'first_name': 'Anaëlle',
    'last_name': 'Risine',
    'email': 'cestouest@gmail.com',
    'password': '123456789',
    'age': 38,
    'gender': 'f',
    'height': 1.79,
    'weight': 72,
    'city': 'Paris',
    'city_code': '75000',
    'street_number': 1,
    'street_type': 'Boulevard',
    'street_name': 'de Saint Germain',
    'phone': '0655555506',
    'image_profil': 'https://randomAdmin.me/api/portraits/women/82.jpg'
  },
  {
    'id': '5',
    'first_name': 'Céline',
    'last_name': 'Malaga',
    'email': 'barcacool@gmail.com',
    'password': '123456789',
    'age': 30,
    'gender': 'f',
    'height': 1.65,
    'weight': 65,
    'city': 'Grenoble',
    'city_code': '68000',
    'street_number': 88,
    'street_type': 'Boulevard',
    'street_name': 'de Lyon',
    'phone': '0655555507',
    'image_profil': 'https://randomAdmin.me/api/portraits/women/24.jpg'
  },
  {
    'id': '6',
    'first_name': 'Anis',
    'last_name': 'Hemeni',
    'email': 'parismagic@gmail.com',
    'password': '123456789',
    'age': 22,
    'gender': 'm',
    'height': 1.65,
    'weight': 65,
    'city': 'Saint Cyr l\'École',
    'city_code': '78210',
    'street_number': 88,
    'street_type': 'Boulevard',
    'street_name': 'Jean Jaurès',
    'phone': '0655555508',
    'image_profil': 'https://randomAdmin.me/api/portraits/men/9.jpg'
  },
  {
    'id': '7',
    'first_name': 'Matis',
    'last_name': 'Henni',
    'email': 'fccasse@gmail.com',
    'password': '123456789',
    'age': 28,
    'gender': 'm',
    'height': 1.65,
    'weight': 78,
    'city': 'Trappes',
    'city_code': '78200',
    'street_number': 12,
    'street_type': 'Impasse',
    'street_name': 'Henry Ford',
    'phone': '0655555509',
    'image_profil': 'https://randomAdmin.me/api/portraits/men/4.jpg'
  },
  {
    'id': '8',
    'first_name': 'Cynthia',
    'last_name': 'Barrissel',
    'email': 'errormsg@gmail.com',
    'password': '123456789',
    'age': 27,
    'gender': 'f',
    'height': 1.60,
    'weight': 60,
    'city': 'Regnac',
    'city_code': '42000',
    'street_number': 12,
    'street_type': 'Rue',
    'street_name': 'de l\'amitié',
    'phone': '0655555510',
    'image_profil': 'https://randomAdmin.me/api/portraits/women/9.jpg'
  },
  {
    'id': '9',
    'first_name': 'Cathia',
    'last_name': 'Niverd',
    'email': 'cniverd@gmail.com',
    'password': '123456789',
    'age': 75,
    'gender': 'f',
    'height': 1.70,
    'weight': 70,
    'city': 'Lille',
    'city_code': '02000',
    'street_number': 12,
    'street_type': 'Rue',
    'street_name': 'Carrée',
    'phone': '0655555511',
    'image_profil': 'https://randomAdmin.me/api/portraits/women/15.jpg'
  }
]

// Group
module.exports = [
  {
    'id': '0',
    'name': 'Timmy',
    'description': 'I love the planet',
    'icon': 'urlOfTheIcon.com',
    'photo': 'urlOfTheImage',
    'group_type': 1,
    'membersCanPubli': true,
    'membersCanEvent': false,
    'admins': ['idOfAdmin', 'idOfAdmin', 'idOfAdmin'],
    'members': ['idOfMember', 'idOfMember', 'idOfMember']
  }
]

// Event
module.exports = [
  {
    'name': 'Timmy',
    'description': 'I love the planet',
    'date_start': '2020-03-22T14:56:59.301Z',
    'date_end': '2020-04-22T14:56:59.301Z',
    'location': 'theExactPlace',
    'photo': 'urlOfThePhoto',
    'private': false,
    'organizers': ['idOfAdmin', 'idOfAdmin', 'idOfAdmin'],
    'participants': ['idOfMember', 'idOfMember', 'idOfMember']
  }
]

/*
const factory = require('fakingoose')
const albumSchema = require('./album.js')
const albumFactory = factory(albumSchema, {})
const mock = albumFactory.generate
console.log(mock) */

/* module.exports = [
  {
    'photos': [
      {
        'author': 'idddddd',
        'url': 'okay.com'
      },
      {
        'author': 'iddddd1',
        'url': 'okay1.com'
      },
      {
        'author': 'iddddd2',
        'url': 'okay2.com'
      }
    ]
  }
] */
