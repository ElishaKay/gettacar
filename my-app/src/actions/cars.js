
export async function getCarsAndFilters() {
    const response = await fetch('/api/cars');
    return await response.json();
}

export async function getCarsByMake(make) {
	console.log('make in getCarsByMake action', make);

    const response = await fetch(`/api/cars/make/${make}`);
    return await response.json();
}

export async function getCarsByModel(model) {
	console.log('model in getCarsByModel service', model);

    const response = await fetch(`/api/cars/model/${model}`);
    return await response.json();
}

export async function getCarsBySearch(search) {
	console.log('search', search);

    const response = await fetch(`/api/cars/search/${search}`);
    return await response.json();
}
