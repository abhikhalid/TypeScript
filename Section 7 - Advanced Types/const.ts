let roles = ['admin', 'editor', 'viewer'] as const;

// roles.push('contributor'); // Error: Cannot add to a readonly array

const firstRole = roles[0]; // Type is 'admin'
const secondRole = roles[1];