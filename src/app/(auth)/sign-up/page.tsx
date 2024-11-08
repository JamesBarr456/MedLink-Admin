import { Metadata } from 'next';
import Link from 'next/link';
// import UserAuthForm from './user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function SignInViewPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 ml-[-30px] mt-[-70px] flex items-center text-lg font-medium">
          <Image
            src="/logo/MEDLINK_LOGO-02.ico"
            alt="MedLink"
            width={200}
            height={100}
          />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">&ldquo;Panel de administración.&rdquo;</p>
            <footer className="text-sm">MedLink</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crear una cuenta
            </h1>
            <p className="text-sm text-muted-foreground">
              Ingrese su correo electrónico a continuación para crear su cuenta
            </p>
          </div>
          {/* <UserAuthForm /> */}
          <p className="px-8 text-center text-sm text-muted-foreground">
            Al hacer click en continuar, usted acepta nuestros{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Términos de Servicio
            </Link>{' '}
            y{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidad.
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
