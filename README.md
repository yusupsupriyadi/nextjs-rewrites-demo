# Next.js Rewrites Demo

A demonstration of Next.js rewrites feature to modify API endpoint URLs. This project shows how to use Next.js rewrites to create clean, user-friendly URLs while internally redirecting to different endpoints.

## 🔄 Understanding Next.js Rewrites

### What are Rewrites?

Rewrites allow you to map an incoming request path to a different destination path. They are particularly useful when you want to:

-   Proxy requests to external APIs
-   Create clean, user-friendly URLs
-   Hide implementation details from the client
-   Maintain backward compatibility

### How Rewrites Work in This Demo

1. **Client-side URL**: When you click "Let's Testing", the app makes a request to:

    ```
    /my-api/products
    ```

2. **Server-side Rewrite**: Next.js internally redirects this request to:

    ```
    https://dummyjson.com/products/1
    ```

3. **Configuration**: This is configured in `next.config.js`:
    ```javascript
    module.exports = {
    	async rewrites() {
    		return [
    			{
    				source: '/my-api/products',
    				destination: 'https://dummyjson.com/products/1',
    			},
    		];
    	},
    };
    ```

### Benefits of Using Rewrites

1. **Security**: Hide external API endpoints from client-side code
2. **Flexibility**: Change backend endpoints without updating frontend code
3. **Clean URLs**: Present simple, meaningful URLs to users
4. **API Aggregation**: Combine multiple APIs under a single domain

## 🛠️ Technical Stack

-   **Framework**: Next.js 14
-   **Styling**: Tailwind CSS
-   **State Management**: React Hooks
-   **API Integration**: Fetch API with async/await
-   **Font**: Geist Sans (Vercel's system font)

## 🎯 Use Cases

1. **API Proxy**:

    - Hide third-party API endpoints
    - Add authentication headers server-side
    - Transform request/response data

2. **URL Management**:

    - Create shorter, cleaner URLs
    - Maintain old URLs while updating backend
    - Aggregate multiple services under one domain

3. **Development & Testing**:
    - Switch between development and production APIs
    - A/B testing different backend services
    - Mock API responses for testing

## 📚 Further Reading

-   [Next.js Rewrites Documentation](https://nextjs.org/docs/api-reference/next.config.js/rewrites)
-   [API Routes in Next.js](https://nextjs.org/docs/api-routes/introduction)
-   [Middleware in Next.js](https://nextjs.org/docs/middleware)

## 🚀 Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/yusupsupriyadi/nextjs-rewrites-demo.git
    cd nextjs-rewrites-demo
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
