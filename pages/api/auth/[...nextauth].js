import {ConnectToDb} from "../../../lib/db";
import {verif} from "../../../lib/auth";
import Providers from "next-auth/providers";
import NextAuth from "next-auth";
import {signIn} from "next-auth/client";
export default NextAuth({
  session: {
    jwt: true,
    maxAge:  60*60,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await ConnectToDb();

        const usersCollection = client.db().collection('students');
        const user = await usersCollection.findOne({
          cin: credentials.cin,
        });

        if (!user) {
          client.close();
          throw new Error('Check Your Cin.');
        }

        const isValid = await verif(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Check your password .');
        }

        client.close();

        return {email: user.cin,name:user.fullname};

      },
    }),
  ],
  jwt:{
    secret: process.env.JWT_SECRET

  },

});