"use client"

import { useOrganization } from "@clerk/nextjs"
import { OrganizationView } from "../views/organization-views"
import AuthLayout from "../layouts/auth-layout"

export const OrganizationGuard = ({ children }: { children: React.ReactNode }) => {
    
    const { organization } = useOrganization()
    
    if(!organization){
        return (
            <AuthLayout>
                <OrganizationView/>
            </AuthLayout>
        )
    }

    return (
        <>
            {children}
        </>
    )
}