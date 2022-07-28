import { createAuth } from "@keystone-next/auth";
import { Product } from "./schemas/Product";
import { User } from "./schemas/User";
import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    // TODO: add roles carts and orders
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
    },
    lists: createSchema({
      // Schema items go in here
      User,
      Product,
    }),
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      },
      // console.log(session);
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // graphql query
      User: "id",
    }),
  })
);
