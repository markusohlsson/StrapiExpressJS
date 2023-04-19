import { Request, Response } from "express";
import { CMSClient } from "../clients/cms_client";

export class computersController {
  private client: CMSClient;

  constructor(client: CMSClient) {
    this.client = client;
  }
  // Hämta Alla
  public async getComputers(req: Request, res: Response) {
    const data = await this.client.getComputers();
    res.send(data.data);
  }

  // Hämta baserat på ID
  public async getComputer(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await this.client.getComputer(id);
    res.send(data.data);
  }

  // Ta bort baserat på ID
  public async deleteComputer(req: Request, res: Response) {
    const id = +req.params.id;
    try {
      await this.client.deleteComputer(id);
      res.send("Id: " + id + " har tagits bort");
    } catch {
      res.send("Borttagning misslyckades");
    }
  }
  // Lägg till ny computer
  public async addComputer(req: Request, res: Response) {
    const { name, description, manufacturer, price, processor } = req.body;
    try {
      this.client.addComputer(
        name,
        description,
        manufacturer,
        price,
        processor
      );
      res.send("Ny Computer tillagd");
    } catch {
      res.send("Gick ej att lägga till");
    }
  }

  // Uppdatera Computer
  public async updateComputer(req: Request, res: Response) {
    const id = +req.params.id;
    const { name, description, manufacturer, price, processor } = req.body;
    try {
      this.client.updateComputer(
        id,
        name,
        description,
        manufacturer,
        price,
        processor
      );
      res.send("Computer Uppdaterat");
    } catch {
      res.send("Gick ej att uppdatera");
    }
  }
}
