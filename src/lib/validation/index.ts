import { z } from "zod"

export const SignupValidation = z.object({
  name: z.string().min(2, {message: 'Too short'}),
  username: z.string().min(2, {message: 'Too short'}),
  email: z.string().email(),
  password: z.string().min(8, {message:'Password must be at least 8 characters.'})
})
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message:'Password must be at least 8 characters.'})
})

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
})
