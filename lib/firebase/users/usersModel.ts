export interface User {
  id?: string;
  email: string;
  password: string;
  name: string;
  socialSecurityNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateUserData {
  email: string;
  password: string;
  name: string;
  socialSecurityNumber: string;
}

export interface UpdateUserData {
  email?: string;
  name?: string;
  socialSecurityNumber?: string;
  updatedAt?: Date;
}

// Helper function to validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate social security number format (XXX-XX-XXXX)
export function isValidSSN(ssn: string): boolean {
  const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
  return ssnRegex.test(ssn);
}

// Helper function to validate user data
export function validateUserData(userData: CreateUserData): string[] {
  const errors: string[] = [];

  if (!userData.email || !isValidEmail(userData.email)) {
    errors.push('Valid email is required');
  }

  if (!userData.password || userData.password.length < 6) {
    errors.push('Password must be at least 6 characters long');
  }

  if (!userData.name || userData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!userData.socialSecurityNumber || !isValidSSN(userData.socialSecurityNumber)) {
    errors.push('Valid social security number is required (format: XXX-XX-XXXX)');
  }

  return errors;
}

// Helper function to sanitize user data (remove password from user object for responses)
export function sanitizeUser(user: User): Omit<User, 'password'> {
  const { password, ...sanitizedUser } = user;
  return sanitizedUser;
}
