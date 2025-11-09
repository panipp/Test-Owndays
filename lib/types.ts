/**
 * Shared types and interfaces
 */

export interface Product {
  id: number | string
  name: string
  model: string
  price: string
  tax: string
  category: string
  image: string
  imageMobile?: string
}

export interface Option {
  id: number | string
  title: string
  description: string
  price: string
  tax: string
}

export type BadgeVariant = 'green' | 'brown'
export type ButtonVariant = 'rounded' | 'square'
export type Variant = 'desktop' | 'mobile'

