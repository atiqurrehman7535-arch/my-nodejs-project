const fetch = require('node-fetch');


async function getUserData() {
  try {
    
    console.log('📥 Fetching users...');
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();

    
    console.log('🔍 Filtering users...');
    const filteredUsers = users.filter(({ company }) => {
      const catchPhrase = company && company.catchPhrase ? company.catchPhrase.toLowerCase() : '';
      return catchPhrase.includes('group') || catchPhrase.includes('service');
    });

    if (filteredUsers.length === 0) {
      console.log('No users matched the filter for "group" or "service" in company.catchPhrase.');
      return [];
    }

    
    console.log('✨ Formatting data...');
    const formattedUsers = filteredUsers.map(({ name, email, address }) => {
      const city = address.city;
      
      
      return `User: ${name} | Email: ${email} | City: ${city}`;
    });

    
    console.log('\n✅ Results:\n');
    formattedUsers.forEach(user => console.log(user));

    return formattedUsers;
  } catch (error) {
    console.error('❌ Error:', error);
  }
}


getUserData();