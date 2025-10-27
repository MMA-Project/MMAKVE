import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "MMAKVE API",
            version: "1.0.0",
            description:
                "Documentation de l'API MMAKVE. Authentification JWT, routes d'auth et endpoints métier.",
        },
        servers: [
            {
                url: "http://localhost:4000/api",
                description: "Local dev",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {
                RegisterRequest: {
                    type: "object",
                    required: ["username", "password"],
                    properties: {
                        username: { type: "string", example: "alice" },
                        password: { type: "string", example: "Secret123!" },
                        role: {
                            type: "string",
                            enum: ["AVENTURIER", "ASSISTANT", "CLIENT"],
                            example: "CLIENT",
                        },
                    },
                },
                LoginRequest: {
                    type: "object",
                    required: ["username", "password"],
                    properties: {
                        username: { type: "string", example: "alice" },
                        password: { type: "string", example: "Secret123!" },
                    },
                },
                LoginResponse: {
                    type: "object",
                    properties: {
                        token: { type: "string", example: "<jwt>" },
                    },
                },
                ErrorResponse: {
                    type: "object",
                    properties: {
                        error: {
                            type: "object",
                            properties: {
                                code: { type: "string" },
                                message: { type: "string" },
                                details: { type: "object" },
                            },
                        },
                    },
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ["src/routes/**/*.ts", "src/controllers/**/*.ts"],
};

export const openapiSpecification = swaggerJsdoc(options);
