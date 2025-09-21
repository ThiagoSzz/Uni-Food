export interface User {
  email: string;
  senha: string;
  nome: string;
  sexo?: string;
  idade?: string;
  preferencia_alimentar?: string;
  tipo?: number;
  nome_curso?: string;
  periodo?: string;
}

export interface UserWithoutPassword {
  email: string;
  nome: string;
  sexo?: string;
  idade?: string;
  preferencia_alimentar?: string;
  tipo?: number;
  nome_curso?: string;
  periodo?: string;
}

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface RegisterRequest {
  email: string;
  senha: string;
  nome: string;
  sexo?: string;
  idade?: string;
  preferencia_alimentar?: string;
  tipo?: number;
  nome_curso?: string;
  periodo?: string;
}

export interface AuthResponse {
  token: string;
  user: UserWithoutPassword;
}

export interface JWTPayload {
  email: string;
  nome: string;
  iat?: number;
  exp?: number;
}
