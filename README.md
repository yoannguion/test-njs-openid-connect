# Secure OIDC Proxy with Nginx and Keycloak

This project is a secure OpenID Connect (OIDC) proxy environment using:

- **Custom Nginx** with OIDC and JWT support (via njs and additional modules)
- **Keycloak** as the Identity Provider (IdP) with a pre-configured realm
- **JWT Decoder** application to display decoded Bearer tokens (like jwt.io)

All components are orchestrated with **Docker Compose** for easy deployment.

---

## Features

1. **Custom Nginx**:
    - Handles OIDC authentication with a modular configuration.
    - Decodes JWT tokens for debugging and analysis.
    - Proxies requests to the JWT Decoder application.

2. **Keycloak**:
    - Preloaded with a realm configuration (`realm.json`) for your OIDC setup.
    - Includes a client configured for secure OIDC flows.

3. **JWT Header Decoder**:
    - Node.js application that decodes and displays JWT tokens received via the `Authorization` header.

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Project Structure

```plaintext
.
├── app/
│   ├── app.js                  # Node.js JWT Decoder
│   ├── Dockerfile              # Dockerfile for the JWT Decoder
├── keycloak-realm/
│   ├── realm.json              # Preconfigured Keycloak realm
├── nginx/
│   ├── Dockerfile              # Custom Nginx Dockerfile with OIDC modules
│   ├── frontend.conf           # Nginx frontend configuration
│   ├── openid_connect.server_conf # OIDC server configuration
│   ├── openid_connect_configuration.conf # OIDC client settings
├── docker-compose.yml          # Docker Compose file
└── README.md                   # This file
