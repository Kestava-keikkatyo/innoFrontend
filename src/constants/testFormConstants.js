/**
 * yksi rakenne kaikille vai yksittäisinä?
 */
const testFormConstants = [
  {
    title: 'Lomake 1. Asiakassopimukseen liittyvät työturvallisuus- ja työhyvinvointiasiat',
    description: 'Vuokra- ja käyttäyrityksen edustajat täyttävät yhdessä.',
    questions: [
      {
        name: 'Lainsäädännöstä seuraavat työturvallisuusvastuut on käyty yhdessä läpi',
        type: 'checkbox',
      },
      {
        name: 'Työntekijöiltä työssä edeltytettävä koulutus ja työkokemus sekä työn ammattitaitovaatimukset',
        type: 'textfield',
      },
    ],
  },
  {
    title: 'Lomake 2. asdfasdfasdf',
    description: 'qpwoeirqpowier',
    questions: [
      {
        name: 'lksdjflksjdfkljhsdkljhgsdkjldh',
        type: 'radiobuttongroup',
      },
      { name: 'poqwierqwpoeurqpwoeiqpwoie', type: 'textarea' },
    ],
  },
]

export default testFormConstants
