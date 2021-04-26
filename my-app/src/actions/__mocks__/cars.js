const fakeData = 
	{cars: 
		[
		 {
		   "carID": 574424,
		   "make": "Hyundai",
		   "model": "Elantra GT",
		   "color": "Gray"
		 },
		 {
		   "carID": 573513,
		   "make": "Jeep",
		   "model": "Compass",
		   "color": "Tan"
		 },
		 {
		   "carID": 573788,
		   "make": "Kia",
		   "model": "Soul",
		   "color": "Gray"
		 }
		],
	allFilters: {uniqueMakes: ["Toyota", "Chevrolet"],
					uniqueModels: ["Ram", "Ultima"]}
	}

export async function getCarsAndFilters() {
    const response = await new Promise((resolve)=>{
    	resolve(fakeData)
    })
    return response
}
