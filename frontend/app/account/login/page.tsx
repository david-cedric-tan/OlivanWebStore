import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";
import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex w-full max-w-5xl gap-8 px-8 py-16">
          {/* Left side - Login Form */}
          <div className="flex w-full flex-col justify-center space-y-6 lg:w-1/2">
            <div>
              <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
                Login
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Sign in to your account
              </p>
            </div>
            <div className="w-full max-w-md">
              <LoginForm />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 self-center">
              {/* Don't have an account? <Link href="/account/register">Register</Link> */}
              <Link href="/account/forgot-password" className="hover:underline">
                Forgot Password?
              </Link>
              {/* <Link href="/account/reset-password">Reset Password?</Link>
            <Link href="/account/verify-email">Verify Email?</Link>
            <Link href="/account/resend-verification-email">
              Resend Verification Email?
            </Link>
            <Link href="/account/resend-verification-email">
              Resend Verification Email?
            </Link> */}
            </p>
          </div>

          {/* Right side - Image */}
          <div className="hidden w-1/2 lg:flex lg:items-center">
            <div className="relative h-full w-full min-h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="/assets/warehouse_employee_login.jpg"
                alt="Login Image"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
