import { useIdentify } from '@veltdev/react';

export default function AuthComponent() {
  // Hardcoded user info
  const hardcodedUser = {
    userId: 'user-1',
    name: 'John Doe',
    color: '#FF5733', // Example hex color
    textColor: '#FFFFFF',
    organizationId: 'ads-inventory-org-1'
  };

  // Call useIdentify hook directly in the component
  useIdentify(hardcodedUser);

  // No UI needed since we're auto-identifying
  return null;
} 