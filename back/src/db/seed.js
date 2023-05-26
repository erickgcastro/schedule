const Service = require('../models/Service');
const User = require('../models/User');

const seed = async () => {
  await Service.create([
    {
      name: 'Relaxante Buddha',
      description:
        'Uma experiência de Bem-Estar exclusiva Buddha Spa! Iniciamos com uma massagem corporal profundamente relaxante e única.',
      price: 179,
      duration: 120,
    },
    {
      name: 'Shiatsu',
      description:
        'Uma imersão no Oriente. Com toques vigorosos nos pontos energéticos do corpo, o shiatsu alivia dores e tensões musculares, relaxando toda cadeia muscular, trazendo equilíbrio, recuperação e leveza.',
      price: 284,
      duration: 120,
    },
    {
      name: 'Drenagem Linfática',
      description:
        'Massagem realizada com movimentos suaves e precisos, atuando sobre o sistema linfático, ajudando a eliminar edemas. Também auxilia na eliminação de toxinas e melhora a nutrição das células.',
      price: 228,
      duration: 120,
    },
  ]);

  await User.create({
    adm: true,
    name: 'User Admin',
    password: 'adm',
    email: 'adm@adm.com',
    phone: '99 999999999',
    contact: 'email',
  });
};

module.exports = { seed };
