import * as z from 'zod';

export const profileSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  lastname: z
    .string()
    .min(3, { message: 'El apellido debe tener al menos 3 caracteres' }),
  email: z
    .string()
    .email({ message: 'El correo electrónico debe ser válido' }),
  contactno: z.coerce.number(),
  country: z.string().min(1, { message: 'Por favor seleccione un país' }),
  city: z.string().min(1, { message: 'Por favor seleccione una ciudad' }),
  // jobs array is for the dynamic fields
  jobs: z.array(
    z.object({
      jobcountry: z.string().min(1, { message: 'Por favor seleccione un país' }),
      jobcity: z.string().min(1, { message: 'Por favor seleccione una ciudad' }),
      jobtitle: z
        .string()
        .min(3, { message: 'El título del trabajo debe tener al menos 3 caracteres' }),
      employer: z
        .string()
        .min(3, { message: 'El nombre del empleador debe tener al menos 3 caracteres' }),
      startdate: z
        .string()
        .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
          message: 'La fecha de inicio debe tener el formato YYYY-MM-DD'
        }),
      enddate: z.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
        message: 'La fecha de finalización debe tener el formato YYYY-MM-DD'
      })
    })
  )
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
