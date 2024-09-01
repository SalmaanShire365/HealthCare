import bcrypt from 'bcryptjs';

const password = 'salmaanshire123';  // Replace with the password you want to hash

const generateHash = async () => {
  try {
    const hash = await bcrypt.hash(password, 12);
    console.log('Hashed Password:', hash);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
};

generateHash();
