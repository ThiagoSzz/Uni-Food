import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { logger } from '../config/logger';
import { sqlOperation } from '../database/config';
import {
  User,
  UserWithoutPassword,
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  JWTPayload
} from '../interfaces/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '24h';

export class AuthService {
  async register(registerData: RegisterRequest): Promise<AuthResponse> {
    const { email, senha, nome, sexo, idade, preferencia_alimentar, tipo, nome_curso, periodo } =
      registerData;

    try {
      // Check if user already exists
      const existingUser = await this.getUserByEmail(email);
      if (existingUser) {
        throw new Error('Usuário já existe com este email');
      }

      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(senha, saltRounds);

      // Create funcao record for this user
      const tipoMap: { [key: number]: string } = {
        1: 'Estudante',
        6: 'Professor',
        7: 'Funcionário'
      };

      const tipoString = tipoMap[tipo || 1] || 'Estudante';

      const funcaoQuery = `
        INSERT INTO funcao (tipo, nome_curso, periodo)
        VALUES ($1, $2, $3)
        RETURNING cod_funcao
      `;

      const funcaoResult = await sqlOperation(funcaoQuery, [
        tipoString,
        nome_curso?.trim() || null,
        periodo?.trim() || null
      ]);

      const funcaoId = funcaoResult[0].cod_funcao;

      // Insert new user with the funcao reference
      const insertQuery = `
        INSERT INTO usuario (email, senha, nome, sexo, idade, preferencia_alimentar, tipo)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING email, nome, sexo, idade, preferencia_alimentar, tipo
      `;

      const result = await sqlOperation(insertQuery, [
        email.trim(),
        hashedPassword,
        nome.trim(),
        sexo?.trim() || null,
        idade?.trim() || null,
        preferencia_alimentar?.trim() || null,
        funcaoId
      ]);

      const user: UserWithoutPassword = {
        ...result[0],
        nome_curso: nome_curso?.trim() || null,
        periodo: periodo?.trim() || null
      };

      // Generate JWT token
      const token = this.generateToken(user);

      logger.info(`New user registered: ${email}`);

      return { token, user };
    } catch (error) {
      logger.error('User registration failed:', error);
      throw error;
    }
  }

  async login(loginData: LoginRequest): Promise<AuthResponse> {
    const { email, senha } = loginData;

    try {
      // Get user with password
      const user = await this.getUserByEmail(email, true);
      if (!user) {
        throw new Error('Email ou senha inválidos');
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(senha, user.senha);
      if (!isPasswordValid) {
        throw new Error('Email ou senha inválidos');
      }

      // Remove password from user object
      const userWithoutPassword: UserWithoutPassword = {
        email: user.email,
        nome: user.nome,
        sexo: user.sexo,
        idade: user.idade,
        preferencia_alimentar: user.preferencia_alimentar,
        tipo: user.tipo,
        nome_curso: user.nome_curso,
        periodo: user.periodo
      };

      // Generate JWT token
      const token = this.generateToken(userWithoutPassword);

      logger.info(`User logged in: ${email}`);

      return { token, user: userWithoutPassword };
    } catch (error) {
      logger.error('User login failed:', error);
      throw error;
    }
  }

  async getUserProfile(email: string): Promise<UserWithoutPassword | null> {
    try {
      const user = await this.getUserByEmail(email, false);
      return user
        ? {
            email: user.email,
            nome: user.nome,
            sexo: user.sexo,
            idade: user.idade,
            preferencia_alimentar: user.preferencia_alimentar,
            tipo: user.tipo,
            nome_curso: user.nome_curso,
            periodo: user.periodo
          }
        : null;
    } catch (error) {
      logger.error('Get user profile failed:', error);
      throw error;
    }
  }

  private generateToken(user: UserWithoutPassword): string {
    const payload: JWTPayload = {
      email: user.email,
      nome: user.nome
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE } as jwt.SignOptions);
  }

  public verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, JWT_SECRET) as JWTPayload;
    } catch (error) {
      throw new Error('Token inválido ou expirado');
    }
  }

  private async getUserByEmail(email: string, includePassword = false): Promise<User | null> {
    try {
      const selectFields = includePassword
        ? 'u.email, u.senha, u.nome, u.sexo, u.idade, u.preferencia_alimentar, u.tipo, f.nome_curso, f.periodo'
        : 'u.email, u.nome, u.sexo, u.idade, u.preferencia_alimentar, u.tipo, f.nome_curso, f.periodo';

      const query = `
        SELECT ${selectFields} 
        FROM usuario u
        LEFT JOIN funcao f ON u.tipo = f.cod_funcao
        WHERE u.email = $1
      `;
      const result = await sqlOperation(query, [email.trim()]);

      return result.length > 0 ? result[0] : null;
    } catch (error) {
      logger.error('Database query failed:', error);
      throw error;
    }
  }
}
