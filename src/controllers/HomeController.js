import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Paty',
      sobrenome: 'Alves',
      email: 'Paty.dream89@gmail.com',
      idade: 34,
      peso: 50,
      altura: 1.59,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
