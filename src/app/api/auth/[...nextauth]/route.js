import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
providers: [
GitHubProvider({
clientId: "Ov23ctBxa2yUA7FefbFO",
clientSecret: "e10235ab1163013ff327851dd6e0fbc75520b749",
}),
GoogleProvider({
clientId: "2841958617-nuek3q2mm0sm5p14lestg8c2e8shdtm0.apps.googleusercontent.com",
clientSecret: "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"
})
],
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }