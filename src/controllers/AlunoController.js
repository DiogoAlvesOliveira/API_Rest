import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      const {
        id, nome, email, idade,
      } = await aluno;
      return res.json({
        id, nome, email, idade,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const alunoId = req.params.id;

      if (!alunoId) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const aluno = await Aluno.findByPk(alunoId);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      const {
        id, nome, email, idade,
      } = aluno;
      return res.json({
        id, nome, email, idade,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json({ delete: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const alunoId = req.params.id;

      if (!alunoId) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const aluno = await Aluno.findByPk(alunoId);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      const {
        id, nome, email, idade,
      } = alunoAtualizado;
      return res.json({
        id, nome, email, idade,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
