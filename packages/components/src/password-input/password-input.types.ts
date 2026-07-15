export type UvPasswordStrength = 'empty' | 'weak' | 'fair' | 'good' | 'strong'
export interface UvPasswordStrengthDetail { value: string; score: number; strength: UvPasswordStrength }
