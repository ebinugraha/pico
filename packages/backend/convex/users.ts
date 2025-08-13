import { mutation, query } from "./_generated/server";

export const getMany = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("users").collect();
        return users;
    }
})

export const add = mutation({
    args: {},
    handler: async (ctx) => {

        const identity = await ctx.auth.getUserIdentity();

        if(identity === null){
            throw new Error("You must be authenticated to add a user.");
        }

        const orgId = identity.org_id as string

        if(!orgId){
            
        }

        const userId = await ctx.db.insert("users", {
            name: "febrian nugraha"
        })

        return userId

    }
})