import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";

export class mobilesController {
  private client: CMSClient;

  constructor(client: CMSClient) {
    this.client = client;
  }
  // Hämta alla
  public async getMobiles(req: Request, res: Response) {
    const data = await this.client.getMobiles();
    res.send(data.data);
  }

  // Hämta baserat på ID
  public async getMobile(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await this.client.getMobile(id);
    res.send(data.data);
  }

  // Ta bort baserat på ID
  public async deleteMobile(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteMobile(id);
      res.send("Id: " + id + " har tagits bort");
    } catch {
      res.send("Borttagning misslyckades");
    }
  }
  // Lägg till ny mobile
  public async addMobile(req: Request, res: Response) {
    const { name, description, manufacturer, price, screen_type } = req.body;
    try {
      this.client.addMobile(
        name,
        description,
        manufacturer,
        price,
        screen_type
      );
      res.send("Ny Mobile tillagd");
    } catch {
      res.send("Gick ej att lägga till");
    }
  }
  public async updateMobile(req: Request, res: Response) {
    const id = +req.params.id;
    const { name, description, manufacturer, price, screen_type } = req.body;
    try {
      this.client.updateMobile(
        id,
        name,
        description,
        manufacturer,
        price,
        screen_type
      );
      res.send("Mobile Uppdaterad");
    } catch {
      res.send("Gick ej att uppdatera");
    }
  }
}
