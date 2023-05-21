import React from 'react';
import useTiitle from '../../hooks/useTitle';

const Blog = () => {
  useTiitle("Blog")
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

       
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is Express.js? What is Nest.js?</h2>
          <p>
          <span className='text-secondary font-bold'>Ans :</span>     Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and
            utilities to build web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing,
            and middleware integration, making it popular for building server-side applications in JavaScript or TypeScript.
          </p>
          <p>
            Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.
            It is built with TypeScript and takes advantage of modern JavaScript features and design patterns. Nest.js combines
            elements of Object-Oriented Programming (OOP), Functional Programming (FP), and Reactive Programming to provide a
            robust and extensible architecture. It offers modules, decorators, dependency injection, and other features to
            streamline development and encourage code reusability.
          </p>
          <p>
             Both Express.js and Nest.js are popular choices for building server-side applications, but they have different
            approaches and feature sets. Express.js is lightweight and suitable for small to medium-sized projects, while
            Nest.js provides a more structured and opinionated framework for larger applications with complex business logic and
            scalability requirements.
          </p>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is MongoDB aggregate and how does it work?</h2>
          <p>
          <span className='text-secondary font-bold'>Ans :</span>     MongoDB's aggregate is a powerful aggregation framework that allows you to perform advanced data analysis and
            manipulation operations on MongoDB collections. It provides a flexible pipeline-based approach for transforming and
            processing data.
          </p>
          <p>
            The aggregate framework consists of a sequence of stages, where each stage performs a specific operation on the
            input documents and passes the result to the next stage. Some common stages include $match (filtering documents),
            $group (grouping documents by specified criteria), $project (selecting or reshaping fields), $sort (sorting
            documents), and $lookup (performing a left outer join with other collections).
          </p>
          <p>
            By combining different stages in the pipeline, you can create complex data transformations, aggregations, and
            analytics queries. The aggregate framework provides powerful operators and expressions to manipulate data, perform
            calculations, and generate meaningful insights.
          </p>
          <p>
            Overall, MongoDB's aggregate framework offers a flexible and efficient way to process data within the database and
            retrieve aggregated results, eliminating the need for multiple round trips to the server and reducing network
            overhead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;