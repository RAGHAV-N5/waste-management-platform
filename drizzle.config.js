export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:r4czphx6fOTw@ep-ancient-band-a52ja8qr.us-east-2.aws.neon.tech/HealthTracker?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:r4czphx6fOTw@ep-ancient-band-a52ja8qr.us-east-2.aws.neon.tech/HealthTracker?sslmode=require",
  },
};
