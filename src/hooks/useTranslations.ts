'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Import Spanish messages directly
import esMessages from '../../messages/es.json';

export function useTranslations(namespace: string) {
  const params = useParams();
  const locale = params.locale as string;
  const [messages, setMessages] = useState<Record<string, unknown>>(esMessages);

  const t = (key: string): string => {
    // Get the namespace messages
    const namespaceMessages = messages[namespace] as Record<string, unknown>;
    if (!namespaceMessages) {
      console.log(`Namespace ${namespace} not found in messages`);
      return key;
    }

    // Handle nested keys (e.g., 'items.residential.title')
    const keys = key.split('.');
    let value: unknown = namespaceMessages;
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.log(`Translation not found for key: ${namespace}.${key}`);
        return key;
      }
    }
    
    // Handle different types of values
    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'number') {
      return String(value);
    } else if (typeof value === 'boolean') {
      return String(value);
    } else if (value === null || value === undefined) {
      console.log(`Translation not found for key: ${namespace}.${key}`);
      return key;
    } else {
      // If it's an object, try to stringify it or return the key
      console.log(`Translation value is an object for key: ${namespace}.${key}`, value);
      return key;
    }
  };

  return t;
}

export function useLocale() {
  const params = useParams();
  return params.locale as string;
}
