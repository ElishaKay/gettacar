export async function getCarsAndFilters() {
    const response = await fetch('/api/cars');
    return await response.json();
}

export async function getCarsByMake(make) {
    const response = await fetch(`/api/cars/make/${make}`);
    return await response.json();
}

export async function getCarsByModel(model) {
    const response = await fetch(`/api/cars/model/${model}`);
    return await response.json();
}

export async function getCarsBySearch(search) {
    const response = await fetch(`/api/cars/search/${search}`);
    return await response.json();
}
