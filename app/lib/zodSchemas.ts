import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  description: z.string().trim().min(10, 'Description is required'),
  status: z.enum(['draft', 'published', 'archived']),
  price: z.coerce.number().min(1, 'Price must be positive'),
  images: z.array(z.string().url()).min(1, "At least one image is required"),
  category: z.enum(['men', 'women']),
  isFeatured: z.boolean().optional(),
});