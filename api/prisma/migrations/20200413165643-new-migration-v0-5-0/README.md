# Migration `20200413165643-new-migration-v0-5-0`

This migration has been generated by David S Price at 4/13/2020, 4:56:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Post" (
    "body" TEXT NOT NULL  ,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL  
) 

CREATE TABLE "quaint"."Contact" (
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    "email" TEXT NOT NULL  ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL  ,
    "name" TEXT NOT NULL  
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200413165643-new-migration-v0-5-0
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+model Post {
+  id        Int @id @default(autoincrement())
+  title     String
+  body      String
+  createdAt DateTime @default(now())
+}
+
+model Contact {
+  id        Int @id @default(autoincrement())
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
+}
```

