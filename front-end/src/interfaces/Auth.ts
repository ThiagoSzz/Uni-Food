export interface User {
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
  success: boolean;
  message: string;
  data?: {
    token: string;
    user: User;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any[];
}

export interface JWTPayload {
  email: string;
  nome: string;
  iat?: number;
  exp?: number;
}
