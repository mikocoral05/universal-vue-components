export type UvCarouselId = string | number
export interface UvCarouselItem { id: UvCarouselId; title: string; description?: string; image?: string; alt?: string; href?: string }
export interface UvCarouselChangeDetail { index: number; item: UvCarouselItem }
