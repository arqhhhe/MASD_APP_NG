import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  public isLogedIn = false;
  public parents = [
    {
      id: 1,
      family: 'Ackerman',
      address1: '23 Park Lane',
      phone: '',
      address2: 'Essex Fells, NJ 07021',
      p1FistName: 'David',
      p1LastName: 'Ackerman',
      p1Email: 'david.ackerman56@gmail.com',
      p1Phone: '',
      p2FistName: 'Deneyce',
      p2LastName: 'Ackerman',
      p2Email: 'kscntrygirl@gmail.com',
      p2Phone: '973-369-8622',
      children: [
        {
          id: 1,
          fistName: 'Maegan',
          lastName: 'Ackerman',
          class: 'Class 4B/G',
        }
      ],
    },
    {
      id: 2,
      family: 'Arce',
      address1: '62 Bloomfield Ave',
      address2: 'Essex Fells, NJ 07021',
      phone: '973-364-8064',
      p1FistName: 'Wendy Qualy',
      p1LastName: 'Arce',
      p1Email: 'wqualy@gmail.com',
      p1Phone: '732-882-8551 (wendy)',
      p2FistName: 'Ricardo Arce',
      p2LastName: 'Arce',
      p2Email: '',
      p2Phone: '908-884-9974 (ricardo)',
      children: [
        {
          id: 1,
          fistName: 'Giselle',
          lastName: 'Arce',
          class: 'Class 5C',
        }
      ],
    },
    {
      id: 3,
      family: 'Ascencio',
      address1: '109 Devon Road',
      address2: 'Essex Fells',
      phone: '',
      p1FistName: 'Vasanthi',
      p1LastName: 'Ascencio',
      p1Email: 'ascenciofamilia@gmail.com',
      p1Phone: '770-709-8686',
      p2FistName: 'Carlos',
      p2LastName: 'Ascencio',
      p2Email: 'mrascencio@gmail.com',
      p2Phone: '973-722-3574',
      children: [
        {
          id: 1,
          fistName: 'Ava',
          lastName: 'Ascencio',
          class: 'Class 2B/M',
        },
        {
          id: 2,
          fistName: 'Carter',
          lastName: 'Ascencio',
          class: 'Class 1B/H',
        }
      ],
    },
    {
      id: 4,
      family: 'Baheti',
      address1: '58 Bloomfield Ave.',
      address2: 'Essex Fells, NJ 07021',
      phone: '973-735-2352',
      p1FistName: 'Yashika',
      p1LastName: 'Malpani',
      p1Email: 'yashika.baheti@gmail.com',
      p1Phone: '201-323-4551',
      p2FistName: 'Abhishek',
      p2LastName: 'Baheti',
      p2Email: 'abaheti@gmail.com',
      p2Phone: '201-323-4479',
      children: [
        {
          id: 1,
          fistName: 'Aarav',
          lastName: 'Baheti',
          class: 'Class 3K/V',
        },
        {
          id: 1,
          fistName: 'Avaan',
          lastName: 'Baheti',
          class: 'Class PS/PM',
        }
      ],
    },
    {
      id: 5,
      family: 'Autret',
      address1: '295 Roseland Ave',
      address2: 'Essex Fells',
      phone: '',
      p1FistName: 'Maya',
      p1LastName: 'Autret',
      p1Email: 'mayanation@gmail.com',
      p1Phone: '917-239-9121',
      p2FistName: 'Lionel',
      p2LastName: 'Autret',
      p2Email: 'kscntrygirl@gmail.com',
      p2Phone: 'lionel_autret@yahoo.com',
      children: [
        {
          id: 1,
          fistName: 'Raphael',
          lastName: 'Autret',
          class: 'Class 5C/T',
        },
        {
          id: 2,
          fistName: 'Camille',
          lastName: 'Autret',
          class: 'Class 4B/G',
        },
        {
          id: 3,
          fistName: 'Leyla',
          lastName: 'Autret',
          class: 'Class 4H/F',
        },
      ],
    },
  ];
  public students = [
    {
      className: 'CLASS PS/AM', students: [
        {
          firstName: 'JAKE',
          lastName: 'BOBROFF',
          p1FirstName: '',
          p1LastName: '',
          p1Email: '',
          p1Phone: '',
          p2FirstName: '',
          p2LastName: '',
          p2Email: '',
          p2Phone: '',
          siblings: [
            {
              firstName: '',
              lastName: '',
              className: '',
            }
          ]
        },
        {
          firstName: 'JAKE',
          lastName: 'BOBROFF',
          p1FirstName: '',
          p1LastName: '',
          p1Email: '',
          p1Phone: '',
          p2FirstName: '',
          p2LastName: '',
          p2Email: '',
          p2Phone: '',
          siblings: [
            {
              firstName: '',
              lastName: '',
              className: '',
            }
          ]
        },
        {
          firstName: 'JAKE',
          lastName: 'BOBROFF',
          p1FirstName: '',
          p1LastName: '',
          p1Email: '',
          p1Phone: '',
          p2FirstName: '',
          p2LastName: '',
          p2Email: '',
          p2Phone: '',
          siblings: [
            {
              firstName: '',
              lastName: '',
              className: '',
            }
          ]
        },
      ]
    },
    {
      className: 'CLASS PS/PM', students: [
        {
          firstName: 'JAKE',
          lastName: 'BOBROFF',
          p1FirstName: '',
          p1LastName: '',
          p1Email: '',
          p1Phone: '',
          p2FirstName: '',
          p2LastName: '',
          p2Email: '',
          p2Phone: '',
          siblings: [
            {
              firstName: '',
              lastName: '',
              className: '',
            }
          ]
        },
      ]
    },
  ];

  constructor() {
  }
}
