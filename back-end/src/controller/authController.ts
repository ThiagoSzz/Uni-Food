import express from 'express';
import { body, validationResult } from 'express-validator';
import { AuthService } from '../service/authService';
import { authenticateToken } from '../middleware/authMiddleware';
import { logger } from '../config/logger';

const LOGIN = '/login';
const REGISTER = '/register';
const PROFILE = '/profile';

const router = express.Router();
const authService = new AuthService();

const registerValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Por favor, forneça um endereço de email válido'),
  body('senha').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  body('nome').trim().isLength({ min: 2 }).withMessage('O nome deve ter pelo menos 2 caracteres'),
  body('sexo')
    .optional()
    .trim()
    .isLength({ max: 1 })
    .withMessage('O sexo deve ser um único caractere'),
  body('idade')
    .optional()
    .trim()
    .isLength({ max: 3 })
    .withMessage('A idade deve ter no máximo 3 caracteres'),
  body('preferencia_alimentar')
    .optional()
    .trim()
    .isLength({ max: 11 })
    .withMessage('A preferência alimentar deve ter no máximo 11 caracteres'),
  body('tipo').optional().isInt().withMessage('O tipo deve ser um número inteiro')
];

const loginValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Por favor, forneça um endereço de email válido'),
  body('senha').notEmpty().withMessage('A senha é obrigatória')
];

router.post(REGISTER, registerValidation, async (req: express.Request, res: express.Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Falha na validação',
        errors: errors.array()
      });
    }

    const { email, senha, nome, sexo, idade, preferencia_alimentar, tipo, nome_curso, periodo } =
      req.body;

    const result = await authService.register({
      email,
      senha,
      nome,
      sexo,
      idade,
      preferencia_alimentar,
      tipo,
      nome_curso,
      periodo
    });

    res.status(201).json({
      success: true,
      message: 'Usuário registrado com sucesso',
      data: result
    });
  } catch (error: any) {
    logger.error('Registration error:', error);

    if (
      error.message === 'User already exists with this email' ||
      error.message === 'Usuário já existe com este email'
    ) {
      return res.status(409).json({
        success: false,
        message: 'Este email já está cadastrado'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor durante o registro'
    });
  }
});

router.post(LOGIN, loginValidation, async (req: express.Request, res: express.Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Falha na validação',
        errors: errors.array()
      });
    }

    const { email, senha } = req.body;

    const result = await authService.login({ email, senha });

    res.status(200).json({
      success: true,
      message: 'Login realizado com sucesso',
      data: result
    });
  } catch (error: any) {
    logger.error('Login error:', error);

    if (
      error.message === 'Invalid email or password' ||
      error.message === 'Email ou senha inválidos'
    ) {
      return res.status(401).json({
        success: false,
        message: 'Email ou senha incorretos'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor durante o login'
    });
  }
});

router.get(PROFILE, authenticateToken, async (req: express.Request, res: express.Response) => {
  try {
    const userEmail = (req as any).user?.email;

    if (!userEmail) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const user = await authService.getUserProfile(userEmail);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Perfil obtido com sucesso',
      data: user
    });
  } catch (error: any) {
    logger.error('Profile retrieval error:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor ao obter perfil'
    });
  }
});

export default router;
