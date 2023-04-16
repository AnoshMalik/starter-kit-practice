import "dotenv/config";

export default {
	dbUrl: createDatabaseUrl(),
	logLevel: process.env.LOG_LEVEL ?? "info",
	port: parseInt(process.env.PORT ?? "3000", 10),
	production: process.env.NODE_ENV === "production",
};

function createDatabaseUrl() {
	if (process.env.DATABASE_URL) {
		return process.env.DATABASE_URL;
	}
	const host = process.env.DB_HOST ?? "localhost";
	const name = process.env.DB_NAME ?? "cyf_hotels";
	const password = process.env.DB_PASS ?? process.env.DB_PASSWORD ?? "cyf123";
	const port = process.env.DB_PORT ?? "5432";
	const username =
		process.env.DB_USER ?? process.env.DB_USERNAME ?? "codeyourfuture";
	const userinfo = `${username}:${password}`;
	return `postgres://${
		userinfo !== ":" ? `${userinfo}@` : ""
	}${host}:${port}/${name}`;

	// RENDER POSTGRES DB BELOW
	// return "postgres://anoshmalik:AYGKlNp47Q0YEkMzjVe2xFRAk7YeHK7T@dpg-cg69sql269v5l65a5leg-a.oregon-postgres.render.com/ourdatabase_ten6";

	// AWS POSTGRES
	// return "postgres://anoshmalik:Cyf12399!@aws-postgres-123.c9kbpsahv339.us-east-1.rds.amazonaws.com/postgres";

	// AZURE POSTGRES --> Working
	// return "postgres://anoshmalik:Cyf12399!@azure-postgres-123.postgres.database.azure.com/postgres?sslmode=require";

	// GCP POSTGRES --> Working
	// return "postgres://postgres:postgres@35.226.168.246/postgres";
}
