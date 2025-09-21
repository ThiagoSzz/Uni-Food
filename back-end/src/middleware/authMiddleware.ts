import express from 'express';
import { AuthService } from '../service/authService';
import { logger } from '../config/logger';

const authService = new AuthService();

// Extend the Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        nome: string;
      };
    }
  }
}

export const authenticateToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token de acesso é obrigatório'
      });
    }

    // Verify token
    const payload = authService.verifyToken(token);

    // Add user info to request object
    req.user = {
      email: payload.email,
      nome: payload.nome
    };

    next();
  } catch (error: any) {
    logger.error('Token verification failed:', error);

    return res.status(403).json({
      success: false,
      message: 'Token inválido ou expirado'
    });
  }
};

export const optionalAuthentication = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
      try {
        const payload = authService.verifyToken(token);
        req.user = {
          email: payload.email,
          nome: payload.nome
        };
      } catch (error) {
        // Token is invalid, but we don't fail the request
        logger.warn('Optional authentication: invalid token provided');
      }
    }

    next();
  } catch (error: any) {
    logger.error('Optional authentication error:', error);
    next(); // Continue anyway
  }
};
