import { OrganizationList, OrganizationProfile } from "@clerk/nextjs"

export const OrganizationView = () => {
    return (
        <OrganizationList
            afterCreateOrganizationUrl={'/'}
            afterSelectOrganizationUrl={'/'}
            hidePersonal
            skipInvitationScreen
        />
    ) 
}