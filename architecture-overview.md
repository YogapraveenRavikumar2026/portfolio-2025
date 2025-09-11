# Architecture Overview

This document provides an overview of the architecture using a Mermaid diagram.

```mermaid
graph TD
    A[Client] -->|Requests| B[API Gateway]
    B -->|Routes to| C[Service 1]
    B -->|Routes to| D[Service 2]
    C -->|Communicates with| E[Database]
    D -->|Communicates with| E
    E -->|Sends data to| C
    E -->|Sends data to| D
```

This diagram explains the flow of requests from the client, through the API Gateway, to individual services, and how these services interact with the database.