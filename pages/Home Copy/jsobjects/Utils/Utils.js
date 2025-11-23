export default {
property: "User Name",
getGendersFromTable(){
	const genders = getGenders.data;
	return genders.map(g => ({
		label: g.gender,
		value: g.gender
	}))
}
}