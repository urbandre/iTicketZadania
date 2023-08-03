const user = {
	role: 'Admin',
	username: 'admin',
	age: 26,
	email: 'test@mail.com'
  };
  
  for (let key in user) {

	  console.log(key + ': ' + user[key]);
	
  }