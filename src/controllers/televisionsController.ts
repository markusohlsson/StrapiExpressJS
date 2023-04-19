import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";

export class televisionsController {
  private client: CMSClient;

  constructor(client: CMSClient) {
    this.client = client;
  }
  // Hämta alla
  public async getTelevisions(req: Request, res: Response) {
    const data = await this.client.getTelevisions();
    res.send(data.data);
  }
  // Hämta baserat på ID
  public async getTelevision(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await this.client.getTelevision(id);
    res.send(data.data);
  }

  // Ta bort baserat på ID
  public async deleteTelevision(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteTelevision(id);
      res.send("Id: " + id + " har tagits bort");
    } catch {
      res.send("Borttagning misslyckades");
    }
  }
  // Lägg till ny televisions
  public async addTelevision(req: Request, res: Response) {
    const { name, description, manufacturer, price, screensize } = req.body;
    try {
      this.client.addTelevision(
        name,
        description,
        manufacturer,
        price,
        screensize
      );
      res.send("Ny television tillagd");
    } catch {
      res.send("Gick ej att lägga till");
    }
  }
  // Uppdatera Televisions
  public async updateTelevision(req: Request, res: Response) {
    const id = +req.params.id;
    const { name, description, manufacturer, price, screensize } = req.body;
    try {
      this.client.updateTelevision(
        id,
        name,
        description,
        manufacturer,
        price,
        screensize
      );
      res.send("Television Uppdaterad");
    } catch {
      res.send("Gick ej att uppdatera");
    }
  }
}
