import { app } from "../app";
import session from "express-session";
import MongoStore from "connect-mongo";
import { clientPromise } from "../database";

app.use(
  session({
    secret: "je suis un secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
    store: MongoStore.create({
      clientPromise: clientPromise as any,
      ttl: 60 * 60 * 24 * 14,
    }),
  })
);
