import { Request, Response, response } from "express";
import { CMSClient } from "../clients/cms_client";

export class audiosController {
  private client: CMSClient;

  constructor(client: CMSClient) {
    this.client = client;
  }
  // Hämta alla
  public async getAudios(req: Request, res: Response) {
    const data = await this.client.getAudios();
    res.send(data.data);
  }
  // Hämta baserat på ID
  public async getAudio(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await this.client.getAudio(id);
    res.send(data.data);
  }

  // Ta bort baserat på ID
  public async deleteAudio(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteAudio(id);
      res.send("Id: " + id + " har tagits bort");
    } catch {
      res.send("Borttagning misslyckades");
    }
  }

  // Lägg till ny audio
  public async addAudio(req: Request, res: Response) {
    const { name, description, manufacturer, price, effect } = req.body;
    try {
      this.client.addAudio(name, description, manufacturer, price, effect);
      res.send("Ny Audio tillagd");
    } catch {
      res.send("Gick ej att lägga till");
    }
  }

  // Uppdatera Audio
  public async updateAudio(req: Request, res: Response) {
    const id = +req.params.id;
    const { name, description, manufacturer, price, effect } = req.body;
    try {
      this.client.updateAudio(
        id,
        name,
        description,
        manufacturer,
        price,
        effect
      );
      res.send("Audio Uppdaterat");
    } catch {
      res.send("Gick ej att uppdatera");
    }
  }
}
