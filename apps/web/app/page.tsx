"use client"

import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { SignInButton, UserButton } from "@clerk/nextjs"

export default function Page() {

  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.add)

  return (
    <>
    <Authenticated>
        <div className="flex items-center justify-center min-h-svh flex-col gap-y-6">
          <UserButton/>
          <Button onClick={() => addUser()}>
            Add
          </Button>
          <p className="max-w-xl">{JSON.stringify(users, null, 2)}</p>
        </div>
    </Authenticated>
    <Unauthenticated>
        <div className="flex items-center justify-center min-h-svh flex-col gap-y-6">
          <p className="max-w-xl">You are not authenticated. Please log in to see the users.</p>
                <SignInButton>
          Sign
        </SignInButton>
        </div>

    </Unauthenticated>
    </>
  )
}
