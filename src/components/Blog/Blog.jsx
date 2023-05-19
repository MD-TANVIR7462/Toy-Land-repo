import React from 'react';

const Blog = () => {
  return (
    <div className=" py-8 text-primary px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>

        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is an access token and refresh token?</h2>
          <p>
           <span className='text-secondary font-bold'>Ans :</span>  An access token is a credential used to authenticate and authorize access to protected resources. It is typically a
            JSON Web Token (JWT) containing information about the user and permissions. Access tokens have a limited lifespan
            and are used to access resources on behalf of the authenticated user.
          </p>
          <p>
            A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires.
            It is typically stored securely on the client-side and sent to the server to request a new access token. Refresh
            tokens are used to provide a seamless user experience by avoiding frequent login prompts.
          </p>
          <p>
            On the client-side, access tokens and refresh tokens should be stored securely. Access tokens are often stored in
            memory or local storage for easy access during API requests. Refresh tokens should be stored in an HTTP-only cookie
            to prevent cross-site scripting (XSS) attacks and mitigate the risk of token theft.
          </p>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compare SQL and NoSQL databases</h2>
          <p>
          <span className='text-secondary font-bold'>Ans :</span>   SQL (Structured Query Language) databases are relational databases that store data in structured tables with fixed
            schemas. They use SQL for querying and managing data. SQL databases are best suited for complex data relationships
            and transactions that require ACID (Atomicity, Consistency, Isolation, Durability) properties. They provide strong
            data consistency and support for complex queries, but may sacrifice scalability.
          </p>
          <p>
            NoSQL (Not only SQL) databases, on the other hand, provide a flexible and scalable approach to data storage. They
            are non-relational databases that store data in various formats like key-value pairs, documents, graphs, or wide
            column stores. NoSQL databases are designed for high scalability and performance, making them suitable for
            large-scale applications with high traffic and dynamic schemas. However, they may sacrifice some data consistency
            and support for complex queries.
          </p>
          <p>
            The choice between SQL and NoSQL databases depends on the specific requirements of the project. SQL databases are
            ideal for applications that require strict data consistency and complex querying capabilities, while NoSQL databases
            excel in handling large volumes of data and scaling horizontally.
          </p>
        </div>

       
       
      </div>
    </div>
  );
};

export default Blog;