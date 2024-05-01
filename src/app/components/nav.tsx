import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react"

export function Nav() {
  const { isLoaded } = useUser()

  return (
    <header className="flex h-16 items-center justify-between bg-gray-200 px-8 py-4">
      <div>Pet card</div>
      <div>
        {isLoaded ? (
          <>
            <SignedOut>
              <a
                className="flex h-8 items-center justify-center rounded bg-blue-500 px-4 text-white hover:bg-blue-600"
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
                    userButtonAvatarBox: {
                      width: "2rem",
                      height: "2rem",
                    },
                  },
                }}
              />
            </SignedIn>
          </>
        ) : (
          <div className="h-8">loading</div>
        )}
      </div>
    </header>
  )
}
