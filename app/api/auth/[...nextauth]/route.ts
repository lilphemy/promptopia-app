import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret:'',
        })
    ],
    async session ({session, token, user}:{session: any, token: any, user: any}) {

    }, 
    async signIn ({profile}:{profile:any}) {

    }
})

export { handler as GET, handler as POST};