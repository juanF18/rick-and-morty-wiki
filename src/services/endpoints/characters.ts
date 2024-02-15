import axios from "axios";
import { Character, ResponseApi } from "../../interfaces";

export async function getCharacters(): Promise<Character[]> {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const data = response.data as ResponseApi;
    return data.results as Character[];
  } catch (erro) {
    throw new Error("Ups! Tenemos un error");
  }
}
