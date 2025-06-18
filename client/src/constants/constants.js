export const API_URL = import.meta.env.PROD
  ? "https://jammin-api-zu4u.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "542b41bfc5bd361b7c8b1dad08cfe3120dcb135a1567c2206c261921419676fae31a75800c0b2534a5241302c8f75e407a9400452d4808d3ed09c71d57a3e48a4f4b0d3f184f9b5b7d831d36a2cbec3e537d6ed665074973dd7c2bbdefba5fd8b43c4b5f8066b33e045c0f809a8e0f554102ea430d19d9a4446a2f7f6cababd0"
  : "9ea1ab070724856fc6f50b12e14d0a9ea4348effc5e88802bf29e1cb70a2b6f57076234291e499dd986f86e578febf9d56ab0077fb1c25c1c80303e074999ea7be766e090bfedc6c690ea2ab4252847e38d70d644d41bc719a618a07a2f8bce5392db2a6b087da6c4a7a61e8dabe0db58c27f2b244c510dfe8e2fc38377f160f";
export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];
