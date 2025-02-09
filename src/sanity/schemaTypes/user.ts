// schemas/user.js

export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; email: { (): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().email().error('Please enter a valid email'),
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(6).error('Password must be at least 6 characters'),
      },
    ],
  };
  