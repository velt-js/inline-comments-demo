import { useIdentify } from '@veltdev/react';

export function UserAvatar() {
  const hardcodedUser = {
    userId: 'user-1',
    name: 'John Doe',
    color: '#FF5733',
    textColor: '#FFFFFF',
    organizationId: 'ads-inventory-org-1'
  };

  return (
    <div 
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
      style={{ backgroundColor: hardcodedUser.color }}
    >
      {hardcodedUser.name.split(' ').map(n => n[0]).join('')}
    </div>
  );
} 