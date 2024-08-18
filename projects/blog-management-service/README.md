# Blog Management Service

## Overview

The **Blog Management Service** is a backend application designed to manage a simple blogging platform. It provides API endpoints for creating, reading, updating, and deleting blog posts. The service includes basic user authentication and supports CRUD operations for blog posts, allowing users to manage their content effectively.

## Features

- **User Authentication**: Register and authenticate users.
- **Blog Post Management**: Create, read, update, and delete blog posts.
- **Tagging and Categories**: Organize posts with tags and categories.
- **Commenting System**: Allow users to comment on blog posts.
- **Search and Filtering**: Search for posts by title, tag, or category.

## Technologies

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **ORM**: TypeORM
- **Testing**: Jest

## Endpoints

### **Authentication**

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Login and receive a JWT token.

### **Blog Posts**

- `GET /posts`: Retrieve a list of blog posts.
- `POST /posts`: Create a new blog post.
- `GET /posts/:id`: Retrieve a specific blog post by ID.
- `PUT /posts/:id`: Update a specific blog post by ID.
- `DELETE /posts/:id`: Delete a specific blog post by ID.

### **Comments**

- `POST /posts/:id/comments`: Add a comment to a blog post.
- `GET /posts/:id/comments`: Retrieve comments for a specific blog post.

### **Tags and Categories**

- `GET /tags`: Retrieve a list of tags.
- `GET /categories`: Retrieve a list of categories.

## Setup

### Prerequisites

- Node.js (v20 or higher)
- PostgreSQL