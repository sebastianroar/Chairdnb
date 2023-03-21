import { BASE_URI } from "../config";

export async function getAll() {
  try {
    const response = await fetch(BASE_URI + "all");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAdventures() {
  try {
    const response = await fetch(BASE_URI + "adventures");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccommodations() {
  try {
    const response = await fetch(BASE_URI + "accommodations");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getExperiences() {
  try {
    const response = await fetch(BASE_URI + "experiences");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFeatured() {
  try {
    const response = await fetch(BASE_URI + "featured");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
