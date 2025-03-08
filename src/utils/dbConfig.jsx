import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:r4czphx6fOTw@ep-ancient-band-a52ja8qr.us-east-2.aws.neon.tech/HealthTracker?sslmode=require"
);
export const db = drizzle(sql, { schema });
