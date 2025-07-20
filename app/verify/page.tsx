import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 z-0">
        <Image
          src="/assets/pic1.png"
          alt="Data visualization illustration"
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 z-0">
        <Image src="/assets/pic2.png" alt="Data analysis illustration" fill className="object-contain object-bottom-right" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md bg-white shadow-lg border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-black text-3xl font-bold">Email Verification</h1>
              <p className="text-gray-500 text-sm mt-4">Please enter your code that send to your email address</p>
            </div>

            <form className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter code verification"
                  className="w-full h-12 px-4 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-sm transition-colors text-sm"
              >
                Submit
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link href="#" className="text-xs text-gray-500">
                Privacy Policy
              </Link>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                This site is protected by reCAPTCHA and the Google{" "} <br />
                <Link href="#" className="text-blue-600 hover:underline">
                 Policy and Terms of Service apply.
                </Link>{" "}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
