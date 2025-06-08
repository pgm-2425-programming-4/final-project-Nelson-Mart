export const API_URL = import.meta.env.PROD
  ? "https://jammin-api-zu4u.onrender.com/api/students"
  : "http://localhost:1337/api";
  
export const API_TOKEN = import.meta.env.PROD
  ? "542b41bfc5bd361b7c8b1dad08cfe3120dcb135a1567c2206c261921419676fae31a75800c0b2534a5241302c8f75e407a9400452d4808d3ed09c71d57a3e48a4f4b0d3f184f9b5b7d831d36a2cbec3e537d6ed665074973dd7c2bbdefba5fd8b43c4b5f8066b33e045c0f809a8e0f554102ea430d19d9a4446a2f7f6cababd0"
  : "ae33c8c70b7a7e3391baf2c92058b09156b2cbe79a2393545428c26fd03c16e844b7d35b6de528218d155f4e3ff509cdd24f9e3ade66b462c95c0cee47184f066a08f53233dd8fd0dae250b7613589e85ec20082f5c40f7e18e9aa4877fcb9396e4667421c45b11a0ab1d8a6b2b11187aa6049adee1089c4d66a700f9fec8e24";
export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];
