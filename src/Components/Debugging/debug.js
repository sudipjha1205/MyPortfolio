import React from 'react';
import { useForm } from '../Redux/FormContext';

const Debug = () => {
  const { formData } = useForm();

  console.log('formState:', formData);

  // ... rest of your component code
};

export default Debug;