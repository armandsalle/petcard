import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"

export function Nav() {
  const { isLoaded } = useUser()

  return (
    <header className="flex items-center justify-between bg-gray-200 px-8 py-4">
      <div>Pet card</div>
      <div>
        {isLoaded ? (
          <>
            <SignedOut>
              <a
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                href="https://chief-egret-65.accounts.dev/sign-in"
              >
                Sign In
              </a>
            </SignedOut>
            <SignedIn>
              <UserButton
                showName={true}
                appearance={{
                  elements: {
                    userButtonOuterIdentifier: {
                      fontSize: "1rem",
                    },
                  },
                }}
              />
            </SignedIn>
          </>
        ) : (
          "loading"
        )}
      </div>
    </header>
  )
}
