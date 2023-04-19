import axios from "axios";
const client = axios.create({ baseURL: "http://localhost:1337/api" });

export class CMSClient {
  // Televisions
  public async getTelevisions() {
    const response = await client.get("/televisions");
    return response.data;
  }
  public async getTelevision(id: number) {
    const response = await client.get(`/televisions/${id}`);
    return response.data;
  }
  public async deleteTelevision(id: number) {
    const response = await client.delete(`televisions/${id}`);
    return response.data;
  }
  public async addTelevision(
    name: string,
    description: string,
    manufacturer: string,
    price: number,
    screensize: number
  ) {
    const addedTv = await client.post("/televisions/", {
      data: {
        name: name,
        description: description,
        manufacturer: manufacturer,
        price: price,
        screensize: screensize,
      },
    });
    return addedTv;
  }

  public async updateTelevision(
    id: number,
    name: string,
    description: string,
    manufacturer: string,
    price: number,
    screensize: number
  ) {
    const response = await client.put(`/televisions/${id}`, {
      data: {
        name: name,
        description: description,
        manufacturer: manufacturer,
        price: price,
        screensize: screensize,
      },
    });
    return response;
  }

  // Mobiles
  public async getMobiles() {
    const response = await client.get("/mobiles");
    return response.data;
  }
  public async getMobile(id: number) {
    const response = await client.get(`/mobiles/${id}`);
    return response.data;
  }
  public async deleteMobile(id: number) {
    const response = await client.delete(`/mobiles/${id}`);
    return response.data;
  }
  public async addMobile(
    name: string,
    description: string,
    manufacturer: string,
    price: number,
    screen_type: string
  ) {
    const addedMobile = await client.post("/mobiles/", {
      data: {
        name: name,
        description: description,
        manufacturer: manufacturer,
        price: price,
        screen_type: screen_type,
      },
    });
    return addedMobile;
  }

  public async updateMobile(
    id: number,
    name: string,
    description: string,
    manufacturer: string,
    price: number,
    screen_type: string
  ) {
    const response = await client.put(`/mobiles/${id}`, {
      data: {
        name: name,
        description: description,
        manufacturer: manufacturer,
        price: price,
        screen_type: screen_type,
      },
    });
    return response;
  }

  // Computers
  public async getComputers() {
    const response = await client.get("/computers");
    return response.data;
  }
  public async getComputer(id: number) {
    const response = await client.get(`/computers/${id}`);
    return response.data;
  }
  public async deleteComputer(id: number) {
    const response = await client.delete(`/computers/${id}`);
    return response.data;
  }
  public async addComputer(
    name: string,
    description: string,
    manufacturer: string,
    price: number,
    processor: string
  ) {
    const addedComputer = await client.post("/computers/", {
      data: {
        name: name,
        description: description,
        manufacturer: manufacturer,
        price: price,
        processor: processor,
      },
    });
    return addedComputer;
  }
  public async updateComputer(
    id: number,
    name: string,
    description: string,
    manufacturer: string,
    price: number,
    processor: string
  ) {
    const response = await client.put(`/computers/${id}`, {
      data: {
        name: name,
        description: description,
        manufacturer: manufacturer,
        price: price,
        processor: processor,
      },
    });
    return response;
  }

  // Audios
  public async getAudios() {
    const response = await client.get("/audios");
    return response.data;
  }

  public async getAudio(id: number) {
    const response = await client.get(`/audios/${id}`);
    return response.data;
  }

  public async deleteAudio(id: number) {
    const response = await client.delete(`/audios/${id}`);
    return response.data;
  }

  public async addAudio(
    name: string,
    description: string,
    manufacturer: string,
    price: number,
    effect: number
  ) {
    const addedMovie = await client.post("/audios/", {
      data: {
        name: name,
        description: description,
        manufacturer: manufacturer,
        price: price,
        effect: effect,
      },
    });
    return addedMovie;
  }

  public async updateAudio(
    id: number,
    name: string,
    description: string,
    manufacturer: string,
    price: number,
    effect: number
  ) {
    const response = await client.put(`/audios/${id}`, {
      data: {
        name: name,
        description: description,
        manufacturer: manufacturer,
        price: price,
        effect: effect,
      },
    });
    return response;
  }
}
