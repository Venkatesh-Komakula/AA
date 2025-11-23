export default {
	dummy() {
		FindCountry.run().then(() => {
      FindUsersFromCountry.run().then(() => {
				// query dependant on FindUsersFrom Country
			});
    });
	},
	async fetchDataUsingCountries() {
		try {
		  const countries = await FindCountry.run();
		  const usersFromCountry = await FindUsersFromCountry.run({
			  country: countries[0].country
		  });
		  return usersFromCountry;
	  }
		catch (e) {
			console.log(e)
		}
	}
}